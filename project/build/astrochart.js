// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;
		
	// BG color
	astrology.COLOR_BACKGROUND = "#fff";		 
				
	// Color of planet's symbols
	astrology.POINTS_COLOR = "#000";
	
	// Points strength of lines
	astrology.POINTS_STROKE = 1.8;
		
	// Font color of signs symbols
	astrology.SIGNS_COLOR = "#000"; 
	
	// Signs strength of lines
	astrology.SIGNS_STROKE = 1.5;
	
	// Chart margin
	astrology.MARGIN = 50; //px
		
	// Chart Padding  
	astrology.PADDING = 15; //px
	
	// Module wrapper element ID
	astrology.ID_CHART = "astrology";
	
	// Radix chart element ID
	astrology.ID_RADIX = "radix";
	
	// Transit chart element ID
	astrology.ID_TRANSIT = "transit";
	
	// Aspects wrapper element ID
	astrology.ID_ASPECTS = "aspects";
	
	// Aspects wrapper element ID
	astrology.ID_POINTS = "planets"; 
	
	// Signs wrapper element ID
	astrology.ID_SIGNS = "signs"; 
	
	// Circles wrapper element ID
	astrology.ID_CIRCLES = "circles";
		
	// Color of circles in charts
	astrology.CIRCLE_COLOR = "#333";
	
	// Circles strength of lines
	astrology.CIRCLE_STRONG = 2;
	
	// Color of circles in charts
	astrology.LINE_COLOR = "#333";
	
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
	
	// Axis
	astrology.SYMBOL_AS = "As";
	astrology.SYMBOL_DS = "Ds";
	astrology.SYMBOL_MC = "Mc";
	astrology.SYMBOL_IC = "Ic";
		
	astrology.SYMBOL_AXIS_FONT_COLOR = "#333";
	astrology.SYMBOL_AXIS_STROKE = 1.6;
		
	// Cusps
	astrology.SYMBOL_CUSP_1 = "1";
	astrology.SYMBOL_CUSP_2 = "2";
	astrology.SYMBOL_CUSP_3 = "3";
	astrology.SYMBOL_CUSP_4 = "4";
	astrology.SYMBOL_CUSP_5 = "5";
	astrology.SYMBOL_CUSP_6 = "6";
	astrology.SYMBOL_CUSP_7 = "7";
	astrology.SYMBOL_CUSP_8 = "8";
	astrology.SYMBOL_CUSP_9 = "9";
	astrology.SYMBOL_CUSP_10 = "10";
	astrology.SYMBOL_CUSP_11 = "11";
	astrology.SYMBOL_CUSP_12 = "12";
	
	// Cusps strength of lines
	astrology.CUSPS_STROKE = 1;
	astrology.CUSPS_FONT_COLOR = "#000";	
	
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
	
	// Planets collision circle radius
	astrology.COLLISION_RADIUS = 10; //px
		       	      
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
		    case astrology.SYMBOL_AS:		        
		        return ascendant( x, y );		        
		        break;		    
		    case astrology.SYMBOL_DS:		        
		        return descendant( x, y );		        
		        break;
		    case astrology.SYMBOL_MC:		        
		        return mediumCoeli( x, y );		        
		        break;
		    case astrology.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;	
		    case astrology.SYMBOL_IC:		        
		        return immumCoeli( x, y );		        
		        break;		    
		    case astrology.SYMBOL_CUSP_1:		        
		        return number1( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_2:		        
		        return number2( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_3:		        
		        return number3( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_4:		        
		        return number4( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_5:		        
		        return number5( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_6:		        
		        return number6( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_7:		        
		        return number7( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_8:		        
		        return number8( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_9:		        
		        return number9( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_10:		        
		        return number10( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_11:		        
		        return number11( x, y );		        
		        break;
	        case astrology.SYMBOL_CUSP_12:		        
		        return number12( x, y );		        
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
		var xShift = -1; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
					
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
						
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.18182,0.727268 -2.181819,1.454543 -1.454552,2.18182 -0.727268,2.181819 0,2.181819 0.727268,2.181819 1.454552,2.18182 2.181819,1.454544 2.18182,0.727276 2.18181,0 2.18182,-0.727276 2.181819,-1.454544 1.454552,-2.18182 0.727268,-2.181819 0,-2.181819 -0.727268,-2.181819 -1.454552,-2.18182 -2.181819,-1.454543 -2.18182,-0.727268 -2.18181,0 m 0.727267,6.54545 -0.727267,0.727276 0,0.727275 0.727267,0.727268 0.727276,0 0.727267,-0.727268 0,-0.727275 -0.727267,-0.727276 -0.727276,0 m 0,0.727276 0,0.727275 0.727276,0 0,-0.727275 -0.727276,0");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);			
			wrapper.appendChild(node);
																	
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
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);			
			wrapper.appendChild( body );
			
			var crownXShift = 7; //px						
			var crownYShift = -18; //px
			var crown = document.createElementNS( context.root.namespaceURI, "path");
			crown.setAttribute("d", "m" + (x + crownXShift) + ", " + (y + crownYShift) + " a 4.3652701,4.3652701 0 0 1 -4.34727,3.94626 4.3652701,4.3652701 0 0 1 -4.34337,-3.95056");				
			crown.setAttribute("stroke", astrology.POINTS_COLOR);		 
			crown.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
		var xShift = -1; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.65116274,0.883721 -1.7674418,1.767442 -0.883721,2.6511627 0,0.883721 0.883721,2.6511627 1.7674418,1.76744184 2.65116274,0.88372098 0.88372096,0 2.6511627,-0.88372098 1.7674418,-1.76744184 0.883721,-2.6511627 0,-0.883721 -0.883721,-2.6511627 -1.7674418,-1.767442 -2.6511627,-0.883721 -0.88372096,0 m 0,11.48837222 0,7.06976728 m 0.88372096,-7.06976728 0,7.06976728 m -4.4186047,-3.5348836 7.9534884,0");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
		var xShift = -1; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.3999999,0.8 -1.6000001,1.6 -0.8,2.40000004 0,0.79999996 0.8,2.4 1.6000001,1.6 2.3999999,0.8 0.80000001,0 2.39999999,-0.8 1.6,-1.6 0.8,-2.4 0,-0.79999996 -0.8,-2.40000004 -1.6,-1.6 -2.39999999,-0.8 -0.80000001,0 m 10.4000001,-4.8 -4.8000001,0 3.2,0.7999998 -4.8,4.8000002 m 6.4000001,-5.6 0,4.8 -0.8,-3.2 -4.8000001,4.8 m 4.8000001,-5.6000002 -4.8000001,4.8000002");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
		var xShift = -6; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			
			var horns = document.createElementNS( context.root.namespaceURI, "path");
			horns.setAttribute("d", "m" + x + ", " + y + " 0,11.341 m 11.33888,-11.44003 0,11.341 m -11.37182,-5.13911 11.33282,0 m -5.60961,-6.10937 0,13.23697");				
			horns.setAttribute("stroke", astrology.POINTS_COLOR);		 
			horns.setAttribute("stroke-width", astrology.POINTS_STROKE);
			horns.setAttribute("fill", "none");												
			wrapper.appendChild(horns);
								
			var bodyXShift = 7.8; //px						
			var bodyYShift = 14.5; //px
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + (x + bodyXShift) + ", " + (y + bodyYShift) + " a 2.0364559,2.0364559 0 0 1 -2.03646,2.03644 2.0364559,2.0364559 0 0 1 -2.03644,-2.03644 2.0364559,2.0364559 0 0 1 2.03644,-2.03646 2.0364559,2.0364559 0 0 1 2.03646,2.03646 z");				
			body.setAttribute("stroke", astrology.POINTS_COLOR);
			body.setAttribute("stroke-width", astrology.POINTS_STROKE); 			
			body.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);	 									
			wrapper.appendChild( body );
			
													
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
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill", "none");														
			wrapper.appendChild(body);
			
			var headXShift = -2.3; //px						
			var headYShift = 0; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + " a 3.3644834,3.3644834 0 0 1 -3.36448,3.36449 3.3644834,3.3644834 0 0 1 -3.36448,-3.36449 3.3644834,3.3644834 0 0 1 3.36448,-3.36448 3.3644834,3.3644834 0 0 1 3.36448,3.36448 z");				
			head.setAttribute("stroke", astrology.POINTS_COLOR);		 
			head.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);												
			wrapper.appendChild( body );
			
			var headXShift = 0; //px						
			var headYShift = -15; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + " -2.705883,2.542813 2.641777,2.728316 m -3.475817,-6.535241 0,12.809725");
			head.setAttribute("stroke", astrology.POINTS_COLOR);		 
			head.setAttribute("stroke-width", astrology.POINTS_STROKE);
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
		var xShift = 3; //px						
		var yShift = 5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.822001,-1.26106 -1.63676,-2.00622 -0.90304,-2.46479 0.16932,-2.29283 1.01592,-1.71962 1.1288,-1.14641 1.01592,-0.63053 1.523881,-0.68785 m 2.58722,-0.43641 -1.917849,0.61141 -1.917848,1.22282 -1.278566,1.83422 -0.639284,1.83422 0,1.83422 0.639284,1.83423 1.278566,1.83421 1.917848,1.22282 1.917849,0.61141 m 0,-12.83956 -2.557131,0 -2.557132,0.61141 -1.91785,1.22282 -1.278566,1.83422 -0.639283,1.83422 0,1.83422 0.639283,1.83423 1.278566,1.83421 1.91785,1.22282 2.557132,0.61141 2.557131,0 m -4.879958,-0.531 0,7.19968 m -3.027242,-3.81156 6.275524,0");			
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");															
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
		var xShift = -4; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 -0.6666667,1.3333333 0,0.6666667 0.6666667,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666666,-1.3333333 0,-0.6666667 -0.6666666,-1.3333333 -2,-2.66666665 -0.6666667,-1.99999995 0,-1.3333334 0.6666667,-2 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,2 0,1.3333334 -0.6666667,1.99999995 -2,2.66666665 -0.6666666,1.3333333 0,0.6666667 0.6666666,1.3333333 1.3333334,0.6666667 0.6666666,0 1.3333334,-0.6666667 0.6666667,-1.3333333 0,-0.6666667 -0.6666667,-1.3333333 -1.3333334,-0.6666667 -0.6666666,0 -1.3333334,0.6666667 m -7.9999999,-6 0.6666667,-1.3333333 1.3333333,-1.3333333 2,-0.6666667 2.6666666,0 2,0.6666667 1.3333333,1.3333333 0.6666667,1.3333333");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");	
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
		var xShift = -9; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.9,-0.9 0,-1.8 0.9,-1.8 1.8,-0.8999998 1.8,0 1.8,0.8999998 0.9,0.9 0.9,1.8 0.9,4.5 m -9,-5.4 1.8,-1.8 1.8,0 1.8,0.9 0.9,0.9 0.9,1.8 0.9,3.6 0,9.9 m 8.1,-12.6 0.9,-0.9 0,-1.8 -0.9,-1.8 -1.8,-0.8999998 -1.8,0 -1.8,0.8999998 -0.9,0.9 -0.9,1.8 -0.9,4.5 m 9,-5.4 -1.8,-1.8 -1.8,0 -1.8,0.9 -0.9,0.9 -0.9,1.8 -0.9,3.6 0,9.9");																						
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");	
			
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
		var xShift = -9; //px						
		var yShift = -11; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 1,4 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-4 m -18,0 1,3 1,2 2,2 3,1 4,0 3,-1 2,-2 1,-2 1,-3 m -11,8 -2,1 -1,1 -1,2 0,3 1,2 2,2 2,1 2,0 2,-1 2,-2 1,-2 0,-3 -1,-2 -1,-1 -2,-1 m -4,1 -2,1 -1,2 0,3 1,3 m 8,0 1,-3 0,-3 -1,-2 -2,-1");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -6; //px						
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 0,11.546414 m 0.9622011,-10.5842129 0,9.6220117 m 7.6976097,-9.6220117 0,9.6220117 m 0.962201,-10.5842128 0,11.546414 m -13.4708165,-14.4330172 1.9244023,1.924402 1.9244024,0.9622012 2.8866038,0.9622011 3.848804,0 2.886604,-0.9622011 1.924402,-0.9622012 1.924403,-1.924402 m -17.3196215,17.3196207 1.9244023,-1.9244024 1.9244024,-0.9622011 2.8866038,-0.9622012 3.848804,0 2.886604,0.9622012 1.924402,0.9622011 1.924403,1.9244024");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = 9; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -15,0 -2,1 -1,2 0,2 1,2 2,1 2,0 2,-1 1,-2 0,-2 -1,-2 11,0 m -18,3 1,2 1,1 2,1 m 4,-4 -1,-2 -1,-1 -2,-1 m -4,15 15,0 2,-1 1,-2 0,-2 -1,-2 -2,-1 -2,0 -2,1 -1,2 0,2 1,2 -11,0 m 18,-3 -1,-2 -1,-1 -2,-1 m -4,4 1,2 1,1 2,1");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -3; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -2,-1 -1,0 -2,1 -1,2 0,1 1,2 2,1 1,0 2,-1 1,-2 0,-1 -1,-2 -5,-5 -1,-2 0,-3 1,-2 2,-1 3,-1 4,0 4,1 2,2 1,2 0,3 -1,3 -3,3 -1,2 0,2 1,2 2,0 1,-1 1,-2 m -13,-5 -2,-3 -1,-2 0,-3 1,-2 1,-1 m 7,-1 3,1 2,2 1,2 0,3 -1,3 -2,3");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -9; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 2.5894868,-2.5894868 1.7263245,2.5894868 0,9.4947847 m -2.5894868,-11.2211092 1.7263245,2.5894867 0,8.6316225 m 0.8631623,-9.4947847 2.5894867,-2.5894868 1.72632451,2.5894868 0,8.6316224 m -2.58948671,-10.3579469 1.72632447,2.5894867 0,7.7684602 m 0.86316224,-8.6316224 2.58948679,-2.5894868 1.7263244,2.5894868 0,13.8105959 m -2.5894867,-15.5369204 1.7263245,2.5894867 0,12.9474337 m 0.8631622,-13.8105959 2.5894868,-2.5894868 0.8631622,1.7263245 0.8631623,2.5894868 0,2.5894867 -0.8631623,2.58948673 -0.8631622,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -4.3158113,1.7263245 m 7.7684602,-15.5369204 0.8631623,0.8631622 0.8631622,2.5894868 0,2.5894867 -0.8631622,2.58948673 -0.8631623,1.72632447 -1.7263245,1.7263245 -2.5894867,1.7263245 -3.452649,1.7263245");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -4; //px						
		var yShift = 3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.7142857,-0.8571429 -0.8571429,0 -1.7142857,0.8571429 -0.8571429,1.7142857 0,0.8571429 0.8571429,1.7142857 1.7142857,0.8571428 0.8571429,0 1.7142857,-0.8571428 0.8571428,-1.7142857 0,-0.8571429 -0.8571428,-1.7142857 -2.5714286,-3.42857143 -0.8571429,-2.57142857 0,-1.7142857 0.8571429,-2.5714286 1.7142857,-1.7142857 2.5714283,-0.8571429 3.428572,0 2.571428,0.8571429 1.714286,1.7142857 0.857143,2.5714286 0,1.7142857 -0.857143,2.57142857 -2.571429,3.42857143 -0.857142,1.7142857 0,0.8571429 0.857142,1.7142857 1.714286,0.8571428 0.857143,0 1.714286,-0.8571428 0.857143,-1.7142857 0,-0.8571429 -0.857143,-1.7142857 -1.714286,-0.8571429 -0.857143,0 -1.714286,0.8571429 m -10.2857139,-7.7142857 0.8571429,-1.7142857 1.7142857,-1.7142857 2.5714283,-0.8571429 3.428572,0 2.571428,0.8571429 1.714286,1.7142857 0.857143,1.7142857");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -9; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 2.3781101,-2.3781101 2.3781101,2.3781101 0,9.5124404 m -3.1708135,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.7927034,-9.5124404 2.3781101,-2.3781101 2.37811007,2.3781101 0,9.5124404 m -3.17081347,-11.0978471 2.3781101,2.3781101 0,8.719737 m 0.79270337,-9.5124404 2.37811013,-2.3781101 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854068 m -4.7562202,-11.8905505 2.3781101,2.3781101 0,8.719737 1.5854067,1.5854067 2.3781101,-2.3781101");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);					
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");													
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
		var xShift = 7; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -17.11444,17.11444 m 17.11444,-17.11444 -3.2089575,1.0696525 -6.417915,0 m 7.4875675,1.0696525 -3.2089575,0 -4.27861,-1.0696525 m 9.6268725,-1.0696525 -1.0696525,3.2089575 0,6.41791504 m -1.0696525,-7.48756754 0,3.2089575 1.0696525,4.27861004 m -8.55722,0 -7.4875675,0 m 6.417915,1.06965246 -3.2089575,0 -3.2089575,-1.06965246 m 7.4875675,0 0,7.48756746 m -1.0696525,-6.417915 0,3.2089575 1.0696525,3.2089575");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -9; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");		
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 1.8047633,-3.6095267 4.5119084,9.0238168 m -4.5119084,-7.2190534 4.5119084,9.0238167 2.707145,-6.3166717 4.5119084,0 2.707145,-0.9023817 0.9023817,-1.8047633 0,-1.8047634 -0.9023817,-1.8047633 -1.8047634,-0.9023817 -0.9023816,0 -1.8047634,0.9023817 -0.9023817,1.8047633 0,1.8047634 0.9023817,2.707145 0.9023817,1.80476336 0.9023817,2.70714504 0,2.707145 -1.8047634,1.8047633 m 1.8047634,-16.2428701 -0.9023817,0.9023817 -0.9023817,1.8047633 0,1.8047634 1.8047634,3.6095267 0.9023816,2.707145 0,2.707145 -0.9023816,1.8047634 -1.8047634,0.9023816");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
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
		var xShift = -8; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 2.8866035,-2.8866035 3.8488047,1.9244023 m -4.8110059,-0.9622011 3.8488047,1.9244023 2.8866035,-2.8866035 2.8866035,1.9244023 m -3.84880467,-0.9622011 2.88660347,1.9244023 2.8866035,-2.8866035 1.9244024,1.9244023 m -2.8866035,-0.9622011 1.9244023,1.9244023 2.8866035,-2.8866035 m -17.319621,8.6598105 2.8866035,-2.88660348 3.8488047,1.92440238 m -4.8110059,-0.96220121 3.8488047,1.92440231 2.8866035,-2.88660348 2.8866035,1.92440238 m -3.84880467,-0.96220121 2.88660347,1.92440231 2.8866035,-2.88660348 1.9244024,1.92440238 m -2.8866035,-0.96220121 1.9244023,1.92440231 2.8866035,-2.88660348");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");													
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
		var xShift = -8; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " 4,2 2,2 1,3 0,3 -1,3 -2,2 -4,2 m 0,-17 3,1 2,1 2,2 1,3 m 0,3 -1,3 -2,2 -2,1 -3,1 m 16,-17 -3,1 -2,1 -2,2 -1,3 m 0,3 1,3 2,2 2,1 3,1 m 0,-17 -4,2 -2,2 -1,3 0,3 1,3 2,2 4,2 m -17,-9 18,0 m -18,1 18,0");				
			node.setAttribute("stroke", astrology.SIGNS_COLOR);		 
			node.setAttribute("stroke-width", astrology.SIGNS_STROKE);			
			node.setAttribute("fill", "none");												
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw As symbol
	 */
	function ascendant( x, y ){
		// center symbol
		var xShift = 12; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
		
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.563078,-1.1261527 -1.689228,-0.5630765 -1.689229,0 -1.68923,0.5630765 -0.563076,1.1261527 0.563076,1.12615272 1.126154,0.56307636 2.815381,0.56307635 1.126152,0.56307647 0.563078,1.1261526 0,0.5630763 -0.563078,1.1261528 -1.689228,0.5630764 -1.689229,0 -1.68923,-0.5630764 -0.563076,-1.1261528 m -6.756916,-10.135374 -4.504611,11.8246032 m 4.504611,-11.8246032 4.504611,11.8246032 m -7.3199925,-3.94153457 5.6307625,0");									
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.SYMBOL_AXIS_STROKE);			
			node.setAttribute("fill", "none");	
																			
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw Ds symbol
	 */
	function descendant(x,y){
		// center symbol
		var xShift = 22; //px						
		var yShift = -1; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -0.5625,-1.125 -1.6875,-0.5625 -1.6875,0 -1.6875,0.5625 -0.5625,1.125 0.5625,1.125 1.125,0.5625 2.8125,0.5625 1.125,0.5625 0.5625,1.125 0,0.5625 -0.5625,1.125 -1.6875,0.5625 -1.6875,0 -1.6875,-0.5625 -0.5625,-1.125 m -11.25,-10.125 0,11.8125 m 0,-11.8125 3.9375,0 1.6875,0.5625 1.125,1.125 0.5625,1.125 0.5625,1.6875 0,2.8125 -0.5625,1.6875 -0.5625,1.125 -1.125,1.125 -1.6875,0.5625 -3.9375,0");				
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.SYMBOL_AXIS_STROKE);			
			node.setAttribute("fill", "none");											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw MC symbol
	 */
	function mediumCoeli(x,y){
		// center symbol
		var xShift = 19; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.004085,-1.0040845 -1.004084,-0.5020423 -1.506127,0 -1.004085,0.5020423 -1.004084,1.0040845 -0.502043,1.50612689 0,1.00408458 0.502043,1.50612683 1.004084,1.0040846 1.004085,0.5020423 1.506127,0 1.004084,-0.5020423 1.004085,-1.0040846 m -17.57148,-9.0367612 0,10.5428881 m 0,-10.5428881 4.016338,10.5428881 m 4.016338,-10.5428881 -4.016338,10.5428881 m 4.016338,-10.5428881 0,10.5428881");				
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.SYMBOL_AXIS_STROKE);			
			node.setAttribute("fill", "none");											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	/**
	 * Draw IC symbol
	 */
	function immumCoeli(x,y){
		// center symbol
		var xShift = 19; //px						
		var yShift = 2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " -1.208852,-1.2088514 -1.208851,-0.6044258 -1.813278,0 -1.208852,0.6044258 -1.20885,1.2088514 -0.604426,1.81327715 0,1.20885135 0.604426,1.8132772 1.20885,1.2088513 1.208852,0.6044259 1.813278,0 1.208851,-0.6044259 1.208852,-1.2088513 m -11.4840902,-10.8796629 0,12.6929401");				
			node.setAttribute("stroke", astrology.SYMBOL_AXIS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.SYMBOL_AXIS_STROKE);		
			node.setAttribute("fill", "none");											
			wrapper.appendChild(node);
													
		return wrapper;
	};
	
	function number1(x,y){
		// center symbol
		var xShift = 0; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number2(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number3(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.45454549,0 0,0.9090909 -0.90909089,0 0,-0.9090909 0.4545454,-0.9090909 0.45454549,-0.4545455 1.36363636,-0.4545454 1.36363635,0 1.3636364,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.4545455,0.4545454 -0.9090909,0.4545455 -1.36363635,0.4545454 m 2.27272725,-4.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.4545454,0.4545454 m -0.4545455,-3.6363636 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -0.90909095,0.4545454 m -0.9090909,0 0.9090909,0 1.36363635,0.4545455 0.4545455,0.45454542 0.4545454,0.90909091 0,1.36363637 -0.4545454,0.9090909 -0.9090909,0.4545455 -1.3636364,0.4545454 -1.3636364,0 -1.3636363,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.90909091 0.9090909,0 0,0.90909091 -0.4545455,0 0,-0.45454546 m 5,-1.81818182 0.4545455,0.90909091 0,1.36363637 -0.4545455,0.9090909 m -1.36363635,-4.0909091 0.90909095,0.4545455 0.4545454,0.90909088 0,1.81818182 -0.4545454,0.9090909 -0.45454549,0.4545455 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number4(x,y){
		// center symbol
		var xShift = 1; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.28678383,7.7750651 0.91471356,0 m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651 m 3.20149736,-9.6044922 -2.74414057,9.6044922 m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number5(x,y){
		// center symbol
		var xShift = -2; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.27272725,4.5454545 m 2.27272725,-4.5454545 4.54545455,0 m -4.54545455,0.4545454 3.63636365,0 m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454 m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909 m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number6(x,y){
		// center symbol
		var xShift = 3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545455 -0.4545455,0 0,0.9090909 0.9090909,0 0,-0.9090909 -0.4545454,-0.9090909 -0.909091,-0.4545454 -1.3636363,0 -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 1.36363637,0 1.36363633,-0.4545454 0.9090909,-0.9090909 0.4545455,-0.90909096 0,-1.36363636 -0.4545455,-0.90909088 -0.4545454,-0.4545455 -0.9090909,-0.4545454 -1.36363638,0 -0.90909092,0.4545454 -0.4545454,0.4545455 -0.4545455,0.90909088 m 1.36363636,-4.54545458 -0.90909086,1.3636364 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 4.0909091,-0.4545454 0.4545454,-0.90909096 0,-1.36363636 -0.4545454,-0.90909088 m -0.9090909,-5 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 1.36363637,0 0.90909093,-0.4545454 0.4545454,-0.4545455 0.4545455,-1.36363636 0,-1.81818182 -0.4545455,-0.90909092 -0.4545454,-0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number7(x,y){
		// center symbol
		var xShift = -4; //px						
		var yShift = -4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.9090909,2.7272727 m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818 m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818 m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0 m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363 m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number8(x,y){
		// center symbol
		var xShift = -1; //px						
		var yShift = -5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3631244,0.4543748 -0.4543748,0.4543748 -0.4543748,0.9087496 0,1.3631244 0.4543748,0.9087496 0.9087496,0.4543748 1.3631244,0 1.3631244,-0.4543748 0.9087496,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 -0.9087496,-0.4543748 -1.8174992,0 m 0.9087496,0 -2.271874,0.4543748 m 0,0.4543748 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.4543748 m -0.4543748,0 1.3631244,0.4543748 m 0.4543748,0 1.8174992,-0.4543748 m 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 m 0.4543748,0 -1.8174992,-0.4543748 m -0.9087496,0 -0.9087496,0.9087496 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.9087496 m 1.3631244,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.8174992 -0.4543748,-0.9087496 m -2.7262488,4.543748 -1.8174992,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 1.3631244,0.4543748 1.8174992,0 1.8174992,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 -0.4543748,-0.45437484 -0.9087496,-0.4543748 m -0.9087496,0 -2.271874,0.4543748 m 0.4543748,0 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 m -0.4543748,0 2.271874,0.4543748 2.7262488,-0.4543748 m 0,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 m 0,-0.45437484 -1.3631244,-0.4543748 m -0.9087496,0 -0.9087496,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 0.4543748,0.4543748 m 1.8174992,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.81749916 -0.4543748,-0.90874964 -0.4543748,-0.4543748");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number9(x,y){
		// center symbol
		var xShift = 1; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.4545455,0.9090909 -0.4545454,0.4545455 -0.9090909,0.45454542 -1.36363638,0 -0.90909092,-0.45454542 -0.4545454,-0.4545455 -0.4545455,-0.9090909 0,-1.3636364 0.4545455,-0.9090909 0.90909086,-0.9090909 1.36363637,-0.4545454 1.36363637,0 0.9090909,0.4545454 0.4545455,0.4545455 0.4545454,1.3636363 0,1.3636364 -0.4545454,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 -0.9090909,0.9090909 -1.36363638,0.4545454 -1.36363632,0 -0.909091,-0.4545454 -0.4545454,-0.9090909 0,-0.90909096 0.9090909,0 0,0.90909096 -0.4545455,0 0,-0.4545455 m 1.3636364,-3.1818182 -0.4545454,-0.9090909 0,-1.3636364 0.4545454,-0.9090909 m 4.0909091,-0.4545454 0.4545455,0.9090909 0,1.8181818 -0.4545455,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 m -1.81818178,-2.72727278 -0.45454546,-0.45454542 -0.45454546,-0.9090909 0,-1.8181819 0.45454546,-1.3636363 0.45454546,-0.4545455 0.90909091,-0.4545454 m 1.36363637,0 0.4545454,0.4545454 0.4545455,0.9090909 0,2.2727273 -0.4545455,1.81818182 -0.4545454,1.36363637 -0.4545455,0.90909091 -0.90909087,1.3636364 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			node.setAttribute("fill", "none");															
			wrapper.appendChild(node);
											
		return wrapper;
	};
	
	function number10(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3.5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6.5; //px						
			var numberYShift = -1.5; //px
			var zero = document.createElementNS( context.root.namespaceURI, "path");
			zero.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 0.90909092,0 1.36363638,-0.4545454 0.9090909,-0.9090909 0.9090909,-1.36363641 0.4545455,-1.36363637 0.4545454,-1.81818182 0,-1.3636364 -0.4545454,-1.3636363 -0.4545455,-0.4545455 -0.9090909,-0.4545454 -0.9090909,0 m -1.36363638,0.9090909 -0.90909092,0.9090909 -0.4545454,0.9090909 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 3.1818182,0 0.9090909,-0.9090909 0.4545454,-0.90909091 0.4545455,-1.36363637 0.4545455,-1.81818182 0,-1.8181818 -0.4545455,-0.9090909 m -1.8181818,-0.9090909 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 0.90909092,0 0.90909091,-0.4545454 0.90909087,-1.3636364 0.4545455,-0.90909091 0.4545454,-1.36363637 0.4545455,-1.81818182 0,-2.2727273 -0.4545455,-0.9090909 -0.4545454,-0.4545454");
			zero.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			zero.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			zero.setAttribute("fill", "none");												
			wrapper.appendChild( zero );
													
		return wrapper;
	};
	
	function number11(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6; //px						
			var numberYShift = 0; //px
			var one2 = document.createElementNS( context.root.namespaceURI, "path");
			one2.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");
			one2.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one2.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			one2.setAttribute("fill", "none");												
			wrapper.appendChild( one2 );
													
		return wrapper;
	};
		
	function number12(x,y){
		// center symbol
		var xShift = -3; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 4; //px						
			var numberYShift = 1; //px
			var two = document.createElementNS( context.root.namespaceURI, "path");
			two.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");
			two.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			two.setAttribute("stroke-width", astrology.CUSPS_STROKE);
			two.setAttribute("fill", "none");												
			wrapper.appendChild( two );
													
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
	astrology.SVG.prototype.segment = function segment( x, y, radius, a1, a2, thickness, lFlag, sFlag){
									            	 	            	
	 	// @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 	var LARGE_ARC_FLAG = lFlag | 0;
	 	var SWEET_FLAG = sFlag | 0;
            	 	                
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
	 *		"points":{"Moon":[0], "Sun":[30],  ... },
	 *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274] 
	 *	}
	 * 
	 * @see https://github.com/Kibo/AstroWebService 
	 * 
	 * @return {astrology.Radix} radix
	 */
	astrology.Chart.prototype.radix = function( data ){
								 	
		var radix = new astrology.Radix(this.paper, this.cx, this.cy, this.radius, data);
		radix.drawBg();
		radix.drawCircles();					
		radix.drawCusps();		
		radix.drawUniverse();						
		radix.drawSigns();
		radix.drawPoints();			
		 											
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
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var northernHemisphere = this.paper.segment( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		northernHemisphere.setAttribute("fill", astrology.STROKE_ONLY ? "none" : astrology.COLOR_BACKGROUND);				
		universe.appendChild( northernHemisphere );					
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
        	segment.setAttribute("stroke", astrology.STROKE_ONLY ? astrology.CIRCLE_COLOR: "none");		 				 				 		
 			segment.setAttribute("stroke-width", astrology.STROKE_ONLY ? 1 : 0); 				
        	universe.appendChild( segment );
        	        	        	        	        	        	               	
			start += step;
        };
	};
	
	/**
	 * Draw points
	 */
	astrology.Radix.prototype.drawPoints = function(){
		if(this.data.planets == null){
			return;
		}
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS);
					
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);								
		var step = ( gap - 2*astrology.PADDING ) / Object.keys(this.data.planets).length;
									
		var locatedPoints = [];									
		for (var planet in this.data.planets) {
 		   if (this.data.planets.hasOwnProperty( planet )) {
 		   		
 		   		var pointRadius = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + astrology.PADDING);
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, pointRadius, this.data.planets[planet][0] + this.shift);
 		   		 		   		 		   		 		   	 		   
 		   		var isCollision = true; 		   		 		   		
 		   		while(isCollision){ 		   		 		   			
 		   			 		   		
 		   			var isFinish = true; 		   			
 		   			for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
 		   				
 		   				if( astrology.utils.isCollision({x:position.x, y:position.y, r:astrology.COLLISION_RADIUS},{x:locatedPoints[i].x, y:locatedPoints[i].y, r:astrology.COLLISION_RADIUS})){
 		   					pointRadius -= step;
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
        		symbol.setAttribute('id', astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_POINTS + "-" + planet);
        		symbol.setAttribute('data-radius', pointRadius);
        		wrapper.appendChild( symbol );
        		        		        		        		       
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
		var axisRadius = this.radius + this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO;
				
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
 			
 			// Lines 			 			 		 		
 			var startPosition = bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, this.data.cusps[i] + this.shift);
 			var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, this.data.cusps[i] + this.shift);
 			var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
 			line.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
 			line.setAttribute("stroke-width", 1); 			 			 		    			 	
 			if( i == AS || i == IC || i == DC || i == MC ){ 				 	 					 				 				 	
 				line.setAttribute("stroke-width", 2);
 				 				
 				// overlap 				
 				startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, this.data.cusps[i] + this.shift);
 				endPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius, this.data.cusps[i] + this.shift);
 				overlapLine = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y); 				 			
 				overlapLine.setAttribute("stroke", astrology.LINE_COLOR);		 				 				 		
 				overlapLine.setAttribute("stroke-width", 2);
 				universe.appendChild( overlapLine ); 				 				 			
 			} 			 						 			 			 			 
 		 	universe.appendChild( line ); 
 		 	 		 	
 		 	// Cup number  		 	
 		 	var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI );
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift );
 		 	universe.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y ));
 		 	  		 			 
 		 	// As
 		 	if(i == 0){ 
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (20 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
 		 		universe.appendChild( this.paper.getSymbol( astrology.SYMBOL_AS, textPosition.x, textPosition.y));
 		 	}
 		 	 		 	 		 	 		
 		 	// Ds
 		 	if(i == 6){  		 		 		 		 		 		 		 
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (2 * astrology.SYMBOL_SCALE), this.data.cusps[i] + this.shift);
 		 		universe.appendChild( this.paper.getSymbol( astrology.SYMBOL_DS, textPosition.x, textPosition.y));
 		 	}
 		 	 		 	
 		 	// Ic
 		 	if(i == 3){ 
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] - 2 + this.shift);
 		 		universe.appendChild( this.paper.getSymbol( astrology.SYMBOL_IC, textPosition.x, textPosition.y));
 		 	}
 		 	
 		 	// Mc
 		 	if(i == 9){ 		 		 		 	
 		 		// Text
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, axisRadius + (10 * astrology.SYMBOL_SCALE), this.data.cusps[i] + 2 + this.shift);
 		 		universe.appendChild( this.paper.getSymbol( astrology.SYMBOL_MC, textPosition.x, textPosition.y));
 		 	} 		 
		}
	};
	
	/**
	 * Draw aspects
	 */
	astrology.Radix.prototype.aspects = function(){		
		// TODO
		         
        // this
        return context;
	};
	
	/**
	 * Draw signs symbols
	 * .
	 */
	astrology.Radix.prototype.drawSigns = function(){
		
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_SIGNS);
		
		// signs
        for( var i = 0, step = 30, start = 15 + this.shift, len = astrology.SYMBOL_SIGNS.length; i < len; i++ ){ 
        	var position = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO)/2, start);       	        	                	
        	wrapper.appendChild( this.paper.getSymbol( astrology.SYMBOL_SIGNS[i], position.x, position.y));        	        	        	               		
			start += step;
        }
	};
	
	/**
	 * Draw circles
	 */
	astrology.Radix.prototype.drawCircles = function drawCircles(){
	
		var universe = this.universe;		
		var wrapper = astrology.utils.getEmptyWrapper( universe, astrology.ID_CHART + "-" + astrology.ID_RADIX + "-" + astrology.ID_CIRCLES);
							
		// Rays
        var lineLength = 3;
        for( i = 0, start = 0, step = 5; i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, start + this.shift );
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + lineLength), start + this.shift);
       		var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);       		       		       
       		line.setAttribute("stroke", astrology.CIRCLE_COLOR);		 				 				 		
 			line.setAttribute("stroke-width", 1);       		
       		wrapper.appendChild( line );
       		start += step;
       	} 
							
		var circle;
		
		//outdoor circle
		circle = this.paper.circle( this.cx, this.cy, this.radius);
		circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", astrology.CIRCLE_STRONG);
        wrapper.appendChild( circle );
       	
       	//inner circle
       	circle = this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO);
       	circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", astrology.CIRCLE_STRONG);
        wrapper.appendChild( circle );
        
        //indoor circle
        circle = this.paper.circle( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
        circle.setAttribute("stroke", astrology.CIRCLE_COLOR);		 
		circle.setAttribute("stroke-width", astrology.CIRCLE_STRONG);		
       	wrapper.appendChild( circle );       	       	       	       	       	   
	};
		
	/**
	 * Draw the symbol on the axis.
	 * For debug only.
	 * 
	 * @param {String} name - name of symbol
	 */
	astrology.Radix.prototype.calibrate = function calibrate( name ){		
		this.paper.root.appendChild( this.paper.getSymbol( name, this.cx - this.radius, this.cy));
		this.paper.root.appendChild( this.paper.getSymbol( name, this.cx + this.radius, this.cy));
		this.paper.root.appendChild( this.paper.getSymbol( name, this.cx, this.cy + this.radius));
		this.paper.root.appendChild( this.paper.getSymbol( name, this.cx, this.cy - this.radius));
		return this;		
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
		var transit = new astrology.Transit(context, data);					
		transit.drawPoints();		
		transit.drawCusps();	
		//context.drawCircles();	
		transit.drawCircles();	
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
		return {x:xPos, y:yPos};
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
		
		if(data.planets == null){					
			status.messages.push( "There is not property 'planets'." );
			status.hasError = true;
		}
		
		for (var property in data.planets) {
    		if (data.planets.hasOwnProperty(property)) {        		
        		if(!Array.isArray( data.planets[property] )){
        			status.messages.push( "The planets property '"+ property +"' has to be Array." );
					status.hasError = true;	
        		}
    		}
		}
					
		if(data.cusps != null && !Array.isArray(data.cusps)){
			status.messages.push( "Property 'cusps' has to be Array." );
			status.hasError = true;
		}
		
		if(data.cusps != null && data.cusps.length != 12){			
			status.messages.push( "Count of 'cusps' values has to be 12." );
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
	
	/**
	 * Check circle collision between two objects 
	 * 
 	 * @param {Object} circle1, {x:123, y:123, r:50}
 	 * @param {Object} circle2, {x:456, y:456, r:60}
 	 * @return {boolean} 	 
	 */
	astrology.utils.isCollision = function(circle1, circle2){
		
		//Calculate the vector between the circles’ center points
  		var vx = circle1.x - circle2.x;
  		var vy = circle1.y - circle2.y;
  		
  		var magnitude = Math.sqrt(vx * vx + vy * vy);
  		
  		var totalRadii = circle1.r + circle2.r;
		
		return magnitude <= totalRadii; 
	};
						        	 
}( window.astrology = window.astrology || {}));