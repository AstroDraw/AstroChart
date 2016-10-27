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