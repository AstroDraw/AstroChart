// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;
		
	// BG color
	astrology.COLOR_BACKGROUND = "#fff";		 
	
	// Font size in chart
	astrology.FONT_SIZE = 12; //px
	
	// Font color in chart
	astrology.FONT_COLOR = "#333";
	
	// Font color of planet's symbols
	astrology.COLOR_POINTS = "#000";
	
	// Font color of signs symbols
	astrology.COLOR_SIGNS = "#333";
	
	// Chart margin
	astrology.MARGIN = 50; //px
		
	// Chart PAdding
	astrology.PADDING = 10; //px
	
	// Module wrapper element ID
	astrology.ID_CHART = "astrology";
	
	// Radix chart element ID
	astrology.ID_RADIX = "radix";
	
	// Transit chart element ID
	astrology.ID_TRANSIT = "transit";
	
	// Aspects wrapper element ID
	astrology.ID_ASPECTS = "aspects";
	
	// Aspects wrapper element ID
	astrology.ID_POINTS = "points"; 
		
	// Color of circles in charts
	astrology.COLOR_CIRCLE = "#666";
	
	// Color of circles in charts
	astrology.COLOR_LINE = "#333";
	
	// radius / INDOOR_CIRCLE_RADIUS_RATIO
	astrology.INDOOR_CIRCLE_RADIUS_RATIO = 3;
	
	// radius - radius/INNER_CIRCLE_RADIUS_RATIO
	astrology.INNER_CIRCLE_RADIUS_RATIO = 8;
	
	// Points
	astrology.SYMBOL_SUN = "Sun";
	astrology.SYMBOL_MOON = "Moon";
	astrology.SYMBOL_MERCURY = "Mercury";
	astrology.SYMBOL_VENUS = "Venus";
	astrology.SYMBOL_MARS = "Mars";
	astrology.SYMBOL_JUPITER = "Jupiter";
	astrology.SYMBOL_SATURN = "Saturn";
	astrology.SYMBOL_URANUS = "Uranus";
	astrology.SYMBOL_NEPTUNE = "Neptune";
	astrology.SYMBOL_PLUTO = "Pluto";
	astrology.SYMBOL_CHIRON = "Chiron";
	astrology.SYMBOL_LILITH = "Lilith";
	astrology.SYMBOL_NNODE = "NNode";
	
	//Signs
	astrology.SYMBOL_ARIES = "Aries";
	astrology.SYMBOL_TAURUS = "Taurus";
	astrology.SYMBOL_GEMINI= "Gemini";
	astrology.SYMBOL_CANCER = "Cancer"; 
	astrology.SYMBOL_LEO = "Leo"; 
	astrology.SYMBOL_VIRGO = "Virgo"; 
	astrology.SYMBOL_LIBRA = "Libra";  
	astrology.SYMBOL_SCORPIO = "Scorpio";  
	astrology.SYMBOL_SAGITTARIUS = "Sagittarius";
	astrology.SYMBOL_CAPRICORN = "Capricorn"; 
	astrology.SYMBOL_AQUARIUS = "Aquarius"; 
	astrology.SYMBOL_PISCES = "Pisces";
	astrology.SYMBOL_SIGNS = [astrology.SYMBOL_ARIES, astrology.SYMBOL_TAURUS, astrology.SYMBOL_GEMINI, astrology.SYMBOL_CANCER, astrology.SYMBOL_LEO, astrology.SYMBOL_VIRGO, astrology.SYMBOL_LIBRA, astrology.SYMBOL_SCORPIO, astrology.SYMBOL_SAGITTARIUS, astrology.SYMBOL_CAPRICORN, astrology.SYMBOL_AQUARIUS, astrology.SYMBOL_PISCES];
			 
	// http://www.rapidtables.com/web/color/html-color-codes.htm
	astrology.COLOR_ARIES = "#FF4500";
	astrology.COLOR_TAURUS = "#8B4513";
	astrology.COLOR_GEMINI= "#87CEEB";
	astrology.COLOR_CANCER = "#0000A0"; 
	astrology.COLOR_LEO = "#FF4500"; 
	astrology.COLOR_VIRGO = "#8B4513"; 
	astrology.COLOR_LIBRA = "#87CEEB";  
	astrology.COLOR_SCORPIO = "#0000A0";  
	astrology.COLOR_SAGITTARIUS = "#FF4500";
	astrology.COLOR_CAPRICORN = "#8B4513"; 
	astrology.COLOR_AQUARIUS = "#87CEEB"; 
	astrology.COLOR_PISCES = "#0000A0"; 	        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
	
	// No fill, only stroke
	astrology.STROKE_ONLY = false;
		       	      
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
	 */
	astrology.SVG = function( elementId, width, height){		
		var svg = document.createElementNS( "http://www.w3.org/2000/svg", "svg");
		svg.setAttribute('style', "position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);			
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");				
		document.getElementById( elementId ).appendChild( svg );
		
		var wrapper = document.createElementNS(svg.namespaceURI, "g");
		wrapper.setAttribute('id', astrology.ID_CHART);
		svg.appendChild( wrapper );
						
		this.root = wrapper;
		this.width = width;
		this.height = height;
		
		context = this;
	};	
	
	/**
	 * Get a required symbol. 
	 * 
	 * @param {String} name
	 * @param {int} x
	 * @param {int} y
	 * 
	 * @return {SVG g}
	 */
	astrology.SVG.prototype.getSymbol = function( name, x, y){		
		
		switch(name) {
			case astrology.SYMBOL_SUN:		        
		        return sun( x, y);		        
		        break;
		    case astrology.SYMBOL_MOON:		        
		        return moon( x, y);		        
		        break;
		   case astrology.SYMBOL_MERCURY:		        
		        return mercury( x, y);		        
		        break;     
		    case astrology.SYMBOL_VENUS:		        
		        return venus( x, y);		        
		        break;	
		    case astrology.SYMBOL_MARS:		        
		        return mars( x, y);		        
		        break;
		    case astrology.SYMBOL_JUPITER:		        
		        return jupiter( x, y);		        
		        break;
		    case astrology.SYMBOL_SATURN:		        
		        return saturn( x, y);		        
		        break; 
		    case astrology.SYMBOL_URANUS:		        
		        return uranus( x, y);		        
		        break;
		    case astrology.SYMBOL_NEPTUNE:		        
		        return neptune( x, y);		        
		        break;
		    case astrology.SYMBOL_PLUTO:		        
		        return pluto( x, y);		        
		        break;
		    case astrology.SYMBOL_CHIRON:		        
		        return chiron( x, y);		        
		        break;
		    case astrology.SYMBOL_LILITH:		        
		        return lilith( x, y);		        
		        break;
		    case astrology.SYMBOL_NNODE:		        
		        return nnode( x, y);		        
		        break;
		    case astrology.SYMBOL_ARIES:		        
		        return aries( x, y);		        
		        break; 
		    case astrology.SYMBOL_TAURUS:		        
		        return taurus( x, y);		        
		        break;
		    case astrology.SYMBOL_GEMINI:		        
		        return gemini( x, y);		        
		        break;
		    case astrology.SYMBOL_CANCER:		        
		        return cancer( x, y);		        
		        break;
		    case astrology.SYMBOL_LEO:		        
		        return leo( x, y);		        
		        break;
		    case astrology.SYMBOL_VIRGO:		        
		        return virgo( x, y);		        
		        break;
		    case astrology.SYMBOL_LIBRA:		        
		        return libra( x, y);		        
		        break;
		    case astrology.SYMBOL_SCORPIO:		        
		        return scorpio( x, y);		        
		        break;
		    case astrology.SYMBOL_SAGITTARIUS:		        
		        return sagittarius( x, y);		        
		        break;
		    case astrology.SYMBOL_CAPRICORN:		        
		        return capricorn( x, y);		        
		        break;
		    case astrology.SYMBOL_AQUARIUS:		        
		        return aquarius( x, y);		        
		        break; 
		    case astrology.SYMBOL_PISCES:		        
		        return pisces( x, y);		        
		        break;                                                                                	  
		    default:
		    	var unknownPoint = this.circle(x, y, 8);
		    	unknownPoint.setAttribute("stroke", "#ffff00");		 
				unknownPoint.setAttribute("stroke-width", 1);
		    	unknownPoint.setAttribute("fill", "#ff0000");		    							    			    			    			    		
		    	return unknownPoint;	 
		}			
	};
	
	/*
	 * Sun path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVG g}
	 */
	function sun( x, y ){
		
		// center symbol
		var xShift = 0; //px						
		var yShift = 0; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			
			var circle = context.circle(x, y, 8);
			circle.setAttribute("stroke", astrology.COLOR_POINTS);		 
			circle.setAttribute("stroke-width", 1.8);
			circle.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);															
			wrapper.appendChild(circle);
			
			var centerPoint = context.circle(x,y,2);
			centerPoint.setAttribute("fill", astrology.COLOR_POINTS); // this is not fill, this is point			
			wrapper.appendChild(centerPoint);
											
		return wrapper;
	};
	
	/*
	 * Mooon path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function moon( x, y ){
		
		// center symbol
		var xShift = -5; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z");				
			node.setAttribute("stroke", astrology.COLOR_POINTS);		 
			node.setAttribute("stroke-width", 1.8);
			node.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mercury path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mercury( x, y ){
		
		// center symbol
		var xShift = -3; //px						
		var yShift = 8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " 4.68215,0 m -2.34107,-3.2775 0,5.61858 m 5.16906,-10.76902 a 5.1690906,5.1690906 0 0 1 -5.16909,5.16909 5.1690906,5.1690906 0 0 1 -5.16909,-5.16909 5.1690906,5.1690906 0 0 1 5.16909,-5.16909 5.1690906,5.1690906 0 0 1 5.16909,5.16909 z");				
			body.setAttribute("stroke", astrology.COLOR_POINTS);		 
			body.setAttribute("stroke-width", 1.8);
			body.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);			
			wrapper.appendChild( body );
			
			var crownXShift = 7; //px						
			var crownYShift = -18; //px
			var crown = document.createElementNS( context.root.namespaceURI, "path");
			crown.setAttribute("d", "m" + (x + crownXShift) + ", " + (y + crownYShift) + " a 4.3652701,4.3652701 0 0 1 -4.34727,3.94626 4.3652701,4.3652701 0 0 1 -4.34337,-3.95056");				
			crown.setAttribute("stroke", astrology.COLOR_POINTS);		 
			crown.setAttribute("stroke-width", 1.8);
			crown.setAttribute("fill", "none");			
			wrapper.appendChild( crown );
											
		return wrapper;
	};
		
	/*
	 * Venus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function venus( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = 6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -6.14143,0 m 3.070715,3.232332 0,-7.369717 a 5.9151669,5.9151669 0 1 1 0.03232,0");				
			node.setAttribute("stroke", astrology.COLOR_POINTS);		 
			node.setAttribute("stroke-width", 1.8);
			node.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Mars path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function mars( x, y ){
		
		// center symbol
		var xShift = 4; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 6.2455116,6.2455116 0 1 0 1.023855,1.023855 z m 0,0 0.511928,0.511927 5.631199,-5.631199 m -4.607345,0 4.607345,0 0,4.607345");				
			node.setAttribute("stroke", astrology.COLOR_POINTS);		 
			node.setAttribute("stroke-width", 1.8);
			node.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);			
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Jupiter path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function jupiter( x, y ){
		
		// center symbol
		var xShift = -7; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.45803,0 -1.37413,-0.42746 -1.37413,-2.1373 0,-1.70984 1.83218,-3.41968 3.66435,-3.41968 1.83218,0 3.66434,1.28239 3.66434,4.2746 0,2.99223 -2.29021,7.69429 -6.87063,7.69429 m 12.82519,0 -13.28325,0 m 10.535,-12.39635 0,16.67094");				
			node.setAttribute("stroke", astrology.COLOR_POINTS);		 
			node.setAttribute("stroke-width", 1.8);
			node.setAttribute("fill", "none");													
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Saturn path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function saturn( x, y ){
		
		// center symbol
		var xShift = 5; //px						
		var yShift = 10; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.54546,0.54545 -1.09092,1.09091 -1.63637,1.09091 -0.54545,0 -1.63637,-0.54546 -1.63637,-1.63637 0,-1.0909 0.54547,-2.18181 1.63637,-3.27273 1.09091,-1.0909 2.18182,-3.27272 2.18182,-5.45454 0,-2.18182 -1.09091,-4.36363 -3.27272,-4.36363 -2.06357,0 -3.8182,1.09091 -4.9091,3.27273 m -2.66883,-6.13638 6.54546,0 m -3.87663,-2.5909 0,15.81818");				
			node.setAttribute("stroke", astrology.COLOR_POINTS);		 
			node.setAttribute("stroke-width", 1.8);
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Uranus path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function uranus( x, y ){
		
		// center symbol
		var xShift = 1; //px						
		var yShift = 8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 1.6666672,1.6666672 0 0 1 -1.66667,1.66666 1.6666672,1.6666672 0 0 1 -1.66666,-1.66666 1.6666672,1.6666672 0 0 1 1.66666,-1.66667 1.6666672,1.6666672 0 0 1 1.66667,1.66667 z m -1.66664,-12.91669 0,10.83334 m -5,-5.83334 10,0");				
			body.setAttribute("stroke", astrology.COLOR_POINTS);		 
			body.setAttribute("stroke-width", 1.8);
			body.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);									
			wrapper.appendChild(body);
			
			var hornsXShift = 3; //px						
			var hornsYShift = -3; //px
			var horns = document.createElementNS( context.root.namespaceURI, "path");
			horns.setAttribute("d", "m" + (x + hornsXShift) + ", " + (y + hornsYShift) + " 2.91667,0 0,-0.41666 -1.66667,-0.41667 0,-8.33333 1.66667,-0.41667 0,-0.41667 -2.91667,0 0,10 z m -9.16666,0 -2.91667,0 0,-0.41666 1.66667,-0.41667 0,-8.33333 -1.66667,-0.41667 0,-0.41667 2.91667,0 0,10 z");				
			horns.setAttribute("stroke", astrology.COLOR_POINTS);
			horns.setAttribute("stroke-width", 0.5);	 			
			horns.setAttribute("fill", astrology.COLOR_POINTS);  									
			wrapper.appendChild( horns );
													
		return wrapper;
	};
	
	/*
	 * Neptune path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function neptune( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 1.77059,-2.36312 2.31872,1.8045 m -14.44264,-0.20006 2.34113,-1.77418 1.74085,2.38595 m -1.80013,-1.77265 c -1.23776,8.40975 0.82518,9.67121 4.95106,9.67121 4.12589,0 6.18883,-1.26146 4.95107,-9.67121 m -7.05334,3.17005 2.03997,-2.12559 2.08565,2.07903 m -5.32406,9.91162 6.60142,0 m -3.30071,-12.19414 0,15.55803");				
			node.setAttribute("stroke", astrology.COLOR_POINTS);		 
			node.setAttribute("stroke-width", 1.8);
			node.setAttribute("fill", "none");														
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Pluto path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pluto( x, y ){
		
		// center symbol
		var xShift = 6; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 5.7676856,5.7676856 0 0 1 -2.88385,4.99496 5.7676856,5.7676856 0 0 1 -5.76768,0 5.7676856,5.7676856 0 0 1 -2.88385,-4.99496 m 5.76771,13.93858 0,-8.17088 m -3.84512,4.32576 7.69024,0");				
			body.setAttribute("stroke", astrology.COLOR_POINTS);		 
			body.setAttribute("stroke-width", 1.8);
			body.setAttribute("fill", "none");														
			wrapper.appendChild(body);
			
			var headXShift = -2.3; //px						
			var headYShift = 0; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + " a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448 z");				
			head.setAttribute("stroke", astrology.COLOR_POINTS);		 
			head.setAttribute("stroke-width", 1.8);
			head.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);														
			wrapper.appendChild(head);
														
		return wrapper;
	};
	
	/*
	 * Chiron path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function chiron( x, y ){
		
		// center symbol
		var xShift = 3; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z");
			body.setAttribute("stroke", astrology.COLOR_POINTS);		 
			body.setAttribute("stroke-width", 1.8);
			body.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);												
			wrapper.appendChild( body );
			
			var headXShift = 0; //px						
			var headYShift = -15; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + " -2.705883,2.542813 2.641777,2.728316 m -3.475817,-6.535241 0,12.809725");
			head.setAttribute("stroke", astrology.COLOR_POINTS);		 
			head.setAttribute("stroke-width", 1.8);
			head.setAttribute("fill", "none");												
			wrapper.appendChild( head );
			
											
		return wrapper;
	};
	
	/*
	 * Lilith path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function lilith( x, y ){
		
		// center symbol
		var xShift = 0; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c 0.986378,-0.51078 2.099953,-0.77358 3.209928,-0.75758 0.518389,-0.007 1.037977,0.0635 1.535967,0.206 -0.788383,0.18159 -1.550366,0.48918 -2.233152,0.92438 -1.280371,0.81596 -2.257549,2.09633 -2.707539,3.5463 -0.294393,0.95277 -0.369991,1.96514 -0.278393,2.95592 0.068,0.73238 0.242793,1.45755 0.535188,2.13353 0.41719,0.95838 1.057576,1.82316 1.868358,2.48435 0.698785,0.57398 1.523567,0.98236 2.388748,1.23675 0.117997,0.038 0.239593,0.0625 0.357191,0.102 -0.307193,0.0756 -0.615986,0.1476 -0.931979,0.1756 -0.86598,0.0776 -1.747561,-0.02 -2.577543,-0.2788 -0.0024,0.5788 -0.0012,1.15798 -4e-4,1.73676 1.032776,-0.002 2.065154,-8e-4 3.097531,-8e-4 -0.0024,0.50359 0.0064,1.00798 -0.0044,1.51117 -1.031576,-0.004 -2.063552,-0.004 -3.09513,-4e-4 0.0028,1.08877 4e-4,2.17713 0.0012,3.26591 -0.509989,-0.001 -1.020377,0.003 -1.530367,-0.002 0.0044,-1.08838 0.0016,-2.17634 0.0012,-3.26512 -1.033975,0 -2.067953,-0.003 -3.10193,0.001 -0.0056,-0.50358 -8e-4,-1.00717 -0.0024,-1.51036 1.033578,4e-4 2.067155,-0.003 3.100731,0.002 0.0096,-0.81198 0.0036,-1.62436 0.0028,-2.43633 -0.799981,-0.47639 -1.516766,-1.09317 -2.098753,-1.82035 -0.45439,-0.57119 -0.836781,-1.20398 -1.089576,-1.88995 -0.266394,-0.71718 -0.397592,-1.48316 -0.387992,-2.24795 -0.0052,-0.67838 0.1008,-1.35836 0.313194,-2.00273 0.298793,-0.91438 0.827981,-1.74357 1.487168,-2.44035 0.620784,-0.65198 1.338769,-1.21675 2.140351,-1.62915 z");				
			node.setAttribute("fill", astrology.COLOR_POINTS);												
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * NNode path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function nnode( x, y ){
		
		// center symbol
		var xShift = -1; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -1.826415,0.465024 -3.435492,1.806878 -4.045588,3.614335 -0.39011,0.856318 -0.407146,1.827321 -0.129938,2.717635 0.248447,1.119565 0.852296,2.107234 1.563348,2.992816 0.897343,1.403764 0.953488,3.73206 -0.293751,4.647319 -0.912949,0.682418 -1.832712,-0.09382 -1.961825,-0.807695 -0.312057,-1.075335 0.554192,-2.573324 1.763446,-2.573255 0.377043,0.102147 0.785371,0.145635 0.234363,-0.217504 -0.755897,-0.516807 -1.850218,-0.430933 -2.597363,0.06748 -0.708711,0.479071 -0.992132,1.39518 -0.782396,2.20922 0.148081,0.970565 0.878933,1.777137 1.811288,2.064648 0.917823,0.352763 2.032787,0.302554 2.822798,-0.280135 1.168428,-0.635845 1.585083,-2.166691 1.406102,-3.448196 -0.222763,-0.958172 -0.470359,-1.796769 -1.053718,-2.845528 -0.978824,-1.475022 -1.672651,-3.615299 -0.812138,-5.193859 0.506284,-1.056755 1.782453,-1.983365 3.13027,-1.999065 1.188331,-0.138582 2.258126,0.567203 2.942007,1.414096 0.600435,0.7484 0.94009,1.895563 0.86811,2.891397 -0.04462,1.458586 -0.8931,2.91319 -1.618379,4.020215 -0.399208,0.782228 -0.466421,1.405389 -0.496097,2.291748 0.09534,1.189878 0.264818,2.325905 1.339875,2.898316 1.385752,0.804749 3.472447,0.415334 4.19722,-1.096997 0.528875,-1.066281 0.246551,-2.623874 -0.932988,-3.117235 -0.821765,-0.455696 -1.946939,-0.271946 -2.565651,0.44044 0.751662,0.01902 1.751957,-0.06792 2.08102,0.800141 0.455924,0.899815 0.431377,2.309836 -0.604459,2.795201 -0.862066,0.364441 -1.761559,-0.428937 -1.931935,-1.256854 -0.239806,-1.13735 -0.209547,-2.39535 0.36747,-3.43243 0.454259,-0.823827 1.17939,-1.478368 1.505829,-2.379422 0.727343,-1.634226 0.39696,-3.590747 -0.661196,-5.003367 -0.990728,-1.446017 -2.712061,-2.318122 -4.461721,-2.275197 -0.362198,-0.0039 -0.724433,0.01874 -1.084003,0.06172 z");				
			node.setAttribute("fill", astrology.COLOR_POINTS);															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Aries symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aries( x, y ){
		
		// center symbol
		var xShift = 0; //px						
		var yShift = 10; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 0,-1.5125 c -10e-6,-1.19166 -0.25834,-3.31666 -0.775,-6.375 -0.23334,-1.44166 -0.61668,-2.94166 -1.15,-4.5 -0.54167,-1.58332 -1.10834,-2.82498 -1.7,-3.725 -0.45834,-0.68332 -1.00417,-1.02498 -1.6375,-1.025 -0.71667,2e-5 -1.21667,0.27502 -1.5,0.825 -0.25834,0.50835 -0.3875,1.06252 -0.3875,1.6625 0,1.26668 0.45416,2.41251 1.3625,3.4375 l -2.125,0 c -0.73334,-1.12499 -1.1,-2.31248 -1.1,-3.5625 0,-1.30832 0.35,-2.33332 1.05,-3.075 0.725,-0.76665 1.60416,-1.14998 2.6375,-1.15 1.33333,2e-5 2.37499,0.55002 3.125,1.65 0.84999,1.24168 1.55832,2.75002 2.125,4.525 0.39999,1.29168 0.73749,2.72084 1.0125,4.2875 0.27499,-1.56666 0.61249,-2.99582 1.0125,-4.2875 0.53332,-1.73332 1.24165,-3.24165 2.125,-4.525 0.74998,-1.09998 1.79165,-1.64998 3.125,-1.65 1.03332,2e-5 1.91248,0.38335 2.6375,1.15 0.69998,0.74168 1.04998,1.76668 1.05,3.075 -2e-5,1.25002 -0.36669,2.43751 -1.1,3.5625 l -2.125,0 c 0.90832,-1.02499 1.36248,-2.17082 1.3625,-3.4375 -2e-5,-0.59998 -0.12918,-1.15415 -0.3875,-1.6625 -0.28335,-0.54998 -0.78335,-0.82498 -1.5,-0.825 -0.63335,2e-5 -1.17918,0.34168 -1.6375,1.025 -0.59168,0.90002 -1.15835,2.14168 -1.7,3.725 -0.53335,1.55834 -0.91668,3.05834 -1.15,4.5 -0.51668,3.05834 -0.77501,5.18334 -0.775,6.375 l 0,1.5125 -1.875,0");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Taurus symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function taurus( x, y ){
		
		// center symbol
		var xShift = -6; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c -0.225,-0.53332 -0.54584,-1.00832 -0.9625,-1.425 -0.38334,-0.38332 -0.85417,-0.69998 -1.4125,-0.95 -0.48334,-0.21665 -1.0375,-0.32498 -1.6625,-0.325 l 0,-1.875 c 0.85833,2e-5 1.65,0.15419 2.375,0.4625 0.75833,0.32502 1.43333,0.77918 2.025,1.3625 0.6,0.59168 1.05833,1.27085 1.375,2.0375 0.22499,0.53335 0.54583,1.00835 0.9625,1.425 0.38332,0.38335 0.85416,0.70001 1.4125,0.95 0.48332,0.21668 1.03749,0.32501 1.6625,0.325 0.59999,1e-5 1.15416,-0.10832 1.6625,-0.325 0.53332,-0.22499 1.00415,-0.54165 1.4125,-0.95 0.41665,-0.41665 0.73748,-0.89165 0.9625,-1.425 0.31665,-0.76665 0.77498,-1.44582 1.375,-2.0375 0.59165,-0.58332 1.26665,-1.03748 2.025,-1.3625 0.72498,-0.30831 1.51665,-0.46248 2.375,-0.4625 l 0,1.875 c -0.62502,2e-5 -1.17919,0.10835 -1.6625,0.325 -0.55835,0.25002 -1.02918,0.56668 -1.4125,0.95 -0.41668,0.41668 -0.73752,0.89168 -0.9625,1.425 -0.31668,0.75835 -0.77502,1.43751 -1.375,2.0375 -0.29168,0.29168 -0.67085,0.58751 -1.1375,0.8875 0.46665,0.30001 0.84582,0.59584 1.1375,0.8875 0.59998,0.60001 1.05832,1.27918 1.375,2.0375 0.30832,0.75001 0.46248,1.55418 0.4625,2.4125 -2e-5,0.83334 -0.15418,1.625 -0.4625,2.375 -0.32502,0.76667 -0.78335,1.44584 -1.375,2.0375 -0.59168,0.58334 -1.26668,1.0375 -2.025,1.3625 -0.72501,0.30834 -1.51668,0.4625 -2.375,0.4625 -0.90001,0 -1.69168,-0.15416 -2.375,-0.4625 -0.79168,-0.35833 -1.46667,-0.8125 -2.025,-1.3625 -0.59167,-0.59166 -1.05,-1.27083 -1.375,-2.0375 -0.30834,-0.75 -0.4625,-1.54166 -0.4625,-2.375 0,-0.85832 0.15416,-1.66249 0.4625,-2.4125 0.33333,-0.80832 0.79166,-1.48749 1.375,-2.0375 0.35833,-0.34166 0.74166,-0.63749 1.15,-0.8875 -0.41667,-0.24999 -0.80001,-0.54582 -1.15,-0.8875 -0.58334,-0.56665 -1.04167,-1.24582 -1.375,-2.0375 m 7.4375,4.1875 c -0.50834,-0.21666 -1.06251,-0.32499 -1.6625,-0.325 -0.60001,1e-5 -1.15418,0.10834 -1.6625,0.325 -0.51668,0.23334 -0.98751,0.55001 -1.4125,0.95 -0.43334,0.45001 -0.75417,0.92501 -0.9625,1.425 -0.21667,0.52501 -0.32501,1.09168 -0.325,1.7 -10e-6,0.58334 0.10833,1.1375 0.325,1.6625 0.20833,0.5 0.52916,0.975 0.9625,1.425 0.42499,0.4 0.89582,0.71667 1.4125,0.95 0.50832,0.21667 1.06249,0.325 1.6625,0.325 0.59999,0 1.15416,-0.10833 1.6625,-0.325 0.51665,-0.23333 0.98749,-0.55 1.4125,-0.95 0.43332,-0.45 0.75415,-0.925 0.9625,-1.425 0.21665,-0.525 0.32498,-1.07916 0.325,-1.6625 -2e-5,-0.60832 -0.10835,-1.17499 -0.325,-1.7 -0.20835,-0.49999 -0.52918,-0.97499 -0.9625,-1.425 -0.42501,-0.39999 -0.89585,-0.71666 -1.4125,-0.95");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Gemini symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function gemini( x, y ){
		
		// center symbol
		var xShift = 6; //px						
		var yShift = 6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c 1.39165,0.19167 2.74998,0.45417 4.075,0.7875 l 0,1.8625 c -2.95002,-0.74166 -6.05835,-1.1125 -9.325,-1.1125 -3.26668,0 -6.375,0.37084 -9.325,1.1125 l 0,-1.8625 c 1.325,-0.33333 2.68333,-0.59583 4.075,-0.7875 l 0,-14.0625 c -1.39167,-0.19165 -2.75,-0.45415 -4.075,-0.7875 l 0,-1.8625 c 2.95,0.74169 6.05832,1.11252 9.325,1.1125 3.26665,2e-5 6.37498,-0.37081 9.325,-1.1125 l 0,1.8625 c -1.32502,0.33335 -2.68335,0.59585 -4.075,0.7875 l 0,14.0625 m -1.875,-13.8625 c -1.10835,0.0917 -2.23334,0.13752 -3.375,0.1375 -1.14168,2e-5 -2.26668,-0.0458 -3.375,-0.1375 l 0,13.6625 c 1.10832,-0.0917 2.23332,-0.1375 3.375,-0.1375 1.14166,0 2.26665,0.0458 3.375,0.1375 l 0,-13.6625");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Cancer symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function cancer( x, y ){
		
		// center symbol
		var xShift = -10; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c 3.49847,2.2999 7.9798,2.88699 12.0125,1.875 -1.66059,-1.11538 -1.75368,-3.62251 -0.64078,-5.15594 1.02276,-1.5711 3.36301,-2.20765 4.93157,-1.06938 1.79935,1.13495 2.35373,3.88166 0.97343,5.55063 -1.0646,1.41816 -2.87209,1.85597 -4.47085,2.38208 -4.23375,1.20478 -8.92842,0.70459 -12.80589,-1.38237 2e-5,-0.73334 -2e-5,-1.46668 2e-5,-2.20002 z m 13.6375,0.6875 c 0.99031,0.54306 2.50885,-0.3259 2.29279,-1.50819 -0.009,-0.99656 -0.72701,-2.31733 -1.85448,-2.22078 -1.55258,0.28532 -2.2148,2.74003 -0.7843,3.59611 0.1081,0.0607 0.22483,0.10629 0.34599,0.13286 z m 4.45,-6.675 c -3.49848,-2.29988 -7.97979,-2.88695 -12.0125,-1.875 1.74977,1.18032 1.76473,3.88512 0.4452,5.39485 -1.14287,1.57804 -3.67636,1.91326 -5.11186,0.54332 -1.59192,-1.30013 -1.85262,-3.93774 -0.44849,-5.47109 1.1411,-1.32328 2.93429,-1.69873 4.51924,-2.22807 4.14582,-1.13582 8.72841,-0.64238 12.50869,1.4169 0.21373,0.72318 0.0573,1.48044 0.0997,2.21909 z m -13.6375,-0.6875 c -0.9898,-0.54425 -2.50874,0.32459 -2.29292,1.50675 0.008,0.99596 0.72396,2.32003 1.85137,2.22382 1.55218,-0.28697 2.2152,-2.7386 0.78924,-3.5994 -0.10857,-0.0605 -0.22595,-0.10563 -0.34769,-0.13117 z");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Leo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function leo( x, y ){
		
		// center symbol
		var xShift = 4; //px						
		var yShift = 6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c -0.32704,0.89209 0.011,2.07505 1.00625,2.34219 0.85086,0.21231 1.79248,-0.0204 2.41875,-0.64219 0.44167,0.44167 0.88333,0.88333 1.325,1.325 -0.96066,0.90247 -2.29049,1.42737 -3.61495,1.23686 -1.7588,-0.11803 -3.2224,-1.77189 -3.11005,-3.53686 -0.0248,-1.42517 0.76409,-2.68358 1.37299,-3.92036 0.69572,-1.21765 1.66115,-2.27529 2.18451,-3.5933 0.68243,-1.40252 0.83192,-3.17025 0.0534,-4.56329 -0.89468,-1.57566 -2.98023,-2.29944 -4.64843,-1.57305 -1.63349,0.66365 -2.62109,2.52575 -2.24375,4.25001 0.46112,1.7866 1.97845,3.19859 2.00298,5.12284 0.1703,2.19069 -1.93116,4.19774 -4.11392,3.89746 -2.05884,-0.1566 -3.68615,-2.25665 -3.31914,-4.29238 0.23234,-1.85784 2.03872,-3.35278 3.91133,-3.20293 -0.86301,-2.09166 -0.43054,-4.70107 1.225,-6.2875 1.83562,-1.91819 5.08938,-2.20194 7.21269,-0.59745 1.57088,1.07132 2.44547,2.97402 2.36231,4.85995 0.0765,1.89183 -0.89773,3.59052 -1.8447,5.15361 -0.86143,1.25999 -1.76373,2.53136 -2.1803,4.02139 z m -6.275,-5.1375 c -1.23886,-0.57286 -2.77969,0.58729 -2.57891,1.93516 0.0742,1.34966 1.80907,2.18943 2.90078,1.37422 1.25502,-0.77671 1.05013,-2.77821 -0.32187,-3.30938 z");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Virgo symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function virgo( x, y ){
		
		// center symbol
		var xShift = 6; //px						
		var yShift = 6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c 2.18337,-2.12037 2.88923,-5.47424 2.1273,-8.36821 -0.60994,-1.39255 -1.54502,0.27324 -1.73159,1.04932 -0.60497,1.76247 -0.33825,3.64246 -0.39571,5.46869 0,0.61673 0,1.23347 0,1.8502 z m -1.26097,2.90026 c -1.0685,0.59073 -2.24841,0.99941 -3.4677,1.11386 0,-0.52891 0,-1.05782 0,-1.58673 1.12987,-0.1497 2.21599,-0.57334 3.17347,-1.18742 -0.0767,-3.93611 0.0521,-7.87544 -0.0695,-11.80985 -0.16794,-0.87136 -0.0946,-2.2628 -1.0612,-2.60524 -0.89754,0.44142 -1.17629,1.58057 -1.60144,2.42399 -0.66912,1.89576 -0.38196,3.925 -0.44126,5.89347 0,1.86791 0,3.73583 0,5.60374 -0.52541,0 -1.05082,0 -1.57623,0 -0.029,-3.71837 0.0615,-7.43995 -0.0521,-11.15625 -0.13824,-0.87746 -0.0408,-2.71278 -1.19603,-2.70923 -0.81355,0.56191 -1.08599,1.63875 -1.51113,2.49319 -0.61211,1.91613 -0.3353,3.9475 -0.3931,5.92523 0,1.81568 0,3.63137 0,5.44706 -0.5254,0 -1.05081,0 -1.57622,0 -0.0305,-3.66269 0.0646,-7.32869 -0.0546,-10.98925 -0.13449,-1.62075 -0.55158,-3.29776 -1.62662,-4.56282 0.53943,0 1.07884,0 1.61826,0 0.72151,0.57509 1.0742,1.99948 1.33081,2.45534 0.40854,-1.12329 1.13307,-2.17325 2.17562,-2.79028 1.25779,-0.28411 1.89945,1.1864 2.29501,2.12843 0.0386,0.42388 0.34691,0.97196 0.43728,0.21062 0.54383,-1.02909 1.36887,-2.46378 2.69579,-2.37019 0.95154,0.37873 1.43502,1.42761 1.77572,2.33371 0.30213,1.00743 0.27583,2.06918 0.35485,3.10781 0.44614,-0.80139 1.28985,-2.07332 2.34968,-1.56292 0.85245,0.62406 1.05955,1.7581 1.35204,2.71275 0.83691,3.31549 0.0334,7.08275 -2.40827,9.544 -0.6096,0.6002 -1.5425,1.07563 -0.82173,2.00039 0.18052,0.67274 1.0211,1.48789 1.15782,1.85958 -0.64476,0 -1.28951,0 -1.93427,0 -0.38131,-0.60165 -0.72129,-1.23758 -0.92478,-1.92299 z");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Libra symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function libra( x, y ){
		
		// center symbol
		var xShift = 0; //px						
		var yShift = 2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c -2.3791,0 -4.7583,0 -7.1375,0 0,-0.625 0,-1.25 0,-1.875 1.4333,0 2.8667,0 4.3,0 -1.7672,-2.14662 -1.5685,-5.5656 0.4094,-7.51152 2.0181,-2.18368 5.6309,-2.60558 8.0906,-0.93221 1.9873,1.21173 3.127,3.66116 2.674,5.95888 -0.059,0.88801 -0.8073,1.93084 -1.0232,2.48485 1.3998,0 2.7995,0 4.1992,0 0,0.625 0,1.25 0,1.875 -2.3833,0 -4.7667,0 -7.15,0 0,-0.625 0,-1.25 0,-1.875 1.5522,-0.77524 2.4993,-2.60555 2.1062,-4.31561 -0.4463,-2.16745 -2.7982,-3.58998 -4.9369,-3.22969 -2.116,0.24112 -3.9706,2.2508 -3.6865,4.43437 0.1215,1.32077 1.0054,2.48975 2.1547,3.11093 0,0.625 0,1.25 0,1.875 z m -7.1375,5.625 c 0,-0.625 0,-1.25 0,-1.875 6.2167,0 12.4333,0 18.65,0 0,0.625 0,1.25 0,1.875 -6.2167,0 -12.4333,0 -18.65,0 z");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	/*
	 * Scorpio symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function scorpio( x, y ){
		
		// center symbol
		var xShift = 6; //px						
		var yShift = 10; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c -1.74459,0.17759 -3.34372,-1.58247 -3.04571,-3.30015 -0.0612,-3.76985 0.13674,-7.54934 -0.12804,-11.31241 0.0595,-0.78287 -0.4097,-2.51589 -1.44301,-1.68035 -0.75346,0.66937 -0.87692,1.73412 -1.28643,2.60645 -0.47699,2.35531 -0.16874,4.76756 -0.25076,7.15038 0,1.19448 0,2.38896 0,3.58343 -0.51801,0 -1.03602,0 -1.55403,0 -0.0624,-3.88458 0.13853,-7.77866 -0.12793,-11.65662 0.0622,-0.78409 -0.40407,-2.52016 -1.44084,-1.68574 -0.75524,0.66913 -0.8785,1.73547 -1.28851,2.60855 -0.47699,2.35531 -0.16875,4.76756 -0.25077,7.15038 0,1.19448 0,2.38896 0,3.58343 -0.51801,0 -1.03602,0 -1.55403,0 -0.0642,-3.85133 0.14319,-7.71161 -0.13348,-11.55649 -0.18768,-1.3544 -0.62588,-2.72057 -1.52414,-3.77657 0.53183,0 1.06365,0 1.59547,0 0.82696,0.37078 0.70101,2.01964 1.43365,2.11419 0.44117,-1.00471 1.11055,-1.99473 2.1379,-2.46567 1.18633,-0.1013 1.81498,1.18699 2.11146,2.14358 0.4097,1.18768 0.66328,-0.52924 1.07762,-0.85784 0.4455,-0.66874 1.16893,-1.38641 2.035,-1.26507 1.25282,0.49572 1.72161,1.94145 1.93963,3.15831 0.34676,2.40986 0.0892,4.8499 0.17491,7.27309 0.0107,1.91556 -0.0409,3.83566 0.043,5.74829 0.26469,1.06694 2.44817,1.37451 2.04195,-0.11522 0.46544,-0.29106 0.80167,0.53092 1.18821,0.77285 0.34872,0.33406 0.69745,0.66813 1.04619,1.00219 -0.73903,0.7114 -1.47805,1.4228 -2.21708,2.1342 0,-0.45239 0,-0.90479 0,-1.35719 -0.1934,0 -0.38679,0 -0.5802,0 z");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Sagittarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function sagittarius( x, y ){
		
		// center symbol
		var xShift = 5; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -6.75,6.75 3.3875,3.3875 -1.325,1.325 -3.3875,-3.3875 -4.425,4.425 -1.325,-1.325 4.425,-4.425 -3.3875,-3.3875 1.325,-1.325 3.3875,3.3875 6.7625,-6.7625 -5.1375,0 0,-1.875 8.325,0 0,8.325 -1.875,0 0,-5.1125");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);	
											
		return wrapper;
	};
	
	/*
	 * Capricorn symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function capricorn( x, y ){
		
		// center symbol
		var xShift = 0; //px						
		var yShift = 6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");		
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c -1.30322,-1.84066 -1.53456,-4.16908 -1.44542,-6.35956 -0.0166,-1.47834 -0.0602,-3.02921 -0.76392,-4.36797 -1.09794,-0.87671 -1.64432,1.10216 -2.11052,1.81481 -0.83211,1.64462 -0.92923,3.51484 -0.86764,5.32167 0,0.55118 0,1.10236 0,1.65355 -0.625,0 -1.25,0 -1.875,0 -0.0649,-2.40824 0.18478,-4.85224 -0.28194,-7.23139 -0.20203,-1.01066 -1.02389,-2.01529 -2.1444,-1.89426 -0.721,0.20395 -0.89348,-0.14332 -0.78616,-0.76911 0,-0.53508 0,-1.07017 0,-1.60526 1.23265,-0.0635 2.68956,0.007 3.49623,1.08937 0.64197,0.55633 0.98726,2.01186 1.22494,2.33007 0.51805,-1.39175 1.43454,-2.77061 2.83559,-3.37963 1.17336,-0.19763 1.83388,1.07072 2.34536,1.91556 0.90391,1.91955 0.72531,4.1082 0.7781,6.17316 0.0222,0.96732 0.12018,1.94932 0.46978,2.85897 0.73194,-1.99036 2.97445,-3.23646 5.05048,-2.79726 2.12144,0.37688 3.68917,2.61011 3.22499,4.7333 -0.32148,1.85972 -2.0303,3.36769 -3.9384,3.3361 -1.3529,0.0607 -2.73258,-0.36585 -3.78707,-1.22214 -0.69709,2.25039 -2.72881,4.08446 -5.11223,4.28502 -0.46233,-0.0533 -1.53331,0.38436 -1.33777,-0.39987 0,-0.47838 0,-0.95676 0,-1.43515 1.47626,0.15236 3.05553,-0.39739 3.89421,-1.66676 0.5121,-0.72242 0.8177,-1.56232 1.13079,-2.38322 z m 2.125,-0.4875 c 0.96936,1.23213 2.88115,1.93018 4.29654,1.05844 1.14719,-0.77558 1.28238,-2.65138 0.15334,-3.50875 -1.13109,-0.9534 -3.01281,-0.44744 -3.62939,0.86598 -0.33531,0.49297 -0.60866,1.02728 -0.82049,1.58433 z");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Aquarius symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function aquarius( x, y ){
		
		// center symbol
		var xShift = -4; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.45,-2.5 -4.325,2.5 -0.9375,-1.6125 5.9625,-3.4375 1.4375,2.5 4.3375,-2.5 1.4375,2.5 4.3375,-2.5 2.375,4.1125 -1.625,0.9375 -1.45,-2.5 -4.325,2.5 -1.45,-2.5 -4.325,2.5 m 0,8 -1.45,-2.5 -4.325,2.5 -0.9375,-1.6125 5.9625,-3.4375 1.4375,2.5 4.3375,-2.5 1.4375,2.5 4.3375,-2.5 2.375,4.1125 -1.625,0.9375 -1.45,-2.5 -4.325,2.5 -1.45,-2.5 -4.325,2.5");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/*
	 * Pisces symbol path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function pisces( x, y ){
		
		// center symbol
		var xShift = 2; //px						
		var yShift = 0; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -3.925,0 c -0.10001,1.65001 -0.44584,3.18751 -1.0375,4.6125 -0.54167,1.30834 -1.32501,2.56667 -2.35,3.775 l -2.5875,0 c 1.525,-1.48333 2.59166,-2.98333 3.2,-4.5 0.49999,-1.23332 0.79583,-2.52916 0.8875,-3.8875 l -3.7125,0 0,-1.875 3.7125,0 c -0.0917,-1.35832 -0.38751,-2.65415 -0.8875,-3.8875 -0.61667,-1.51665 -1.68334,-3.02081 -3.2,-4.5125 l 2.5875,0 c 1.01666,1.20836 1.79999,2.47085 2.35,3.7875 0.59999,1.42502 0.94582,2.96252 1.0375,4.6125 l 3.925,0 c 0.0917,-1.64998 0.43749,-3.18748 1.0375,-4.6125 0.54998,-1.31665 1.33332,-2.57914 2.35,-3.7875 l 2.5875,0 c -1.51668,1.49169 -2.58335,2.99585 -3.2,4.5125 -0.50002,1.23335 -0.79585,2.52918 -0.8875,3.8875 l 3.5875,0 0,1.875 -3.5875,0 c 0.0916,1.35834 0.38748,2.65418 0.8875,3.8875 0.60832,1.51667 1.67498,3.01667 3.2,4.5 l -2.5875,0 c -1.02502,-1.20833 -1.80835,-2.46666 -2.35,-3.775 -0.59168,-1.44999 -0.93751,-2.98749 -1.0375,-4.6125");				
			node.setAttribute("fill", astrology.COLOR_SIGNS);											
			wrapper.appendChild(node);
													
		return wrapper;
	};
			
	/**
	 * Draw circular sector
	 * 
	 * 
	 * @param {int} x - circle x center position
	 * @param {int} y - circle y center position
	 * @param {int} radius - circle radius in px
	 * @param {int} a1 - angleFrom in degree
	 * @param {int} a2 - angleTo in degree
	 * @param {int} thickness - from outside to center in px  	
	 * 
	 * @return {SVGElement} segment
	 *  
	 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 */  
	astrology.SVG.prototype.segment = function segment( x, y, radius, a1, a2, thickness){
									            	 	            	
	 	// @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 	var LARGE_ARC_FLAG = 0;
	 	var SWEET_FLAG = 0;
            	 	                
        a1 = ((astrology.SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180;
        a2 = ((astrology.SHIFT_IN_DEGREES - a2 ) % 360) * Math.PI / 180;
		
		var segment = document.createElementNS( context.root.namespaceURI, "path");
		segment.setAttribute("d", "M " + (x + thickness * Math.cos(a1)) + ", " + (y + thickness * Math.sin(a1)) + " l " + ((radius-thickness) * Math.cos(a1)) + ", " + ((radius-thickness) * Math.sin(a1)) + " A " + radius + ", " + radius + ",0 ," +  LARGE_ARC_FLAG + ", " + SWEET_FLAG + ", " + ( x + radius * Math.cos(a2) ) + ", " + ( y + radius * Math.sin(a2) ) + " l " + ( (radius-thickness)  * -Math.cos(a2) ) + ", " + ( (radius-thickness) * -Math.sin(a2) ) + " A " + thickness + ", " + thickness + ",0 ," +  LARGE_ARC_FLAG + ", " + 1 + ", " + ( x + thickness * Math.cos(a1) ) + ", " + ( y + thickness * Math.sin(a1)));
		segment.setAttribute("fill", "none");						
		return segment;
	};
	
	/**
	 * Draw line in circle
	 * 
	 * @param {int} x1
	 * @param {int} y2
	 * @param {int} x2
	 * @param {int} y2 
	 * @param {String} color - HTML rgb	 
	 * 
	 * @return {SVGElement} line
	 */  
	astrology.SVG.prototype.line = function line( x1, y1, x2, y2, color){									            	 	            	
		var line = document.createElementNS( context.root.namespaceURI, "line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);	
  	    line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);											
		return line;
	};
	
	/**
	 * Draw a circle
	 * 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius	
	 * 
	 * @return {SVGElement} circle
	 */  
	astrology.SVG.prototype.circle = function circle( cx, cy, radius){						            	 	            		
		var circle = document.createElementNS( context.root.namespaceURI, "circle");
		circle.setAttribute("cx", cx);	
  	    circle.setAttribute("cy", cy);
		circle.setAttribute("r", radius);
		circle.setAttribute("fill", "none");							
		return circle;
	};
	
	/**
	 * Draw a text
	 * 
	 * @param {String} text
	 * @param {int} x
	 * @param {int} y
	 * @param {String} size - etc. "13px"
	 * @param {String} color - HTML rgb
	 * 
	 * @return {SVGElement} text
	 */  
	astrology.SVG.prototype.text = function text( txt, x, y, size, color){						            	 	            		
		var text = document.createElementNS( context.root.namespaceURI, "text");
		text.setAttribute("x", x);	
  	    text.setAttribute("y", y);
		text.setAttribute("font-size", size);
		text.setAttribute("fill", color);
		text.setAttribute("font-family", "serif");
		text.setAttribute("dominant-baseline", "central");
		text.appendChild( document.createTextNode( txt ));
		text.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");	
		return text;
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
	 * @param {Object} settings
	 */
	astrology.Chart = function( elementId, width, height, settings ){
		
		if(settings){
			Object.assign(astrology, settings);
		}
		
		if (elementId && !document.getElementById( elementId )){
			var paper = document.createElement('div');					
			paper.setAttribute('id', elementId);			
			document.body.appendChild( paper );
		}
										
		this.paper = new astrology.SVG( elementId, width, height); 
		this.cx = this.paper.width/2;
		this.cy = this.paper.height/2;
		this.radius = this.paper.height/2 - astrology.MARGIN;
			
		return this;
	};
	
	/**
	 * Display radix horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":0, "Sun":30,  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],
	 *		"aspects":[[20,110,"#ff0"], [200,245,"#f0f"]] 
	 *	} 
	 * 
	 * @return {astrology.Radix} radix
	 */
	astrology.Chart.prototype.radix = function( data ){
						
		// Create division for aspects.					
		var wrapperForAspects = document.createElementNS(this.paper.root.namespaceURI, "g");
		wrapperForAspects.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_ASPECTS);
		this.paper.root.appendChild( wrapperForAspects ); 
		
		var radix = new astrology.Radix(this.paper, this.cx, this.cy, this.radius, data);
		radix.drawBg();		
		radix.drawRuler();
		radix.drawCusps();		
		radix.drawUniverse();						
		radix.drawSigns();
		radix.drawPoints();			
		radix.drawCircles(); 						
		return radix;
	 };
	 	
	 /**
	 * Scale chart
	 * 
	 * @param {int} factor 
	 */
	astrology.Chart.prototype.scale = function( factor ){			
		this.paper.root.setAttribute("transform", "translate(" + ( -this.cx * (factor - 1)) + "," + (-this.cy * (factor - 1)) + ") scale(" + factor + ")");		
	};
	 		  
}( window.astrology = window.astrology || {}));

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
		
		this.shift = 0;		
		if(this.data.cusps && this.data.cusps[0]){
			var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
			this.shift = deg360 - this.data.cusps[0];	
		}	
				
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_RADIX);
		this.paper.root.appendChild( this.universe );
		
		context = this;
			
		return this;
	};
	
	/**
	 * Draw background
	 */
	astrology.Radix.prototype.drawBg = function(){				
		var universe = this.universe;		
										
		// Background consists of two segments.
		// TODO - one segment		
		var northernHemisphere = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, 0, astrology.utils.radiansToDegree( Math.PI ), this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
		northernHemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		universe.appendChild( northernHemisphere );
		
		var southHemisphere = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, astrology.utils.radiansToDegree( Math.PI ), 0, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
		southHemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		universe.appendChild( southHemisphere );				
	};
		
	/**
	 * Draw universe.
	 */
	astrology.Radix.prototype.drawUniverse = function(){
		var universe = this.universe;
		
		// colors 
        for( var i = 0, step = 30, start = this.shift, len = astrology.COLORS_SIGNS.length; i < len; i++ ){ 
        	        	        	       	        	                	        	        	     
        	var segment = this.paper.segment( this.cx, this.cy, this.radius, start, start+step, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);        	        	
        	segment.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLORS_SIGNS[i]);        	        	        	
        	segment.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.COLOR_CIRCLE: "none");		 				 				 		
 			segment.setAttribute("stroke-width", astrology.STROKE_ONLY ? 1 : 0); 				
        	universe.appendChild( segment );
        	
        	
        	        	        	        	               		
			start += step;
        };
	};
	
	/**
	 * Draw points
	 */
	astrology.Radix.prototype.drawPoints = function(){
		if(this.data.points == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS);
		
		// Planets can not be displayed on the same radius.
		// The gap between indoor circle and outdoor circle / count of planets
		var padding = 2 * astrology.PADDING * astrology.SYMBOL_SCALE;
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
		var radiusStep = (gap - padding) / Object.keys(this.data.points).length;	
		var planetRadius = (this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO) + padding;
									
		for (var planet in this.data.points) {
 		   if (this.data.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius, this.data.points[planet] + this.shift);
        		var symbol = this.paper.getSymbol(planet, position.x, position.y);
        		symbol.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS + "-" + planet);
        		symbol.setAttribute('data-radius', planetRadius);
        		wrapper.appendChild( symbol );
        		planetRadius += radiusStep;
    		}
		}		
	};
	
	/**
	 * Draw cusps
	 */
	astrology.Radix.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;
		
		var AS = 0;
		var IC = 3;
		var DC = 6;
		var MC = 9;
		var numbersRadius = this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO + astrology.PADDING;
		var overlap = 15 * astrology.SYMBOL_SCALE; // px
		var axisRadius = this.radius + overlap;
				
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
 			
 			// Lines
 			var topPosition, line;
 			var bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, this.data.cusps[i] + this.shift);   			 			
 			if( i == AS || i == IC || i == DC || i == MC ){ 			
 				topPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius, this.data.cusps[i] + this.shift);
 				line = this.paper.line( bottomPosition.x, bottomPosition.y, topPosition.x, topPosition.y); 				 			
 				line.setAttribute("stroke", astrology.COLOR_LINE);		 				 				 		
 				line.setAttribute("stroke-width", 2);
 			}else{
 				topPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, this.data.cusps[i] + this.shift);
 				line = this.paper.line( bottomPosition.x, bottomPosition.y, topPosition.x, topPosition.y);
 				line.setAttribute("stroke", astrology.COLOR_LINE);		 				 				 		
 				line.setAttribute("stroke-width", 1);
 			} 			 			 			 			 		
 		 	universe.appendChild( line ); 
 		 	 		 	
 		 	// Cup number 
 		 	var xShift = 6; //px
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	universe.appendChild( this.paper.text( i+1, textPosition.x - xShift, textPosition.y, astrology.FONT_SIZE + "px", astrology.FONT_COLOR ));
 		 	  		 			 
 		 	// As
 		 	if(i == 0){ 
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + 1.5*overlap, this.data.cusps[i] + this.shift);
 		 		universe.appendChild( this.paper.text( "As", textPosition.x, textPosition.y, astrology.FONT_SIZE * 1.5 + "px", astrology.FONT_COLOR ));
 		 	}
 		 	 		 	 		 	 		
 		 	// Dc
 		 	if(i == 6){  		 		 		 		 		 		 		 
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius, this.data.cusps[i] + this.shift);
 		 		universe.appendChild( this.paper.text( "Dc", textPosition.x, textPosition.y, astrology.FONT_SIZE * 1.5 + "px", astrology.FONT_COLOR ));
 		 	}
 		 	 		 	
 		 	// Ic
 		 	if(i == 3){ 
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + 0.7*overlap, this.data.cusps[i] - 2 + this.shift);
 		 		universe.appendChild( this.paper.text( "Ic", textPosition.x, textPosition.y, astrology.FONT_SIZE * 1.5 + "px", astrology.FONT_COLOR ));
 		 	}
 		 	
 		 	// Mc
 		 	if(i == 9){ 		 		 		 	
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + overlap, this.data.cusps[i] + 2 + this.shift);
 		 		universe.appendChild( this.paper.text( "Mc", textPosition.x, textPosition.y, astrology.FONT_SIZE * 1.5 + "px", astrology.FONT_COLOR ));
 		 	} 		 
		}
	};
	
	/**
	 * Draw aspects
	 */
	astrology.Radix.prototype.aspects = function( data ){
		
		// TODO
		// validate data
								
		var wrapper = astrology.utils.getEmptyWrapper( this.universe, astrology.ID_CHART + "-" + astrology.ID_ASPECTS );
					
        for( var i = 0, len = data.length; i < len; i++ ){ 
        	var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, data[i][0] + this.shift);
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, data[i][1] + this.shift);
        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);        	
        	line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.FONT_COLOR : data[i][2]);		 				 				 		
 			line.setAttribute("stroke-width", 1);        	
        	wrapper.appendChild( line );
        }
        
        // this
        return context;
	};
	
	/**
	 * Draw signs symbols
	 * .
	 */
	astrology.Radix.prototype.drawSigns = function(){
		var universe = this.universe;
		
		// signs
        for( var i = 0, step = 30, start = 15 + this.shift, len = astrology.SYMBOL_SIGNS.length; i < len; i++ ){ 
        	var position = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2, start);       	        	                	
        	universe.appendChild( this.paper.getSymbol( astrology.SYMBOL_SIGNS[i], position.x, position.y));        	        	        	               		
			start += step;
        }
	};
	
	/**
	 * Draw circles
	 */
	astrology.Radix.prototype.drawCircles = function drawCircles(){
		var universe = this.universe;
						
		var circle;
		
		//outdoor circle
		circle = this.paper.circle( this.cx, this.cy, this.radius);
		circle.setAttribute("stroke", astrology.COLOR_CIRCLE);		 
		circle.setAttribute("stroke-width", 1);
        universe.appendChild( circle );
       	
       	//inner circle
       	circle = this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
       	circle.setAttribute("stroke", astrology.COLOR_CIRCLE);		 
		circle.setAttribute("stroke-width", 1);
        universe.appendChild( circle );
        
        //indoor circle
        circle = this.paper.circle( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
        circle.setAttribute("stroke", astrology.COLOR_CIRCLE);		 
		circle.setAttribute("stroke-width", 1);		
       	universe.appendChild( circle );       	       
	};
	
	/**
	 * Draw ruler
	 */
	astrology.Radix.prototype.drawRuler = function drawRuler(){
		var universe = this.universe;
				
		// rays
        var lineLength = 3;
        for( i = 0, start = 0, step = 5;i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + lineLength) , start + this.shift );
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start + this.shift);
       		var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);       		       		       
       		line.setAttribute("stroke", astrology.COLOR_CIRCLE);		 				 				 		
 			line.setAttribute("stroke-width", 1);       		
       		universe.appendChild( line );
       		start += step;
       	}       		
	};
		
	/**
	 * Display transit horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":0, "Sun":30,  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],
	 *		"aspects":[[20,110,"#ff0"], [200,245,"#f0f"]] 
	 *	} 
	 * 
	 * @return {astrology.Transit} transit
	 */
	astrology.Radix.prototype.transit = function( data ){
		var transit = new astrology.Transit(context, data);
		transit.drawRuler();						
		transit.drawPoints();		
		context.drawCircles();		
		return transit; 
	};
		
}( window.astrology = window.astrology || {}));

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
		if(this.data.points == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS );
				
		// Planets can not be displayed on the same radius.				
		var gap = astrology.MARGIN;
		var radiusStep = ( gap / 2 ) / Object.keys(this.data.points).length;	
		var planetRadius = this.radius + astrology.PADDING;
									
		for (var planet in this.data.points) {
 			if (this.data.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius, this.data.points[planet] + this.shift); 		   		 		   	
 		   		var symbol = this.paper.getSymbol(planet, position.x, position.y);
        		symbol.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS + "-" + planet);
        		symbol.setAttribute('data-radius', planetRadius); 		   		 		   	
        		wrapper.appendChild( symbol );
        		planetRadius += radiusStep;
    		}
		}							
	};
	
	/**
	 * Draw aspects
	 */
	astrology.Transit.prototype.aspects = function( data ){
		
		// TODO
		// validate data
												
		var wrapper = astrology.utils.getEmptyWrapper( this.universe, astrology.ID_CHART + "-" + astrology.ID_ASPECTS );
		
        for( var i = 0, len = data.length; i < len; i++ ){ 
        	var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, data[i][0] + this.shift);
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, data[i][1] + this.shift);        	
        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);        		        
        	line.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.FONT_COLOR : data[i][2]);		 				 				 		
 			line.setAttribute("stroke-width", 1);        	
        	wrapper.appendChild( line );        	        
        }
        
        // this
        return context;				
	};
	
	/**
	 * Draw ruler
	 */
	astrology.Transit.prototype.drawRuler = function drawRuler(){
		 var universe = this.universe;
		
		// rays
        var lineLength = 3;
        for( i = 0, start = 0, step = 5;i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, start  + this.shift);
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + lineLength, start + this.shift);
        	var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);        	
        	line.setAttribute("stroke", astrology.COLOR_CIRCLE );		 				 				 		
 			line.setAttribute("stroke-width", 1);        	        
       		universe.appendChild( line );
       		start += step;
       	}		
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

