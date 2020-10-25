// ## Radix chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Radix charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.SVG} paper 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius
	 * @param {Object} data
	 */
	astrology.Radix = function( paper, cx, cy, radius, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
		
		this.data = data;								
		this.paper = paper; 
		this.cx = cx;
		this.cy = cy;
		this.radius = radius;
		
		// after calling this.drawPoints() it contains current position of point
		this.locatedPoints = [];
		this.rulerRadius = ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/astrology.RULER_RADIUS);
		this.pointRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + 2*this.rulerRadius + (astrology.PADDING * astrology.SYMBOL_SCALE));
					
		//@see astrology.Radix.prototype.aspects()
		//@see astrology.Radix.prototype.setPointsOfInterest() 
        this.toPoints = JSON.parse(JSON.stringify(this.data.planets)); // Clone object
                	
		this.shift = 0;		
		if(this.data.cusps && this.data.cusps[0]){
			var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
			this.shift = deg360 - this.data.cusps[0];	
		}	
		
		// preparing wrapper for aspects. It is the lowest layer
		var divisionForAspects = document.createElementNS(this.paper.root.namespaceURI, "g");
		divisionForAspects.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_ASPECTS);
		this.paper.root.appendChild( divisionForAspects );
				
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_RADIX);
		this.paper.root.appendChild( this.universe );														
						
		context = this;
			
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Radix.prototype.drawBg = function(){				
		var universe = this.universe;	
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_BG);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );					
	};
		
	/**
	 * Draw universe.
	 */
	astrology.Radix.prototype.drawUniverse = function(){
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_SIGNS);
						
		// colors 
        for( var i = 0, step = 30, start = this.shift, len = astrology.COLORS_SIGNS.length; i < len; i++ ){ 
        	        	        	       	        	                	        	        	     
        	var segment = this.paper.segment( this.cx, this.cy, this.radius, start, start+step, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);        	        	
					segment.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLORS_SIGNS[i]);
					segment.setAttribute("id", astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_SIGNS + "-" + i)
        	segment.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.CIRCLE_COLOR: "none");		 				 				 		
 					segment.setAttribute("stroke-width", astrology.STROKE_ONLY ? 1 : 0); 				
        	wrapper.appendChild( segment );
        	        	        	        	        	        	               	
					start += step;
        };
                       
        // signs
        for( var i = 0, step = 30, start = 15 + this.shift, len = astrology.SYMBOL_SIGNS.length; i < len; i++ ){ 
        	var position = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2, start);       	        	                	
        	wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_SIGNS[i], position.x, position.y));        	        	        	               		
			start += step;
        }        
	};
	
	/**
	 * Draw points
	 */
	astrology.Radix.prototype.drawPoints = function(){
		if(this.data.planets == null){
			return;
		}
				
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*(astrology.PADDING* astrology.SYMBOL_SCALE) ) / Object.keys(this.data.planets).length;
					
		var pointerRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius);
		var startPosition, endPosition;
																					
		for (var planet in this.data.planets) {
 		   if (this.data.planets.hasOwnProperty( planet )) {
 		   	 		   	 		   		 		   		
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, this.pointRadius, this.data.planets[planet][0] + this.shift); 		   	
 		   		var point = {name:planet, x:position.x, y:position.y, r:(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle:this.data.planets[planet][0] + this.shift, pointer:this.data.planets[planet][0] + this.shift}; 		   		 		   		 		   		 		  
 		   		this.locatedPoints = astrology.utils.assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius});   
 		   	} 		
		}
		
		if( astrology.DEBUG ) console.log( "Radix count of points: " + this.locatedPoints.length );
		if( astrology.DEBUG ) console.log( "Radix located points:\n" + JSON.stringify(this.locatedPoints) );
											
		this.locatedPoints.forEach(function(point){
						        
        	// draw pointer        	
        	startPosition = astrology.utils.getPointPosition( this.cx, this.cy, pointerRadius, this.data.planets[point.name][0] + this.shift);
        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, pointerRadius-this.rulerRadius/2, this.data.planets[point.name][0] + this.shift );
        	var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
        	pointer.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
			pointer.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        	wrapper.appendChild(pointer);
        	
        	// draw pointer line
        	if( !astrology.STROKE_ONLY && (this.data.planets[point.name][0] + this.shift) != point.angle){	        	
	        	startPosition = endPosition;
	        	endPosition = astrology.utils.getPointPosition(this.cx, this.cy, this.pointRadius + (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), point.angle );
	        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
	        	line.setAttribute("stroke", astrology.LINE_COLOR);	
	        	line.setAttribute("stroke-width", 0.5 * (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));        	
	        	wrapper.appendChild(line);
        	}        	
        	
        	// draw symbol						
			var symbol = this.paper.getSymbol(point.name, point.x, point.y);
        	symbol.setAttribute('id', astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS + "-" + point.name);        	
        	wrapper.appendChild( symbol );
        	        	        	        
        	// draw point descriptions
        	var textsToShow = [(Math.round(this.data.planets[point.name][0]) % 30).toString()];
        	
        	var zodiac = new astrology.Zodiac(this.data.cusps);
        	
        	if(this.data.planets[point.name][1] && zodiac.isRetrograde(this.data.planets[point.name][1])){
        		textsToShow.push("R");
        	}else{
        		textsToShow.push("");
        	}
        	textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":this.data.planets[point.name][0]}, astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
        	        	        	        	        	        	      	        	         	        	        	      
        	var pointDescriptions = astrology.utils.getDescriptionPosition(point, textsToShow);         	
        	pointDescriptions.forEach(function(dsc){        		        		        		     
				wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, astrology.POINTS_TEXT_SIZE, astrology.SIGNS_COLOR) );	        		
        	}, this);
        	        	        	        	       	              	        	          			
		}, this);		
	};
	
	astrology.Radix.prototype.drawAxis = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_AXIS);
		
		var axisRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/4);
					
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var overlapLine, 
		startPosition, 
		endPosition, 
		line,
		lines;
				
		[AS,IC,DC,MC].forEach( function(i) {
																    								    								    								    								    																		 	 					 				 				 
			// overlap 												
			startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, this.data.cusps[i] + this.shift);
			endPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius, this.data.cusps[i] + this.shift);
			overlapLine = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y); 				 			
			overlapLine.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
			overlapLine.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
			wrapper.appendChild( overlapLine ); 
						 				 																
			// As
		 	if(i == AS){ 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (20 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_AS, textPosition.x, textPosition.y));
		 	}
		 	 		 	 		 	 		
		 	// Ds
		 	if(i == DC){  		 		 		 		 		 		 		 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (2 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_DS, textPosition.x, textPosition.y));
		 	}
		 	 		 	
		 	// Ic
		 	if(i == IC){ 
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] - 2 + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_IC, textPosition.x, textPosition.y));
		 	}
		 	
		 	// Mc
		 	if(i == MC){ 		 		 		 	
		 		// Text
		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] + 2 + this.shift);
		 		wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_MC, textPosition.x, textPosition.y));
		 	} 
	 	}, this);
	};
	
	/**
	 * Draw cusps
	 */
	astrology.Radix.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var startPosition, endPosition, lines, line;
		var universe = this.universe;
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_CUSPS);
				
		var numbersRadius = this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO + (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var mainAxis = [AS,IC,DC,MC];
											
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
 			
 			// Draws a dashed line when an point is in the way
 			lines = astrology.utils.getDashedLinesPositions(
 				this.cx, 
 				this.cy, 
 				this.data.cusps[i] + this.shift, 
 				this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, 
 				this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius),
 				this.pointRadius,
 				this.locatedPoints
 				);
 				
 			lines.forEach(function(line){ 				
 				line = this.paper.line( line.startX, line.startY, line.endX, line.endY);
 				line.setAttribute("stroke", astrology.LINE_COLOR);	 				 			 				 			
 				
 				if(mainAxis.indexOf(i) != -1){ 					
 					line.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));
 				}else{
 					line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));	 					
 				}	 			 			 	
 				 				 				 				 			 						 			 			 	
 		 		wrapper.appendChild( line );  				
 			}, this);	
 			 			 			 			 		 			 		 	 		
 		 	// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 		 	  		 			  		 			
		}						      	      
	};
	
	/**
	 * Draw aspects
	 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
	 */
	astrology.Radix.prototype.aspects = function( customAspects ){
															
		var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						  customAspects : 
						  new astrology.AspectCalculator( this.toPoints ).radix( this.data.planets );
						  						  						 						  										
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_ASPECTS);
								
		var duplicateCheck = [];
		
		for(var i = 0, ln = aspectsList.length; i < ln; i++){
			
			var key 		= aspectsList[i].aspect.name + "-" + aspectsList[i].point.name + "-" + aspectsList[i].toPoint.name;
			var opositeKey	= aspectsList[i].aspect.name + "-" + aspectsList[i].toPoint.name + "-" + aspectsList[i].point.name;									
			if( duplicateCheck.indexOf( opositeKey ) == -1 ){			
				duplicateCheck.push( key );
																			
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
		}
										     
        // this
        return context;
	};
	
	/**
	 * Add points of interest for aspects calculation
	 * @param {Obect} points, {"As":[0],"Ic":[90],"Ds":[180],"Mc":[270]} 
	 * @see (astrology.AspectCalculator( toPoints) )
	 */
	astrology.Radix.prototype.addPointsOfInterest = function( points ){
		
		for(point in points){
			this.toPoints[ point ] = points[point]; 	
		}
						
        return context;	
	};
		
	astrology.Radix.prototype.drawRuler = function drawRuler(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_RULER);
				
		var startRadius = (this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.rulerRadius));		
		var rays = astrology.utils.getRulerPositions( this.cx, this.cy, startRadius, startRadius + this.rulerRadius, this.shift);
		
		rays.forEach(function( ray ){
			var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
			line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
			line.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));       		
			wrapper.appendChild( line );				
		}, this);

		var circle;			
		circle = this.paper.circle( this.cx, this.cy, startRadius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );       	       	
	};
	
	/**
	 * Draw circles
	 */
	astrology.Radix.prototype.drawCircles = function drawCircles(){
	
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_CIRCLES);
														
		var circle;
						      
        //indoor circle
        circle = this.paper.circle( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
        circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));		
       	wrapper.appendChild( circle );     
       	
       	//outdoor circle
		circle = this.paper.circle( this.cx, this.cy, this.radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );
       	
       	//inner circle
       	circle = this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
       	circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", (astrology.CIRCLE_STRONG * astrology.SYMBOL_SCALE));
        wrapper.appendChild( circle );  	       	       	       	       	   
	};
			
	/**
	 * Display transit horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"planets":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],	*		 
	 *	} 
	 * 
	 * @return {astrology.Transit} transit
	 */
	astrology.Radix.prototype.transit = function( data ){
		
		// remove axis (As, Ds, Mc, Ic) from radix
		astrology.utils.getEmptyWrapper( this.universe, astrology._paperElementId + "-" + astrology.ID_RADIX + "-" + astrology.ID_AXIS);
		
		var transit = new astrology.Transit(context, data);
		transit.drawBg();					
		transit.drawPoints();		
		transit.drawCusps();	
		transit.drawRuler();			
		transit.drawCircles();	
		return transit; 			
	};
		
}( window.astrology = window.astrology || {}));
