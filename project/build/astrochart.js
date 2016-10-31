// ## CONSTANTS #############################
(function( astrology ) {
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
		 
	astrology.SYMBOL_SCALE = 1;
			 
	// http://www.rapidtables.com/web/color/html-color-codes.htm
	astrology.COLOR_ARIES = "#FF0000";
	astrology.COLOR_TAURUS = "#A0522D";
	astrology.COLOR_GEMINI= "#87CEEB"; // skyblue
	astrology.COLOR_CANCER = "#C0C0C0"; // silver
	astrology.COLOR_LEO = "#FFD700"; // gold
	astrology.COLOR_VIRGO = "#DAA520"; //goldenrod
	astrology.COLOR_LIBRA = "#0000CD"; // medium blue 
	astrology.COLOR_SCORPIO = "#000000"; // black 
	astrology.COLOR_SAGITTARIUS = "#FFA500"; // orange
	astrology.COLOR_CAPRICORN = "#D2B48C"; // tan
	astrology.COLOR_AQUARIUS = "#483D8B"; // darkslateblue
	astrology.COLOR_PISCES = "#708090"; // slategray
	
	astrology.COLOR_RED = "#FF0000";
	astrology.COLOR_GREEN = "#006400";
	astrology.COLOR_BLUE = "#87CEEB";
	astrology.COLOR_BROWN = "#8B4513";
	        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
	astrology.COLORS_ELEMENTS = [astrology.COLOR_RED, astrology.COLOR_BROWN, astrology.COLOR_BLUE, astrology.COLOR_GREEN, astrology.COLOR_RED, astrology.COLOR_BROWN, astrology.COLOR_BLUE, astrology.COLOR_GREEN, astrology.COLOR_RED, astrology.COLOR_BROWN, astrology.COLOR_BLUE, astrology.COLOR_GREEN];
		       	      
}( window.astrology = window.astrology || {}));
// ## SVG #####################
(function( astrology ) {
	
	var context;
		
	/**
	 * SVG tools.
	 * 
	 * @class
	 * @public
	 * @constructor
	 * @param {String} elementId - root DOM Element 
	 * @param {int} width
	 * @param {int} height
	 * @param {String} background 
	 */
	astrology.SVG = function( elementId, width, height, background ){		
		var svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg");
		svg.setAttribute('style', 'background-color:' + background + "; position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);			
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");				
		document.getElementById( elementId ).appendChild( svg );
				
		this.root = svg;
		this.width = width;
		this.height = height;
		
		context = this;
	};	
		
	/**
	 * Draw Universe
 	 * @param {int} cx
 	 * @param {int} cy
 	 * @param {int} radius
	 */
	astrology.SVG.prototype.universe = function( cx, cy, radius ){		
		var universe = document.createElementNS(this.root.namespaceURI, "g");
		universe.setAttribute('id', 'universe');
		
		var step = 30;
        for( var i = 0, start = 0, len = astrology.COLORS_ELEMENTS.length; i < len; i++ ){        	                	
        	universe.appendChild( segment( cx, cy, radius, start, start+step, radius/2, astrology.COLORS_ELEMENTS[i]));        	        	        	               		
			start += step;
        }
        
		this.root.appendChild( universe );	
		
		this.root.appendChild( this.venus(50, 50 ) );				
	};
		
	/**
	 * Draw Venus
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	astrology.SVG.prototype.venus = function( x, y ){						
		var venus = document.createElementNS( context.root.namespaceURI, "path");
		venus.setAttribute("d", "m" + x + ", " + y + " -4.567361,-0.02503 m 2.345644,2.645991 -0.0451,-5.710434 c -2.427173,-0.01994 -4.379549,-2.002187 -4.362795,-4.428067 0.01675,-2.425755 1.996164,-4.377297 4.423,-4.363997 2.426837,0.0133 4.384738,1.986422 4.374902,4.412214 -0.0098,2.425919 -1.983822,4.386653 -4.411069,4.379982");
		venus.setAttribute("stroke", "#000");		 
		venus.setAttribute("stroke-width", 1.2);
		venus.setAttribute("fill", "none");		
		venus.setAttribute("transform", "scale(" + astrology.SYMBOL_SCALE + ")"); // TODO						
		return venus;
	};
		
	/*
	 * Draw circular sector
	 * @private
	 * 
	 * @param {int} x - x center position
	 * @param {int} y - y center position
	 * @param {int} radius in px
	 * @param {int} a1 - angleFrom in degree
	 * @param {int} a2 - angleTo in degree
	 * @color {int} thickness - from outside to center in px  
	 * @color {String} color - HTML rgb
	 * 
	 * @return {SVGElement} segment
	 *  
	 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 */  
	function segment( x, y, radius, a1, a2, thickness, color){
									            	 	            	
	 	// @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 	var LARGE_ARC_FLAG = 0;
	 	var SWEET_FLAG = 0;
            	 	                
        a1 = ((astrology.SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180;
        a2 = ((astrology.SHIFT_IN_DEGREES - a2 ) % 360) * Math.PI / 180;
		
		var segment = document.createElementNS( context.root.namespaceURI, "path");
		segment.setAttribute("d", "M " + (x + ((radius - thickness) * Math.cos(a1))) + ", " + (y + ((radius - thickness) * Math.sin(a1))) + " l " + (thickness * Math.cos(a1)) + ", " + (thickness * Math.sin(a1)) + " A " + radius + ", " + radius + ",0 ," +  LARGE_ARC_FLAG + ", " + SWEET_FLAG + ", " + ( x + radius * Math.cos(a2) ) + ", " + ( y + radius * Math.sin(a2) ) + " l " + ( thickness  * -Math.cos(a2) ) + ", " + ( thickness * -Math.sin(a2) ) + " A " + (radius - thickness) + ", " + (radius - thickness) + ",0 ," +  LARGE_ARC_FLAG + ", " + 1 + ", " + ( x + (radius - thickness) * Math.cos(a1) ) + ", " + ( y + (radius - thickness) * Math.sin(a1) ) + " Z");						
		segment.setAttribute("fill", color);		 
		return segment;
	};
								    	 
}( window.astrology = window.astrology || {}));
// ## CHART ###################################
(function( astrology ) {
    
	/**
	 * Displays astrology charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {String} elementId - root DOMElement 
	 * @param {int} width
	 * @param {int} height
	 * @param {String} background
	 */
	astrology.Chart = function( elementId, width, height, background ){
		
		if (elementId && !document.getElementById( elementId )){
			var paper = document.createElement('div');
			paper.id = elementId;
			document.body.appendChild( paper );
		}
										
		this.paper = new astrology.SVG( elementId, width, height, background ); 
			
		return this;
	};
	
	/**
	 * Calculate position of the point on the circle.
	 * 
	 * @param {int} cx - center x 
	 * @param {int} cy - center y
	 * @param {int} radius
	 * @param {double} angle - degree			
	 * 
	 * @return {Object} - {x:10, y:20}
	 */	
	astrology.Chart.prototype.getPointPosition = function( cx, cy, radius, angle ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );					
		return {x:Math.round(xPos), y:Math.round(yPos)};
	};	
		
	/**
	 * Set source
	 * 	 
	 * @param {Object} data			
	 * @throws {InvalidDataException} 
	 */
	astrology.Chart.prototype.setData = function( data ){
		
		if( !_isDataValid( data ) ) {
			throw new Error( "Source Data is not valid." );
		}
		
		this.data = data;
	};
	
	/**
	 * Display radix horoscope	 
	 */
	astrology.Chart.prototype.radix = function(){
		this.paper.universe( this.paper.width/2, this.paper.height/2, this.paper.height/2.5);	
	};
	
	/*
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {boolean}
	 */
	function _isDataValid(){
		// TODO
		return true;	
	};
         
}( window.astrology = window.astrology || {}));

// ## UTILS #############################
(function( astrology ) {
	
	astrology.utils = {};
		
	astrology.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	astrology.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
				        	   
}( window.astrology = window.astrology || {}));