// ## UTILS #############################
(function( astrology ) {
	
	astrology.utils = {};
	
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
	astrology.utils.getPointPosition = function( cx, cy, radius, angle ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );					
		return {x:Math.round(xPos), y:Math.round(yPos)};
	};
	
	astrology.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	astrology.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
	
	/**
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {Object} status
	 */
	astrology.utils.validate = function( data ){
		var status = {hasError:false, messages:[]};
		
		if( data == null ){			
			status.messages.push( "Data is not set." );
			status.hasError = true;
			return status;
		}
		
		if(data.points == null){					
			status.messages.push( "There is not property 'points'." );
			status.hasError = true;
		}
		
		if(data.cusps != null && !Array.isArray(data.cusps)){
			status.messages.push( "Property 'cusps' has to be Array." );
			status.hasError = true;
		}
		
		if(data.cusps != null && data.cusps.length != 12){			
			status.messages.push( "Count of 'cusps' values has to be 12." );
			status.hasError = true;
		}
		
		if(data.aspects != null && !Array.isArray(data.aspects)){
			status.messages.push( "Property 'aspects' has to be Array." );
			status.hasError = true;		 	
		}
						
		return status;		
	};
	
	/**
	 * Get empty DOMElement with ID
	 * 
	 * @param{String} elementID
	 * @param{DOMElement} parent
	 * @return {DOMElement}
	 */
	astrology.utils.getEmptyWrapper = function( parent, elementID ){
		
		var wrapper = document.getElementById( elementID );		
		if(wrapper){
			astrology.utils.removeChilds( wrapper );
		}else{					
			wrapper = document.createElementNS( document.getElementById(astrology.ID_CHART).namespaceURI, "g");
			wrapper.setAttribute('id', elementID);
			parent.appendChild( wrapper );			
		} 
		
		return wrapper;
	};
	
	/**
	* Remove childs
	* 
	* @param{DOMElement} parent
	*/
	astrology.utils.removeChilds = function(parent){
		if( parent == null ){
			return;
		}
		
		var last;
    	while (last = parent.lastChild){
    		parent.removeChild(last);
    	}
	};
						        	 
}( window.astrology = window.astrology || {}));