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
		this.radius = radix.radius;
				
		this.shift = radix.shift;		
						
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		context = this; 
												
		return this;
	};
		
	/**
	 * Draw points
	 */
	astrology.Transit.prototype.drawPoints = function(){
		if(this.data.planets == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS );
					
		var gap = astrology.MARGIN;		
		var step = ( gap - astrology.PADDING ) / Object.keys(this.data.planets).length;
								
		var locatedPoints = [];												
		for (var planet in this.data.planets) {
 			if (this.data.planets.hasOwnProperty( planet )) {
 				 				 				 				 	
 				var pointRadius = this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + astrology.PADDING;
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, pointRadius, this.data.planets[planet][0] + this.shift);
 		   		 		   		 		   		 		   	 		   
 		   		var isCollision = true; 		   		 		   		
 		   		while(isCollision){ 		   		 		   			
 		   			 		   		
 		   			var isFinish = true; 		   			
 		   			for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
 		   				
 		   				if( astrology.utils.isCollision({x:position.x, y:position.y, r:astrology.COLLISION_RADIUS},{x:locatedPoints[i].x, y:locatedPoints[i].y, r:astrology.COLLISION_RADIUS})){
 		   					pointRadius += step;
 		   					position = astrology.utils.getPointPosition( this.cx, this.cy, pointRadius, this.data.planets[planet][0] + this.shift);
 		   					isFinish = false;
 		   					break;
 		   				} 		   			
 		   			}
 		   			
 		   			if(isFinish){
 		   				isCollision = false;
 		   			} 		   			 		   		 		   			
 		   		} 		   		
        		locatedPoints.push(position); 
 				 				 				 				 				 				 				 			 			 				 				 				 				  				 			 		   		 		   
 		   		var symbol = this.paper.getSymbol(planet, position.x, position.y);
        		symbol.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS + "-" + planet);
        		symbol.setAttribute('data-radius', pointRadius); 		   		 		   	
        		wrapper.appendChild( symbol );        		            		        		 
    		}
		}							
	};
	
	/**
	 * Draw circles
	 */
	astrology.Transit.prototype.drawCircles = function drawCircles(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CIRCLES);
		var radius = this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO;
		
		// rays
        var lineLength = 3;
        for( i = 0, start = 0, step = 5;i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, radius, start  + this.shift);
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, radius + lineLength, start + this.shift);
        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);        	
        	line.setAttribute("stroke", astrology.CIRCLE_COLOR );		 				 				 		
 			line.setAttribute("stroke-width", 1);        	        
       		universe.appendChild( line );
       		start += step;
       	}
		
		var circle;
		
		//outdoor circle
		circle = this.paper.circle( this.cx, this.cy, radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", astrology.CIRCLE_STRONG);
        wrapper.appendChild( circle );										
	}
	
	/**
	 * Draw cusps
	 */
	astrology.Transit.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;
		var numbersRadius = this.radius + ((this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2);
		
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
			// Lines 			 			 		 		
 			var startPosition = bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, this.data.cusps[i] + this.shift);
 			var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, this.data.cusps[i] + this.shift);
 			var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
 			line.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
 			line.setAttribute("stroke-width", 1); 
 			
 			universe.appendChild( line );
 			
 			
 			
 			// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	universe.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y ));
 						
		}	
	}
	
	/**
	 * Draw aspects
	 */
	astrology.Transit.prototype.aspects = function( data ){
		
		// TODO		
        return context;				
	};
		
	/**
	 * Moves points to another position.
	 * 
 	 * @param {Object} data
	 */
	astrology.Transit.prototype.animate = function( data ){
		// TODO
	};
				
}( window.astrology = window.astrology || {}));
