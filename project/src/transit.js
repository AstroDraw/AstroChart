// ## Transit chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Transit charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.Radix} radix 
	 * @param {Object} data
	 */
	astrology.Transit = function( radix, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
						
		this.data = data;								
		this.paper = radix.paper; 
		this.cx = radix.cx;
		this.cy = radix.cy;
		this.toPoints = radix.toPoints;
		this.radius = radix.radius;
				
		this.rulerRadius = ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/astrology.RULER_RADIUS);
		this.pointRadius = this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO +  (astrology.PADDING * astrology.SYMBOL_SCALE));
											
		this.shift = radix.shift;		
						
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', this.paper.elementId + "-" + astrology.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		context = this; 
												
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Transit.prototype.drawBg = function(){				
		var universe = this.universe;		
						
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_BG);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius+this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );							
	};
				
	/**
	 * Draw planets
	 * 
	 * @param{undefined | Object} planetsData, posible data planets to draw
	 */
	astrology.Transit.prototype.drawPoints = function( planetsData ){
		
		var planets = (planetsData == null) ? this.data.planets : planetsData;		
		if(planets == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*(astrology.PADDING * astrology.SYMBOL_SCALE)) / Object.keys(planets).length;
					
		var pointerRadius = this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
		var startPosition, endPosition;
		
		this.locatedPoints = [];																			
		for (var planet in planets) {
 		   if (planets.hasOwnProperty( planet )) {
 		   	 		   	 		   		 		   		
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, this.pointRadius, planets[planet][0] + this.shift); 		   	
 		   		var point = {name:planet, x:position.x, y:position.y, r:(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle:planets[planet][0] + this.shift, pointer:planets[planet][0] + this.shift}; 		   		
 		   		this.locatedPoints = astrology.utils.assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius});   
 		   	} 		
		}
		
		if( astrology.DEBUG ) console.log( "Transit count of points: " + this.locatedPoints.length );
		if( astrology.DEBUG ) console.log( "Transit located points:\n" + JSON.stringify(this.locatedPoints) );
													
		this.locatedPoints.forEach(function(point){
						        
        	// draw pointer        	
        	startPosition = astrology.utils.getPointPosition( this.cx, this.cy, pointerRadius, planets[point.name][0] + this.shift);
        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, pointerRadius+this.rulerRadius/2, planets[point.name][0] + this.shift );
        	var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
        	pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
			pointer.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        	wrapper.appendChild(pointer);
        	
        	// draw pointer line
        	if( !astrology.STROKE_ONLY && (planets[point.name][0] + this.shift) != point.angle){	        	
	        	startPosition = endPosition;
	        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, this.pointRadius-(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), point.angle );
	        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
	        	line.setAttribute("stroke", astrology.LINE_COLOR);		        	
	        	line.setAttribute("stroke-width", 0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       	
	        	wrapper.appendChild(line);
        	}        	
        	
        	// draw symbol						
			var symbol = this.paper.getSymbol(point.name, point.x, point.y);
        	symbol.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS + "-" + point.name);
        	wrapper.appendChild( symbol );
        	        	        	        
        	// draw point descriptions
        	var textsToShow = [(Math.round(planets[point.name][0]) % 30).toString()];
        	
        	var zodiac = new astrology.Zodiac(this.data.cusps);
        	if(planets[point.name][1] && zodiac.isRetrograde(planets[point.name][1])){
        		textsToShow.push("R");
        	}else{
        		textsToShow.push("");
        	}
        	textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":planets[point.name][0]}, astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
        	         	           	        	        	        	 
        	var pointDescriptions = astrology.utils.getDescriptionPosition(point, textsToShow);         	
        	pointDescriptions.forEach(function(dsc){        		        		        		     
				wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.SIGNS_COLOR) );	        		
        	}, this);
        	        	        	        	       	              	        	          			
		}, this);										
	};
	
	/**
	 * Draw circles
	 */
	astrology.Transit.prototype.drawCircles = function drawCircles(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CIRCLES);
		var radius = this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO;
			
		var circle;			
		circle = this.paper.circle( this.cx, this.cy, radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );										
	};
	
	/**
	 * Draw cusps
	 * @param{undefined | Object} cuspsData, posible data cusps to draw
	 */
	astrology.Transit.prototype.drawCusps = function( cuspsData ){
		
		var cusps = (cuspsData == null) ? this.data.cusps : cuspsData;		
		if(cusps == null){
			return;
		}
						
		var startPosition, endPosition, lines, line;
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);		
		var numbersRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius)/2);
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var mainAxis = [AS,IC,DC,MC];
		
		//Cusps
		for (var i = 0, ln = cusps.length; i < ln; i++) {
			// Lines 			 			 		 		
 			var startPosition = bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, cusps[i] + this.shift);
 			var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius, cusps[i] + this.shift);
 			var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
 			line.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
 			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE)); 
 			
 			wrapper.appendChild( line );
 			 			 		
 			// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = cusps[i];
 		 	var endOfCusp = cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 						
		}				
	};
		
	astrology.Transit.prototype.drawRuler = function drawRuler(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_RULER);
				
		var startRadius = (this.radius + (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO));		
		var rays = astrology.utils.getRulerPositions( this.cx, this.cy, startRadius, startRadius - this.rulerRadius, this.shift);
		
		rays.forEach(function( ray ){
			var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
			line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       		
			wrapper.appendChild( line );				
		}, this);

		var circle;			
		circle = this.paper.circle( this.cx, this.cy, startRadius - this.rulerRadius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );       	       	
	};
		
	/**
	 * Draw aspects
	 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
	 */
	astrology.Transit.prototype.aspects = function( customAspects ){
		
		var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						  customAspects : 
						  new astrology.AspectCalculator( this.toPoints ).radix( this.data.planets );
							
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_ASPECTS);
																										
		for(var i = 0, ln = aspectsList.length; i < ln; i++){
														
			var startPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].toPoint.position + this.shift );
			var endPoint = astrology.utils.getPointPosition(this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].point.position + this.shift);
								
			var line = this.paper.line( startPoint.x, startPoint.y, endPoint.x, endPoint.y);       		       		       
			line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.LINE_COLOR : aspectsList[i].aspect.color);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));  
			
			line.setAttribute("data-name", aspectsList[i].aspect.name);
			line.setAttribute("data-degree", aspectsList[i].aspect.degree);				
			line.setAttribute("data-point", aspectsList[i].point.name);   		
			line.setAttribute("data-toPoint", aspectsList[i].toPoint.name);
			line.setAttribute("data-precision", aspectsList[i].precision);
						     	
			wrapper.appendChild( line );				
		}         
		         
        // this
        return context;				
	};
		
	/**
	 * Moves points to another position.
	 * 
 	 * @param {Object} data - planets target positions.
 	 * @param {Integer} duration - in seconds
 	 * @param {boolean} isReverse 	  	 
 	 * @param {Function | undefined} callbck - the function executed at the end of animation
	 */
	astrology.Transit.prototype.animate = function( data, duration, isReverse, callback ){
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
							
		// remove aspects
		astrology.utils.getEmptyWrapper( this.universe, astrology._paperElementId + "-" + astrology.ID_ASPECTS);
																				
		var animator = new astrology.Animator( context );			
		animator.animate( data, duration, isReverse, (function(){
			
			// animation is finished
			this.data = data;
			this.drawPoints();		
			this.drawCusps();
			this.aspects();
			
			if(typeof callback == 'function'){
				callback();
			}
						
		}).bind(this));
																											
		 // this
        return context;				
	};
		
}( window.astrology = window.astrology || {}));