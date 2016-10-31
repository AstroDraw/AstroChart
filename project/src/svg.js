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