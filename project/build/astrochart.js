// ## CONSTANTS #############################
(function( astrology ) {
			 
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
        	universe.appendChild( segment( cx, cy, radius, start, start+step, astrology.COLORS_ELEMENTS[i]));        	        	        	               		
			start += step;
        }
        
		this.root.appendChild( universe );					
	};
	
	/*
	 * Draw circular sector
	 * @private
	 * 
	 * @param {int} x - x center position
	 * @param {int} y - y center position
	 * @param {int} radius
	 * @param {int} a1 - x end point
	 * @param {int} a2 - y end point
	 * @color {String} color - HTML rgb
	 * 
	 * @return {SVGElement} segment
	 *  
	 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 */  
	function segment( x, y, radius, a1, a2, color ){
		
		var SHIFT_IN_DEGREES = 180;
            	 	            	 	
	 	var LARGE_ARC_FLAG = 0;
	 	var SWEET_FLAG = 0;
            	 	                
        a1 = ((SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180;
        a2 = ((SHIFT_IN_DEGREES - a2 ) % 360) * Math.PI / 180;
		
		var segment = document.createElementNS( context.root.namespaceURI, "path");
		segment.setAttribute("d", "M " + x + ", " + y + " l " + (radius * Math.cos(a1)) + ", " + (radius * Math.sin(a1)) + " A " + radius + ", " + radius + ",0 ," +  LARGE_ARC_FLAG + ", " + SWEET_FLAG + ", " + ( x + radius * Math.cos(a2) ) + ", " + ( y + radius * Math.sin(a2) ) + " Z");
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
		var SHIFT_IN_DEGREES = 180;				
		var angleInRadius = (SHIFT_IN_DEGREES - angle) * Math.PI / 180;
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
	 * Set source
	 * 	 
	 * @param {Object} data			
	 * @throws {InvalidDataException} 
	 */
	astrology.Chart.prototype.radix = function(){
		this.paper.universe( this.paper.width/2, this.paper.height/2, this.paper.height/2.5); // TODO	
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