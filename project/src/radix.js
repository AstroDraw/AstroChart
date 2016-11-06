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
	 */
	astrology.Radix = function( paper, cx, cy, radius ){
										
		this.paper = paper; 
		this.cx = cx;
		this.cy = cy;
		this.radius = radius;
		
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology.ID_RADIX);
		this.paper.root.appendChild( this.universe );
		
		context = this;
			
		return this;
	};
	
	/**
	 * Draw universe.
	 */
	astrology.Radix.prototype.drawUniverse = function(){
		var universe = this.universe;
		
		// colors 
        for( var i = 0, step = 30, start = 0, len = astrology.COLORS_SIGNS.length; i < len; i++ ){        	        	                	
        	
        	var bottomSegment = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, start+step, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, astrology.COLORS_SIGNS[i]);
        	bottomSegment.setAttribute("fill-opacity", astrology.COLOR_OPACITY);
        	universe.appendChild( bottomSegment );
        	
        	var topSegment = this.paper.segment( this.cx, this.cy, this.radius, start, start+step, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, astrology.COLORS_SIGNS[i]);
        	universe.appendChild( topSegment );
        	        	        	        	               		
			start += step;
        };
	};
	
	/**
	 * Draw points
	 * .
	 * @param {Object} points
	 */
	astrology.Radix.prototype.drawPoints = function( points ){
		var universe = this.universe;
		
		// Planets can not be displayed on the same radius.
		// The gap between indoor circle and outdoor circle / count of planets
		var margin = astrology.MARGIN_POINTS * astrology.SYMBOL_SCALE;
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
		var radiusStep = (gap - margin) / Object.keys(points).length;	
		var planetRadius = (this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO) + margin;
									
		for (var planet in points) {
 		   if (points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius , points[planet]);
        		universe.appendChild( this.paper.getSymbol(planet, position.x, position.y));
        		planetRadius += radiusStep;
    		}
		}		
	};
	
	/**
	 * Draw cusps
	 * .
	 * @param {Array} cusps
	 */
	astrology.Radix.prototype.drawCusps = function( cusps ){
		var universe = this.universe;
		
		//Cusps
		for (var i = 0, ln = cusps.length; i < ln; i++) {
 			var bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, cusps[i]);
 			var topPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, cusps[i]);
 		 	universe.appendChild( this.paper.line( bottomPosition.x, bottomPosition.y, topPosition.x, topPosition.y, astrology.COLOR_LINE, "5, 5"));
		}
	};
	
	/**
	 * Draw aspects
	 * @param {Array} data.
	 */
	astrology.Radix.prototype.drawAspects = function(data){
		
	};
	
	/**
	 * Draw signs symbols
	 * .
	 */
	astrology.Radix.prototype.drawSigns = function(){
		var universe = this.universe;
		
		// signs
        for( var i = 0, step = 30, start = 15, len = astrology.SYMBOL_SIGNS.length; i < len; i++ ){ 
        	var position = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2, start);       	        	                	
        	universe.appendChild( this.paper.getSymbol( astrology.SYMBOL_SIGNS[i], position.x, position.y));        	        	        	               		
			start += step;
        }
	};
	
	/**
	 * Draw circles
	 * .
	 */
	astrology.Radix.prototype.drawCircles = function(){
		var universe = this.universe;
		
		//outdoor circle
        universe.appendChild( this.paper.circle( this.cx, this.cy, this.radius, astrology.COLOR_CIRCLE));
       	
       	//inner circle
        universe.appendChild( this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, astrology.COLOR_CIRCLE) )
        
        //indoor circle
       	universe.appendChild( this.paper.circle( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, astrology.COLOR_CIRCLE));
       	
       	// rays
        var lineLength = 3;
        for( i = 0, start = 0, step = 5;i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, start );
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + lineLength, start );
       		universe.appendChild( this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y, astrology.COLOR_CIRCLE));
       		start += step;
       	}
	};
	
}( window.astrology = window.astrology || {}));
