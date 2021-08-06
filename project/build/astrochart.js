// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;
		
	// BG color
	astrology.COLOR_BACKGROUND = "#fff";		 
				
	// Color of planet's symbols
	astrology.POINTS_COLOR = "#000";
	
	// Size of description text next to the planet: angle, retrograde, dignities, ...
	astrology.POINTS_TEXT_SIZE = 8;
	
	// Points strength of lines
	astrology.POINTS_STROKE = 1.8;
		
	// Font color of signs symbols
	astrology.SIGNS_COLOR = "#000"; 
	
	// Signs strength of lines
	astrology.SIGNS_STROKE = 1.5;
	
	// Chart margin
	astrology.MARGIN = 50; //px
		
	// Chart Padding  
	astrology.PADDING = 18; //px
	
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
	
	// Axis wrapper element ID
	astrology.ID_AXIS = "axis";
	
	// Cusps wrapper element ID
	astrology.ID_CUSPS = "cusps";
		
	// Cusps wrapper element ID
	astrology.ID_RULER = "ruler";
	
	// Background wrapper element ID
	astrology.ID_BG = "bg";
	
	// Color of circles in charts
	astrology.CIRCLE_COLOR = "#333";
	
	// Circles strength of lines
	astrology.CIRCLE_STRONG = 2;
	
	// Color of lines in charts
	astrology.LINE_COLOR = "#333";
	
	// radius / INDOOR_CIRCLE_RADIUS_RATIO
	astrology.INDOOR_CIRCLE_RADIUS_RATIO = 2;
	
	// radius - radius/INNER_CIRCLE_RADIUS_RATIO
	astrology.INNER_CIRCLE_RADIUS_RATIO = 8;
	
	// ( radius / astrology.INNER_CIRCLE_RADIUS_RATIO ) / astrology.RULER_RADIUS 
	astrology.RULER_RADIUS = 4;
		
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
	astrology.COLOR_CANCER = "#27AE60"; 
	astrology.COLOR_LEO = "#FF4500"; 
	astrology.COLOR_VIRGO = "#8B4513"; 
	astrology.COLOR_LIBRA = "#87CEEB";  
	astrology.COLOR_SCORPIO = "#27AE60";  
	astrology.COLOR_SAGITTARIUS = "#FF4500";
	astrology.COLOR_CAPRICORN = "#8B4513"; 
	astrology.COLOR_AQUARIUS = "#87CEEB"; 
	astrology.COLOR_PISCES = "#27AE60"; 	        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
	
	// No fill, only stroke
	astrology.STROKE_ONLY = false;
	
	// Planets collision circle radius for astrology.SYMBOL_SCALE = 1
	// Scaling changes the collision radius 
	astrology.COLLISION_RADIUS = 10; //px
	
	// Aspects	
	astrology.ASPECTS = { 
		"conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
		"square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
		"trine":{"degree":120, "orbit":8, "color":"#27AE60"},
		"opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
		};	
	
	// Dignities
	astrology.DIGNITIES_RULERSHIP = "r";			
	astrology.DIGNITIES_DETRIMENT = "d";			
	astrology.DIGNITIES_EXALTATION = "e";			
	astrology.DIGNITIES_EXACT_EXALTATION = "E";		
	astrology.DIGNITIES_FALL = "f";	
	
	// Source: Aleister Crowley
	astrology.DIGNITIES_EXACT_EXALTATION_DEFAULT = [
		{"name":"Sun", "position":19, "orbit":2}, // 19 Arise
		{"name":"Moon", "position":33, "orbit":2}, //3 Taurus
		{"name":"Mercury", "position":155, "orbit":2}, //15 Virgo
		{"name":"Venus", "position":357, "orbit":2}, //27 Pisces
		{"name":"Mars", "position":298, "orbit":2}, //28 Capricorn
		{"name":"Jupiter", "position":105, "orbit":2}, //15 Cancer
		{"name":"Saturn", "position":201, "orbit":2}, //21 Libra
		{"name":"NNode", "position":63, "orbit":2}, //3 Geminy
	];
	
	// 0 - 4
	astrology.ANIMATION_CUSPS_ROTATION_SPEED = 2;
	
	astrology.DEBUG = false;
									       	      
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
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");		
		svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
		svg.setAttribute('style', "position: relative; overflow: hidden;");		
		svg.setAttribute('version', "1.1");						 				
		svg.setAttribute('width', width);
		svg.setAttribute('height', height);		
		svg.setAttribute('viewBox', "0 0 "+ width + " " + height);									
		document.getElementById( elementId ).appendChild( svg );
		
		astrology._paperElementId = elementId + "-" + astrology.ID_CHART;		
		
		var wrapper = document.createElementNS(svg.namespaceURI, "g");
		wrapper.setAttribute('id', astrology._paperElementId );
		svg.appendChild( wrapper );
						
		this.DOMElement = svg;				
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
	
	/**
	 * Get ID for sign wrapper. 
	 * 
	 * @param {String} sign
	 * 
	 * @return {String id}
	 */
	function getSignWrapperId(sign) {
		return astrology._paperElementId + '-' + astrology.ID_RADIX + '-' + astrology.ID_SIGNS + '-' + sign
	}

	/**
	 * Get ID for house wrapper. 
	 * 
	 * @param {String} house
	 * 
	 * @return {String id}
	 */
	function getHouseIdWrapper(house) {
		return astrology._paperElementId + '-' + astrology.ID_RADIX + '-' + astrology.ID_CUSPS + '-' + house
	}

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
			node.setAttribute("fill", "none");
			wrapper.appendChild(node);
																	
		return wrapper;
	};
	
	/*
	 * Moon path
	 * @private
	 * 
	 * @param {int} x
	 * @param {int} y	 
	 * 
	 * @return {SVGPathElement} path
	 */
	function moon( x, y ){
		
		// center symbol
		var xShift = -2; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " a 7.4969283,7.4969283 0 0 1 0,14.327462 7.4969283,7.4969283 0 1 0 0,-14.327462 z");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");			
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
		var xShift = -2; //px						
		var yShift = 7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " 4.26011,0 m -2.13005,-2.98207 0,5.11213 m 4.70312,-9.7983 a 4.70315,4.70315 0 0 1 -4.70315,4.70314 4.70315,4.70315 0 0 1 -4.70314,-4.70314 4.70315,4.70315 0 0 1 4.70314,-4.70315 4.70315,4.70315 0 0 1 4.70315,4.70315 z");				
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill","none");			
			wrapper.appendChild( body );
			
			var crownXShift = 6; //px						
			var crownYShift = -16; //px
			var crown = document.createElementNS( context.root.namespaceURI, "path");
			crown.setAttribute("d", "m" + (x + crownXShift) + ", " + (y + crownYShift) + " a 3.9717855,3.9717855 0 0 1 -3.95541,3.59054 3.9717855,3.9717855 0 0 1 -3.95185,-3.59445");				
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
		var xShift = 2; //px						
		var yShift = 7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -4.937669,0.03973 m 2.448972,2.364607 0,-5.79014 c -3.109546,-0.0085 -5.624617,-2.534212 -5.620187,-5.64208 0.0044,-3.107706 2.526514,-5.621689 5.635582,-5.621689 3.109068,0 5.631152,2.513983 5.635582,5.621689 0.0044,3.107868 -2.510641,5.633586 -5.620187,5.64208");				
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill","none");												
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
		var xShift = 2; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");								
			node.setAttribute("d", "m" + x + ", " + y + " c -5.247438,-4.150623 -11.6993,3.205518 -7.018807,7.886007 4.680494,4.680488 12.036628,-1.771382 7.885999,-7.018816 z m 0,0 0.433597,0.433595 3.996566,-4.217419 m -3.239802,-0.05521 3.295015,0 0.110427,3.681507");			
			node.setAttribute("stroke", astrology.POINTS_COLOR);		 
			node.setAttribute("stroke-width", astrology.POINTS_STROKE);
			node.setAttribute("fill", "none");			
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
		var xShift = -5; //px						
		var yShift = -2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " c -0.43473,0 -1.30422,-0.40572 -1.30422,-2.02857 0,-1.62285 1.73897,-3.2457 3.47792,-3.2457 1.73897,0 3.47792,1.21715 3.47792,4.05713 0,2.83999 -2.1737,7.30283 -6.52108,7.30283 m 12.17269,0 -12.60745,0 m 9.99902,-11.76567 0,15.82279");				
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
			node.setAttribute("d", "m" + x + ", " + y + " c -0.52222,0.52221 -1.04445,1.04444 -1.56666,1.04444 -0.52222,0 -1.56667,-0.52223 -1.56667,-1.56667 0,-1.04443 0.52223,-2.08887 1.56667,-3.13332 1.04444,-1.04443 2.08888,-3.13331 2.08888,-5.22219 0,-2.08888 -1.04444,-4.17776 -3.13332,-4.17776 -1.97566,0 -3.65555,1.04444 -4.69998,3.13333 m -2.55515,-5.87499 6.26664,0 m -3.71149,-2.48054 0,15.14438");				
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
		var xShift = -5; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
			
			var horns = document.createElementNS( context.root.namespaceURI, "path");
			horns.setAttribute("d", "m" + x + ", " + y + "  0,10.23824 m 10.23633,-10.32764 0,10.23824 m -10.26606,-4.6394 10.23085,0 m -5.06415,-5.51532 0,11.94985");				
			horns.setAttribute("stroke", astrology.POINTS_COLOR);		 
			horns.setAttribute("stroke-width", astrology.POINTS_STROKE);
			horns.setAttribute("fill", "none");												
			wrapper.appendChild(horns);
								
			var bodyXShift = 7; //px						
			var bodyYShift = 14.5; //px
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + (x + bodyXShift) + ", " + (y + bodyYShift) + " a 1.8384377,1.8384377 0 0 1 -1.83844,1.83843 1.8384377,1.8384377 0 0 1 -1.83842,-1.83843 1.8384377,1.8384377 0 0 1 1.83842,-1.83844 1.8384377,1.8384377 0 0 1 1.83844,1.83844 z");				
			body.setAttribute("stroke", astrology.POINTS_COLOR);
			body.setAttribute("stroke-width", astrology.POINTS_STROKE); 			
			body.setAttribute("fill", "none");	 									
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
		var yShift = -5; //px		
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
		var xShift = 5; //px						
		var yShift = -5; //px		
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
			head.setAttribute("fill", "none");														
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
		var yShift = 5; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var body = document.createElementNS( context.root.namespaceURI, "path");
			body.setAttribute("d", "m" + x + ", " + y + " a 3.8764725,3.0675249 0 0 1 -3.876473,3.067525 3.8764725,3.0675249 0 0 1 -3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876472,-3.067525 3.8764725,3.0675249 0 0 1 3.876473,3.067525 z");
			body.setAttribute("stroke", astrology.POINTS_COLOR);		 
			body.setAttribute("stroke-width", astrology.POINTS_STROKE);
			body.setAttribute("fill", "none");												
			wrapper.appendChild( body );
			
			var headXShift = 0; //px						
			var headYShift = -13; //px
			var head = document.createElementNS( context.root.namespaceURI, "path");
			head.setAttribute("d", "m" + (x + headXShift) + ", " + (y + headYShift) + "   -3.942997,4.243844 4.110849,3.656151 m -4.867569,-9.009468 0,11.727251");
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
		var xShift = 2; //px						
		var yShift = 4; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.525435,-1.12853 -1.464752,-1.79539 -0.808138,-2.20576 0.151526,-2.05188 0.909156,-1.5389 1.010173,-1.02593 0.909157,-0.56427 1.363735,-0.61556 m 2.315327,-0.39055 -1.716301,0.54716 -1.7163,1.09431 -1.1442,1.64146 -0.572102,1.64146 0,1.64146 0.572102,1.64147 1.1442,1.64145 1.7163,1.09432 1.716301,0.54715 m 0,-11.49024 -2.2884,0 -2.288401,0.54716 -1.716302,1.09431 -1.144201,1.64146 -0.5721,1.64146 0,1.64146 0.5721,1.64147 1.144201,1.64145 1.716302,1.09432 2.288401,0.54715 2.2884,0 m -4.36712,-0.4752 0,6.44307 m -2.709107,-3.41101 5.616025,0");			
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
		var xShift = -2; //px						
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_ARIES));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_TAURUS));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_GEMINI));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_CANCER));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_LEO));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_VIRGO));
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
		var xShift = -2; //px						
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
		
		var wrapper = document.createElementNS(context.root.namespaceURI, "g");
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_LIBRA));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m " + x + ", " + y + " c 0.7519,1e-5 1.3924,0.12227 1.9316,0.35156 0.6619,0.28495 1.2134,0.63854 1.666,1.0625 0.4838,0.45481 0.853,0.97255 1.1172,1.56641 0.2467,0.56612 0.3711,1.17397 0.3711,1.83789 0,0.64113 -0.1244,1.23948 -0.373,1.80859 -0.1624,0.36305 -0.3631,0.69725 -0.6055,1.00586 l -0.6367,0.8086 4.3789,0 0,0.67187 -5.4024,0 0,-0.91797 c 0.2173,-0.1385 0.4379,-0.27244 0.6367,-0.44726 0.4215,-0.36876 0.7529,-0.82784 0.9883,-1.35547 0.2215,-0.50074 0.334,-1.0358 0.334,-1.58594 0,-0.55653 -0.1122,-1.09434 -0.334,-1.5957 l -0,-0.002 0,-0.004 c -0.2292,-0.49901 -0.5581,-0.94778 -0.9746,-1.33789 l -0,-0.002 -0,-0.002 c -0.3967,-0.36155 -0.8679,-0.65723 -1.4062,-0.88476 l -0,0 c -0.4984,-0.20903 -1.0622,-0.30663 -1.6817,-0.30664 -0.5926,1e-5 -1.1526,0.10008 -1.6699,0.30273 l -0,0 c -0.5261,0.20799 -1.0032,0.5067 -1.4199,0.88867 l -0,0.002 -0,0.002 c -0.4166,0.39011 -0.7454,0.83887 -0.9746,1.33789 l 0,0.004 -0,0.002 c -0.2218,0.50136 -0.334,1.03915 -0.334,1.5957 0,0.55015 0.1125,1.08519 0.334,1.58594 l 0,0.002 0,0.004 c 0.229,0.49855 0.5574,0.94911 0.9746,1.33984 0.1876,0.17482 0.4143,0.31484 0.6367,0.45703 l 0,0.91797 -5.3906,0 0,-0.67187 4.3789,0 -0.6367,-0.8086 c -0.2428,-0.30904 -0.443,-0.64418 -0.6055,-1.00781 -0.2487,-0.56911 -0.3731,-1.16552 -0.3731,-1.80664 0,-0.66391 0.1244,-1.27178 0.3711,-1.83789 l 0,-0.002 c 3e-4,-5.8e-4 -2e-4,-10e-4 0,-0.002 0.2641,-0.59218 0.6326,-1.10871 1.1153,-1.5625 0.4847,-0.45571 1.0332,-0.80585 1.6562,-1.05859 0.5861,-0.23488 1.2294,-0.35546 1.9414,-0.35547 z m -7.8496,13.45899 15.6992,0 0,0.67187 -15.6992,0 z");				
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_SCORPIO));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_SAGITTARIUS));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_CAPRICORN));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_AQUARIUS));
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
		wrapper.setAttribute('id', getSignWrapperId(astrology.SYMBOL_PISCES));
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
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
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
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
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
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));			
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
			node.setAttribute("stroke-width", (astrology.SYMBOL_AXIS_STROKE * astrology.SYMBOL_SCALE));		
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_1));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.5128753,7.7578884 1.00515009,0 m 3.01545031,-9.5832737 -1.0051501,1.8253853 -2.51287527,7.7578884 m 3.51802537,-9.5832737 -3.01545031,9.5832737 m 3.01545031,-9.5832737 -1.5077251,1.3690388 -1.50772521,0.9126929 -1.00515009,0.4563463 m 2.5128753,-0.9126927 -1.00515016,0.4563464 -1.50772514,0.4563463");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_2));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_3));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545454 0.45454549,0 0,0.9090909 -0.90909089,0 0,-0.9090909 0.4545454,-0.9090909 0.45454549,-0.4545455 1.36363636,-0.4545454 1.36363635,0 1.3636364,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.4545455,0.4545454 -0.9090909,0.4545455 -1.36363635,0.4545454 m 2.27272725,-4.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.4545454,0.4545454 m -0.4545455,-3.6363636 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -0.90909095,0.4545454 m -0.9090909,0 0.9090909,0 1.36363635,0.4545455 0.4545455,0.45454542 0.4545454,0.90909091 0,1.36363637 -0.4545454,0.9090909 -0.9090909,0.4545455 -1.3636364,0.4545454 -1.3636364,0 -1.3636363,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.90909091 0.9090909,0 0,0.90909091 -0.4545455,0 0,-0.45454546 m 5,-1.81818182 0.4545455,0.90909091 0,1.36363637 -0.4545455,0.9090909 m -1.36363635,-4.0909091 0.90909095,0.4545455 0.4545454,0.90909088 0,1.81818182 -0.4545454,0.9090909 -0.45454549,0.4545455 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_4));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.28678383,7.7750651 0.91471356,0 m 2.74414057,-9.6044922 -0.9147135,1.8294271 -2.28678386,7.7750651 m 3.20149736,-9.6044922 -2.74414057,9.6044922 m 2.74414057,-9.6044922 -7.3177083,6.8603516 7.3177083,0");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_5));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -2.27272725,4.5454545 m 2.27272725,-4.5454545 4.54545455,0 m -4.54545455,0.4545454 3.63636365,0 m -4.0909091,0.4545455 2.2727273,0 1.8181818,-0.4545455 0.9090909,-0.4545454 m -6.8181818,4.5454545 0.4545454,-0.4545454 1.3636364,-0.4545455 1.36363636,0 1.36363634,0.4545455 0.4545455,0.4545454 0.4545454,0.90909092 0,1.36363638 -0.4545454,1.3636364 -0.9090909,0.9090909 -1.81818185,0.4545454 -1.36363635,0 -0.9090909,-0.4545454 -0.4545455,-0.4545455 -0.4545454,-0.9090909 0,-0.9090909 0.9090909,0 0,0.9090909 -0.4545455,0 0,-0.45454545 m 5,-2.72727275 0.4545455,0.90909092 0,1.36363638 -0.4545455,1.3636364 -0.9090909,0.9090909 m -0.45454544,-5.4545455 0.90909094,0.4545455 0.4545454,0.9090909 0,1.8181818 -0.4545454,1.3636364 -0.90909094,0.9090909 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_6));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " 0,-0.4545455 -0.4545455,0 0,0.9090909 0.9090909,0 0,-0.9090909 -0.4545454,-0.9090909 -0.909091,-0.4545454 -1.3636363,0 -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 1.36363637,0 1.36363633,-0.4545454 0.9090909,-0.9090909 0.4545455,-0.90909096 0,-1.36363636 -0.4545455,-0.90909088 -0.4545454,-0.4545455 -0.9090909,-0.4545454 -1.36363638,0 -0.90909092,0.4545454 -0.4545454,0.4545455 -0.4545455,0.90909088 m 1.36363636,-4.54545458 -0.90909086,1.3636364 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 4.0909091,-0.4545454 0.4545454,-0.90909096 0,-1.36363636 -0.4545454,-0.90909088 m -0.9090909,-5 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 1.36363637,0 0.90909093,-0.4545454 0.4545454,-0.4545455 0.4545455,-1.36363636 0,-1.81818182 -0.4545455,-0.90909092 -0.4545454,-0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_7));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.9090909,2.7272727 m 6.8181818,-2.7272727 -0.4545454,1.3636363 -0.909091,1.3636364 -1.8181818,2.2727273 -0.90909088,1.36363633 -0.45454546,1.36363637 -0.45454545,1.8181818 m 0.90909091,-3.63636362 -0.90909091,1.81818182 -0.45454546,1.8181818 m 4.09090905,-6.8181818 -2.72727268,2.72727272 -0.90909091,1.36363637 -0.45454546,0.90909091 -0.45454545,1.8181818 0.90909091,0 m -1.36363641,-8.1818182 1.36363641,-1.3636363 0.90909091,0 2.27272728,1.3636363 m -3.63636365,-0.9090909 1.36363637,0 2.27272728,0.9090909 m -4.5454546,0 0.90909095,-0.4545454 1.36363637,0 2.27272728,0.4545454 0.9090909,0 0.4545455,-0.4545454 0.4545454,-0.9090909");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_8));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -1.3631244,0.4543748 -0.4543748,0.4543748 -0.4543748,0.9087496 0,1.3631244 0.4543748,0.9087496 0.9087496,0.4543748 1.3631244,0 1.3631244,-0.4543748 0.9087496,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 -0.9087496,-0.4543748 -1.8174992,0 m 0.9087496,0 -2.271874,0.4543748 m 0,0.4543748 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.4543748 m -0.4543748,0 1.3631244,0.4543748 m 0.4543748,0 1.8174992,-0.4543748 m 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.3631244 -0.4543748,-0.9087496 m 0.4543748,0 -1.8174992,-0.4543748 m -0.9087496,0 -0.9087496,0.9087496 -0.4543748,0.9087496 0,1.8174992 0.4543748,0.9087496 m 1.3631244,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.8174992 -0.4543748,-0.9087496 m -2.7262488,4.543748 -1.8174992,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 1.3631244,0.4543748 1.8174992,0 1.8174992,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 -0.4543748,-0.45437484 -0.9087496,-0.4543748 m -0.9087496,0 -2.271874,0.4543748 m 0.4543748,0 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 m -0.4543748,0 2.271874,0.4543748 2.7262488,-0.4543748 m 0,-0.4543748 0.4543748,-0.9087496 0,-1.36312436 -0.4543748,-0.9087496 m 0,-0.45437484 -1.3631244,-0.4543748 m -0.9087496,0 -0.9087496,0.4543748 -0.9087496,0.90874964 -0.4543748,0.9087496 0,1.36312436 0.4543748,0.9087496 0.4543748,0.4543748 m 1.8174992,0 0.9087496,-0.4543748 0.4543748,-0.4543748 0.4543748,-0.9087496 0,-1.81749916 -0.4543748,-0.90874964 -0.4543748,-0.4543748");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_9));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var node = document.createElementNS( context.root.namespaceURI, "path");
			node.setAttribute("d", "m" + x + ", " + y + " -0.4545455,0.9090909 -0.4545454,0.4545455 -0.9090909,0.45454542 -1.36363638,0 -0.90909092,-0.45454542 -0.4545454,-0.4545455 -0.4545455,-0.9090909 0,-1.3636364 0.4545455,-0.9090909 0.90909086,-0.9090909 1.36363637,-0.4545454 1.36363637,0 0.9090909,0.4545454 0.4545455,0.4545455 0.4545454,1.3636363 0,1.3636364 -0.4545454,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 -0.9090909,0.9090909 -1.36363638,0.4545454 -1.36363632,0 -0.909091,-0.4545454 -0.4545454,-0.9090909 0,-0.90909096 0.9090909,0 0,0.90909096 -0.4545455,0 0,-0.4545455 m 1.3636364,-3.1818182 -0.4545454,-0.9090909 0,-1.3636364 0.4545454,-0.9090909 m 4.0909091,-0.4545454 0.4545455,0.9090909 0,1.8181818 -0.4545455,1.81818182 -0.4545455,1.36363637 -0.9090909,1.36363641 m -1.81818178,-2.72727278 -0.45454546,-0.45454542 -0.45454546,-0.9090909 0,-1.8181819 0.45454546,-1.3636363 0.45454546,-0.4545455 0.90909091,-0.4545454 m 1.36363637,0 0.4545454,0.4545454 0.4545455,0.9090909 0,2.2727273 -0.4545455,1.81818182 -0.4545454,1.36363637 -0.4545455,0.90909091 -0.90909087,1.3636364 -0.90909091,0.4545454");			
			node.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			node.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_10));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6.5; //px						
			var numberYShift = -1.5; //px
			var zero = document.createElementNS( context.root.namespaceURI, "path");
			zero.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -1.36363638,0.4545454 -0.90909092,0.9090909 -0.9090909,1.3636364 -0.4545455,1.3636364 -0.4545454,1.81818178 0,1.36363636 0.4545454,1.36363636 0.4545455,0.4545455 0.9090909,0.4545454 0.90909092,0 1.36363638,-0.4545454 0.9090909,-0.9090909 0.9090909,-1.36363641 0.4545455,-1.36363637 0.4545454,-1.81818182 0,-1.3636364 -0.4545454,-1.3636363 -0.4545455,-0.4545455 -0.9090909,-0.4545454 -0.9090909,0 m -1.36363638,0.9090909 -0.90909092,0.9090909 -0.4545454,0.9090909 -0.4545455,1.3636364 -0.4545455,1.81818178 0,1.81818182 0.4545455,0.9090909 m 3.1818182,0 0.9090909,-0.9090909 0.4545454,-0.90909091 0.4545455,-1.36363637 0.4545455,-1.81818182 0,-1.8181818 -0.4545455,-0.9090909 m -1.8181818,-0.9090909 -0.90909093,0.4545454 -0.90909091,1.3636364 -0.45454546,0.9090909 -0.4545454,1.3636364 -0.4545455,1.81818178 0,2.27272732 0.4545455,0.9090909 0.4545454,0.4545454 m 0.90909092,0 0.90909091,-0.4545454 0.90909087,-1.3636364 0.4545455,-0.90909091 0.4545454,-1.36363637 0.4545455,-1.81818182 0,-2.2727273 -0.4545455,-0.9090909 -0.4545454,-0.4545454");
			zero.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			zero.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_11));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 6; //px						
			var numberYShift = 0; //px
			var one2 = document.createElementNS( context.root.namespaceURI, "path");
			one2.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");
			one2.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one2.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
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
		wrapper.setAttribute('id', getHouseIdWrapper(astrology.SYMBOL_CUSP_12));
		wrapper.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");
				
			var one = document.createElementNS( context.root.namespaceURI, "path");
			one.setAttribute("d", "m" + x + ", " + y + " -2.28795747,7.7790553 0.91518297,0 m 2.7455489,-9.6094213 -0.9151829,1.830366 -2.28795748,7.7790553 m 3.20314038,-9.6094213 -2.7455489,9.6094213 m 2.7455489,-9.6094213 -1.3727744,1.3727745 -1.3727745,0.915183 -0.91518297,0.4575915 m 2.28795747,-0.915183 -0.91518301,0.4575915 -1.37277446,0.4575915");			
			one.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			one.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			one.setAttribute("fill", "none");															
			wrapper.appendChild(one);
						
			var numberXShift = 4; //px						
			var numberYShift = 1; //px
			var two = document.createElementNS( context.root.namespaceURI, "path");
			two.setAttribute("d", "m" + (x + numberXShift) + ", " + (y + numberYShift) + " 0,-0.4545454 0.4545454,0 0,0.9090909 -0.9090909,0 0,-0.9090909 0.4545455,-0.9090909 0.4545454,-0.4545455 1.36363637,-0.4545454 1.36363633,0 1.3636364,0.4545454 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -4.5454546,2.72727269 -0.9090909,0.90909091 -0.9090909,1.8181818 m 6.8181818,-9.0909091 0.4545455,0.9090909 0,0.9090909 -0.4545455,0.909091 -0.9090909,0.9090909 -1.36363633,0.9090909 m 1.36363633,-5 0.4545455,0.4545454 0.4545454,0.9090909 0,0.9090909 -0.4545454,0.909091 -0.9090909,0.9090909 -3.6363637,2.72727269 m -1.3636363,1.81818181 0.4545454,-0.4545454 0.9090909,0 2.27272732,0.4545454 2.27272728,0 0.4545454,-0.4545454 m -5,0 2.27272732,0.9090909 2.27272728,0 m -4.5454546,-0.9090909 2.27272732,1.3636363 1.36363638,0 0.9090909,-0.4545454 0.4545454,-0.9090909 0,-0.4545455");
			two.setAttribute("stroke", astrology.CUSPS_FONT_COLOR);		 
			two.setAttribute("stroke-width", (astrology.CUSPS_STROKE * astrology.SYMBOL_SCALE));
			two.setAttribute("fill", "none");												
			wrapper.appendChild( two );
													
		return wrapper;
	};	
			
	/**
	 * Draw circular sector
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
	 	var LARGE_ARC_FLAG = lFlag || 0;
	 	var SWEET_FLAG = sFlag || 0;
            	 	                
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
			if(!('COLORS_SIGNS' in settings)) astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
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
		radix.drawUniverse();									
		radix.drawRuler();									
		radix.drawPoints();
		radix.drawCusps();		
		radix.drawAxis();	 
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
	
	/**
	 * Draw the symbol on the axis.
	 * For debug only.
	 * 	
	 */
	astrology.Chart.prototype.calibrate = function calibrate(){
		var positions, circle, line;
		var startRadius = 60;
		
		var planets = ["Sun", "Moon", "Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Chiron", "Lilith", "NNode"];
		
		for(var i = 0; i < planets.length; i++){		
			positions = astrology.utils.getPointPosition(this.cx, this.cy, this.radius*2, i * 30 );
			
			line = this.paper.line(this.cx, this.cy, positions.x, positions.y);
			line.setAttribute("stroke", astrology.LINE_COLOR);	
			this.paper.root.appendChild( line);
			
			circle = this.paper.circle(this.cx, this.cy, startRadius + startRadius * i );
			circle.setAttribute("stroke", astrology.LINE_COLOR);		 
			circle.setAttribute("stroke-width", 1);
			this.paper.root.appendChild( circle );
						
		}
						
		for(var n = 0, ln = planets.length; n < ln; n++){
			
			var radius = startRadius + startRadius*n; 
			
			for(var i = 0; i < 12; i++){
				positions = astrology.utils.getPointPosition(this.cx, this.cy, radius, i * 30 );
			
				circle = this.paper.circle(positions.x, positions.y, astrology.COLLISION_RADIUS *astrology.SYMBOL_SCALE );
				circle.setAttribute("stroke", "red");		 
				circle.setAttribute("stroke-width", 1);
				this.paper.root.appendChild( circle );
							
				this.paper.root.appendChild( this.paper.getSymbol( planets[n], positions.x, positions.y));	
			}
		
		}
											
		return this;		
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
// ## Transit chart ###################################
(function( astrology ) {
		
	var context;
    
	/**
	 * Aspects calculator
	 * 
	 * @class
	 * @public
	 * @constructor 	 
	 * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
	 * @param {Object | null } settings
	 */
	astrology.AspectCalculator = function( toPoints, settings ){
		
		if(toPoints == null){
			throw new Error( "Param 'toPoint' must not be empty." );
		}
		
		this.settings = settings || {}; 		
		this.settings.aspects = settings && settings.aspects || astrology.ASPECTS;
							
		this.toPoints = toPoints;
																																												
		context = this; 
												 
		return this;
	};
	
	/**
	 * Getter for this.toPoints
	 * @see constructor
	 * 
	 * @return {Object} 
	 */
	astrology.AspectCalculator.prototype.getToPoints = function(){
		return this.this.toPoints;
	};
	
	/**
	 * Radix aspects
	 * 
	 * In radix calculation is the param "points" the same as param "toPoints" in constructor 
	 * , but without special points such as: As,Ds, Mc, Ic, ...
	 * 
	 * @param {Object} points; {"Sun":[0], "Moon":[90]}
	 * 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.radix = function( points ){
		if(!points){
			return []; 
		}
							
		var aspects = [];			
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) {
 		   	 		   	 		   
 		   	for (var toPoint in this.toPoints) {
 		   		if (this.toPoints.hasOwnProperty( toPoint )) { 		   			 		   			 		   		
 		   			
 		   			if( point != toPoint){ 		   				 		   			 		   			 		   
	 		   			for(var aspect in this.settings.aspects){ 		   				
	 		   				if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect])){
	 		   						
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision": calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]).toFixed(4)
	 		   								}
	 		   							)
	 		   				}
	 		   				
	 		   			}
 		   			} 		   		 		   						 
 		   		} 		   		
 		   	} 		   	 		   	 		  
 		   } 		
 		}
 		 		 		  		 		 
		return aspects.sort( compareAspectsByPrecision );
	}; 
			
	/**
	 * Transit aspects
	 *
	 * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]}; 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.transit = function( points ){	
		if(!points){
			return []; 
		}
		
		var aspects = [];
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) { 		   	
 		   		for (var toPoint in this.toPoints) {
 		   			if (this.toPoints.hasOwnProperty( toPoint )) {
 		   		
 		   				for(var aspect in this.settings.aspects){ 		   				
	 		   				if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect])){	 
	 		   					
	 		   					var precision = calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]);
	 		   					
	 		   					// -1 : is approaching to aspect
	 		   					// +1 : is moving away
	 		   					if(isTransitPointApproachingToAspect( this.settings.aspects[aspect]["degree"], this.toPoints[toPoint][0], points[point][0] )){
	 		   						precision *= -1;
	 		   					}
	 		   					
	 		   					// if transit has speed value && transit is retrograde
	 		   					if(points[point][1] && points[point][1] < 0 ){ 
	 		   						precision *= -1;
	 		   					}
	 		   						 		   						 		   						 		   							   				
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision":precision.toFixed(4)
	 		   								}
	 		   							)
	 		   				}	 		   				
	 		   			} 		   		 		   		 		   	
 		   			}
 		   		} 		   	
 		   } 		
 		}
 		 		   						
		return aspects.sort( compareAspectsByPrecision );
	};
	
	/*
	* @private
 	* @param {double} point
 	* @param {double} toPoint
 	* @param {Array} aspects; [DEGREE, ORBIT]
	 */
	function hasAspect(point, toPoint, aspect){
		var result = false;
		
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}
		
		var orbitMin = aspect["degree"] - (aspect["orbit"] / 2);
		var orbitMax = aspect["degree"] + (aspect["orbit"] / 2);
		
		if(orbitMin <= gap && gap <= orbitMax){											
			result = true;
		}
								
		return result;	
	}
	
	/*
	* @private 
 	* @param {Object} pointAngle
 	* @param {Object} toPointAngle
 	* @param {double} aspectDegree;
	 */
	function calcPrecision(point, toPoint, aspect){
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}			
		return Math.abs( gap - aspect);
	}
	
	/*
	 * Calculate direction of aspect
	 * whether the transiting planet is approaching or is falling
	 * @private
	 * 
	 * //TODO
	 * This method is tested, and for tests gives the right results. 
	 * But the code is totally unclear. It needs to be rewritten.
	 * @param {double} aspect - aspect degree; for example 90.	
	 * @param {double} toPoint - angle of standing point
	 * @param {double} point - angle of transiting planet
	 * @return {boolean}
	 */
	function isTransitPointApproachingToAspect(aspect, toPoint, point){
		
		if( (point - toPoint) > 0 ){
			
			if((point - toPoint) > astrology.utils.radiansToDegree( Math.PI)){
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}			
		}else{
			
			if((toPoint - point) > astrology.utils.radiansToDegree( Math.PI)){
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}										
		}
		
		var _point = point;
		var _toPoint = toPoint;
		
		var difference = _point - _toPoint;
		
		if( Math.abs( difference ) > astrology.utils.radiansToDegree( Math.PI)){			
			_point = toPoint;
			_toPoint = point;
		}
							
		return (_point - _toPoint < 0);				
	}
	
	/*
	 * Aspects comparator
	 * by precision
	 * @private
	 * @param {Object} a 
	 * @param {Object} b 
	 */
	function compareAspectsByPrecision( a , b ) {		
		return a.precision - b.precision;								
	}
		
}( window.astrology = window.astrology || {}));

// ## Zodiac ###################################
(function( astrology ) {
	
	// Zodiac
	var SIGNS_ARIES 		= 1;
	var SIGNS_TAURUS 		= 2;
	var SIGNS_GEMINI 		= 3;
	var SIGNS_CANCER 		= 4;
	var SIGNS_LEO 			= 5;
	var SIGNS_VIRGO 		= 6;
	var SIGNS_LIBRA 		= 7;
	var SIGNS_SCORPIO 		= 8;
	var SIGNS_SAGITTARIUS 	= 9;
	var SIGNS_CAPRICORN 	= 10;
	var SIGNS_AQUARIUS 		= 11;
	var SIGNS_PISCES 		= 12;
    
	/**
	 * Zodiac
	 * 
	 * Gives the position of points in the zodiac.
	 * Position of point in the zodiac.
	 * Position of point in houses.
	 * Dignities of planets.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Array} cusps - cusprs in zodiac; [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
	 * @param {Object | null } settings
	 */
	astrology.Zodiac = function( cusps, settings){
		
		if(cusps == null){
			throw new Error( "Param 'cusps' must not be empty." );
		}
		
		if( !( Array.isArray(cusps) && cusps.length == 12) ){
			throw new Error( "Param 'cusps' is not 12 length Array." );
		}
		
		this.cusps = cusps;
		this.settings = settings || {}; 
						
		return this;
	};
	
	/**
	 * Get astrological sign
	 * 1 - Arise, ... , 12 - Pisces
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ } 
	 */
	astrology.Zodiac.prototype.getSign = function( point ){
		var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);											
		return Math.floor((angle  / 30) + 1);			
	};
	
	/**
	 * Is retrograde
	 * 
 	 * @param {double} speed
 	 * @return {boolean}
	 */
	astrology.Zodiac.prototype.isRetrograde = function( speed ){
		return speed < 0;
	};
	 
	 /**
	 * Get house number
	 * 1 - 12
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ }
	 */
	 astrology.Zodiac.prototype.getHouseNumber = function( point ){
	 	var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);	
	 	
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if(angle >= this.cusps[i] && angle < this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i + 1;
	 		}
	 	}
	 	
	 	// cusp passes over zero
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if( this.cusps[i] > this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i+1;
	 		}	
	 	}
	 		 	
		throw new Error( "Oops, serious error in the method: 'astrology.Zodiac.getHouseNumber'." );
	 };
	 
	 /**
	  * Calculate dignities of planet
	  *   
	  * r - Rulership 
	  * d - Detriment  
	  * e - Exaltation  
	  * E - Exalatation - Exact exaltation
	  * f - Fall 
	  *  
 	  * @param {Object} planet, { name:"Sun", position:60.2 }
 	  * @param {Array<Object> | null } exactExaltation - list of named angles, [{ name:"Sun", position:278, orbit:2 }, { name:"Moon", position:3, , orbit:2 }]
 	  * @return {Array<String>}
	  */
	 astrology.Zodiac.prototype.getDignities = function( planet, exactExaltation ){
	 	if(!(planet && planet.name && planet.position != null)){
	 		return [];
	 	}
	 	
	 	var result = [];	 	
	 	var sign = this.getSign(planet.position);
	 		 		 
	 	var position = planet.position % astrology.utils.radiansToDegree( 2 * Math.PI);
	 	
	 	switch ( planet.name ) {
		  case astrology.SYMBOL_SUN:
		  		
		  		if(sign == SIGNS_LEO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_AQUARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_MOON:
		  		
		  		if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CAPRICORN){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_MERCURY:
		  		
		  		if(sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_SAGITTARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_VENUS:
		  		
		  		if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_MARS:
		  		
		  		if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_JUPITER:
		  		
		  		if(sign == SIGNS_SAGITTARIUS || sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_GEMINI || sign == SIGNS_VIRGO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_SATURN:
		  		
		  		if(sign == SIGNS_CAPRICORN || sign == SIGNS_AQUARIUS){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CANCER || sign == SIGNS_LEO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_URANUS:
		  		
		  		if(sign == SIGNS_AQUARIUS ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_LEO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_NEPTUNE:
		  		
		  		if(sign == SIGNS_PISCES ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_VIRGO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LEO || sign == SIGNS_SAGITTARIUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_AQUARIUS || sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_PLUTO:
		  		
		  		if(sign == SIGNS_SCORPIO ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES ){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		     
		    
		    
		    
		  default:		    
		    break;
		}
									
		if( exactExaltation != null && Array.isArray(exactExaltation)){			
			for(var i = 0, ln = exactExaltation.length; i < ln; i++){
				if(planet.name == exactExaltation[i].name){					
					if( hasConjunction( planet.position, exactExaltation[i].position, exactExaltation[i].orbit)){
						result.push(astrology.DIGNITIES_EXACT_EXALTATION);		
					}								
				}				
			}
		}
			 		 		 		 		 
	 	return result;
	 };
	 
	  /*
	 * To hours:minutes:seconds
	 * @param {Double} d
	 * @return {String}
	 */
	 astrology.Zodiac.prototype.toDMS = function ( d ) {  
	 	d += 0.5/3600./10000.;	// round to 1/1000 of a second
		var deg = parseInt(d);
		d = (d - deg) * 60;
		var min = parseInt(d);
		d = (d - min) * 60;
		var sec = parseInt(d);
		
		return deg + "° " + min + "' " + sec;
	 };
	 
	 /*
	  * Has conjunction with point
	  * 
	  * @private
	  * 
	  * @param {Double} planetPosition
 	  * @param {Double} poitPosition
 	  * @param {Integer} orbit
 	  * @return {boolean}
	  */
	 function hasConjunction(planetPosition, pointPosition, orbit){
	 	var result = false;
	 		 		 		
			var minOrbit = (pointPosition - orbit/2) < 0 ?
				astrology.utils.radiansToDegree( 2 * Math.PI) - (pointPosition - orbit/2) : 
				pointPosition - orbit/2;
				
			var maxOrbit = (pointPosition + orbit/2) >= astrology.utils.radiansToDegree( 2 * Math.PI) ?
				(pointPosition + orbit/2) - astrology.utils.radiansToDegree( 2 * Math.PI) :
				(pointPosition + orbit/2);
			
			if( minOrbit > maxOrbit){ //crossing over zero
			
				if( minOrbit >= planetPosition && planetPosition <= minOrbit){
					result = true;
				}
									
			}else{
				
				if( minOrbit <= planetPosition && planetPosition <= maxOrbit){
					result = true;
				}				
			}				 						
								 		 		 	
	 	return result;
	 };
	 
	
	 					 
}( window.astrology = window.astrology || {}));

// ## Timer ###################################
(function( astrology ) {
		   
	/**
	 * Timer
	 * 
	 * Animation timer
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 */
	astrology.Timer = function( callback ){
						
		if(typeof callback !== "function"){
			throw new Error( "param 'callback' has to be a function." );
		}				
						
		this.callback = callback;				
		this.boundTick_ = this.tick.bind(this); 
										
		return this;
	};
	
	astrology.Timer.prototype.start = function(){	
		if (!this.requestID_){
			this.lastGameLoopFrame = new Date().getTime();	
			this.tick();	
			if( astrology.DEBUG ) console.log("[astrology.Timer] start"); 
		}
	};
	
	astrology.Timer.prototype.stop = function(){	
		if(this.requestID_){    		
			window.cancelAnimationFrame( this.requestID_ );	
			this.requestID_ = undefined;
			if(astrology.DEBUG) console.log("[astrology.Timer] stop");
		}	
	};
	
	astrology.Timer.prototype.isRunning = function(){
		return this.requestID_ ? true : false;
	};
	
	astrology.Timer.prototype.tick = function(){	
		var now = new Date().getTime(); 				
		this.requestID_ = window.requestAnimationFrame( this.boundTick_ );		
		this.callback( now - this.lastGameLoopFrame );		
		this.lastGameLoopFrame = now;				
	};
	 					 
}( window.astrology = window.astrology || {}));
// ## Animator ###################################
(function( astrology ) {
	
	var context;
			  
	/**
	 * Transit chart animator
	 * 
	 * Animates the object on a circle.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Object} from, {"Sun":[12], "Moon":[60]}
	 * @param {Object} to, {"Sun":[30], "Moon":[180]}
	 * @param {Object} settings, {cx:100, cy:100, radius:200, prefix:"astro-chart-"}
	 */
	astrology.Animator = function( transit ){
		
		this.transit = transit;
		
		// Copy data
		this.actualPlanetPos = {};
		for(var planet in this.transit.data.planets){
			this.actualPlanetPos[planet] = this.transit.data.planets[planet];
		}
										
		this.timer = new astrology.Timer( this.update.bind(this) );
		
		// time, passed since the start of the loop
		this.timeSinceLoopStart = 0;
		
		context = this;
									
		return this;
	};
		
	/**
	 * Animate objects
	 
	 * @param {Object} data, targetPositions 
 	 * @param {Integer} duration - seconds
 	 * @param {boolean} isReverse 
 	 * @param {Function} callbck - start et the end of animation
	 */
	astrology.Animator.prototype.animate = function( data, duration, isReverse, callback){
		this.data = data;		 			
		this.duration = duration * 1000;
		this.isReverse = isReverse || false;					
		this.callback = callback; 
		
		this.rotation = 0;				
		this.cuspsElement = document.getElementById(astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		deltaTime = deltaTime || 1; //									
		this.timeSinceLoopStart += deltaTime;					
		if (this.timeSinceLoopStart >= this.duration) {
			this.timer.stop();					
								
			if( typeof this.callback  === "function"){
				this.callback();	
			}
			
			return;					
		}
									
		var expectedNumberOfLoops = (this.duration - this.timeSinceLoopStart) < deltaTime ? 
							1 :		
		 					Math.round( (this.duration - this.timeSinceLoopStart) / deltaTime);		
						 											 
		updatePlanets( expectedNumberOfLoops );
		updateCusps( expectedNumberOfLoops );														
	};
	
	/*
	 * @private
	 */
	function updateCusps( expectedNumberOfLoops ){	
		
		var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI);							
		var targetCuspAngle = context.transit.data.cusps[0] - context.data.cusps[0];					
					
		if( targetCuspAngle < 0 ){
			targetCuspAngle += deg360; 		
		}
						
		// speed
		if(  astrology.ANIMATION_CUSPS_ROTATION_SPEED > 0 ){
			targetCuspAngle += (context.isReverse)?
		 		-1 * ((astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360) + deg360) :
				astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360;
		}
																																													
		var difference = (context.isReverse) ? 
			context.rotation - targetCuspAngle : 
			targetCuspAngle - context.rotation;
								
		// zero crossing
		if( difference < 0 ){
			difference += deg360; 		
		}
			 				
		var increment = difference /  expectedNumberOfLoops;
						
		if(context.isReverse){
			increment *= -1; 				
		}						
		context.rotation += increment;
														 
		context.cuspsElement.setAttribute("transform", "rotate(" + context.rotation + " " + context.transit.cx + " " + context.transit.cy +")");
					
		if( expectedNumberOfLoops == 1){
			context.cuspsElement.removeAttribute("transform");
		}								
	};
	
	/*
	 * @private
	 */
	function updatePlanets( expectedNumberOfLoops ){
		
		for(var planet in context.data.planets){
			var actualPlanetAngle = context.actualPlanetPos[planet][0]; 		
			var targetPlanetAngle = context.data.planets[planet][0];
			var isRetrograde = context.actualPlanetPos[planet][1] != null && context.actualPlanetPos[planet][1] < 0;
								
			var difference;
			if( context.isReverse && isRetrograde){
				difference = targetPlanetAngle - actualPlanetAngle;
			
			}else if( context.isReverse || isRetrograde ){
				difference = actualPlanetAngle - targetPlanetAngle;
								
			}else{
				difference = targetPlanetAngle - actualPlanetAngle;
			}
																
			// zero crossing
			if( difference < 0 ){
				difference += astrology.utils.radiansToDegree( 2 * Math.PI); 		
			}
			
			var increment = difference /  expectedNumberOfLoops;
																																								
			if(context.isReverse){
				increment *= -1; 				
			}
			
			if(isRetrograde){
				increment *= -1; 
			}
			
			var newPos = actualPlanetAngle + increment;
			if( newPos < 0 ){
				newPos += astrology.utils.radiansToDegree( 2 * Math.PI);
			}
			
			context.actualPlanetPos[planet][0] = newPos;										
		}
								
		context.transit.drawPoints( context.actualPlanetPos );		
	}
						 		
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
	 * Calculates positions of the point description
	 * 
	 * @param {Object} point
	 * @param {Array<String>} texts
	 * 
	 * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
	 */
	astrology.utils.getDescriptionPosition = function( point, texts ){
		var RATION = 1.4;
		var result = [];		
		var posX = point.x + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE)  ;
		var posY = point.y - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		texts.forEach(function(text, idx){						
			result.push({text:text, x:posX, y:posY + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE * idx)});					
		}, this);
						
		return result;
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
			wrapper = document.createElementNS( document.getElementById( astrology._paperElementId ).namespaceURI, "g");
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
  		
  		//circle.radius has been set to astrology.COLLISION_RADIUS;
  		var totalRadii = circle1.r + circle2.r;
  		  		  		  		   		  		   	
		return magnitude <= totalRadii; 
	};
		
	/**
	 * Places a new point in the located list 
	 * 
 	 * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
 	 * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96} 
 	 * @param {Object} universe - current universe
 	 * @return {Array<Object>} locatedPoints 	 
	 */
	astrology.utils.assemble = function( locatedPoints, point, universe){
		
		// first item
		if(locatedPoints.length == 0){
			locatedPoints.push(point);
			return locatedPoints; //================>
		}
								
		if( (2 * Math.PI * universe.r) - ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2))  <= 0){							
			if( astrology.DEBUG ) console.log( "Universe circumference: " + (2 * Math.PI * universe.r) + ", Planets circumference: " + ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2)));							
			throw new Error("Unresolved planet collision. Try change SYMBOL_SCALE or paper size.");
		}
													
		var isCollision = false;				
		locatedPoints.sort( astrology.utils.comparePoints );
		for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
			
			if(astrology.utils.isCollision(locatedPoints[i], point)){
				isCollision = true;
				var locatedButInCollisionPoint =  locatedPoints[i];
				locatedButInCollisionPoint.index = i;
				
				if( astrology.DEBUG ) console.log( "Resolve collision: " + locatedButInCollisionPoint.name + " X " + point.name); 
												
				break;
			}
		}
						
		if( isCollision ){
			
			astrology.utils.placePointsInCollision(locatedButInCollisionPoint, point);
																																																																 						 										    				  			  																													
			var newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, locatedButInCollisionPoint.angle);
			locatedButInCollisionPoint.x = newPointPosition.x;
			locatedButInCollisionPoint.y = newPointPosition.y;
			
			newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, point.angle);
			point.x = newPointPosition.x;
			point.y = newPointPosition.y;
																		  		
			// remove locatedButInCollisionPoint from locatedPoints									
			locatedPoints.splice(locatedButInCollisionPoint.index, 1);
																
			// call recursive	
			locatedPoints = astrology.utils.assemble(locatedPoints, locatedButInCollisionPoint, universe);	
			locatedPoints = astrology.utils.assemble(locatedPoints, point, universe);	
														
		}else{
			locatedPoints.push(point);	
		}
		locatedPoints.sort( astrology.utils.comparePoints );									
		return locatedPoints;	
	};
	
	/**
	 * Sets the positions of two points that are in collision.
	 * 
	 * @param {Object} p1, {..., pointer:123, angle:456}
	 * @param {Object} p2, {..., pointer:23, angle:56}
	 */
	astrology.utils.placePointsInCollision = function(p1, p2){
		
		var step = 1;
		var adjustedP1Pointer = p1.pointer == undefined ? p1.angle : p1.pointer;
		var adjustedP2Pointer = p2.pointer == undefined ? p2.angle : p2.pointer;

		// solving problems with zero crossing
		if(Math.abs(adjustedP1Pointer - adjustedP2Pointer) > 180) {
			adjustedP1Pointer = (adjustedP1Pointer + 180) % 360
			adjustedP2Pointer = (adjustedP2Pointer + 180) % 360
		}
		
		if(adjustedP1Pointer <= adjustedP2Pointer){
			p1.angle = p1.angle - step;
			p2.angle = p2.angle + step;											
		} else if(adjustedP1Pointer >= adjustedP2Pointer)
		{
			p1.angle = p1.angle + step;
			p2.angle = p2.angle - step;	
		}
							
		p1.angle = (p1.angle + 360) % 360;
		p2.angle = (p2.angle + 360) % 360;		 					
	};
		
	/**
	 * Check collision between angle and object 
	 * 
 	 * @param {double} angle
 	 * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
 	 * @return {boolean} 	 
	 */
	astrology.utils.isInCollision = function(angle, points){		
		var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
		var collisionRadius = (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) / 2;
							
		var result = false;					
		for(var i = 0, ln = points.length; i < ln ; i++ ){
										
			if( Math.abs(points[i].angle - angle) <= collisionRadius || 
			(deg360 - Math.abs(points[i].angle - angle)) <= collisionRadius){
				result = true;
				break;
			}					
		}				
					
		return result;			
	};
		
	/**
	 * Calculates positions of the dashed line passing through the obstacle.
	 * 	* 
	 * @param {double} centerX
	 * @param {double} centerY
	 * @param {double} angle - line angle
 	 * @param {double} lineStartRadius
 	 * @param {double} lineEndRadius
 	 * @param {double} obstacleRadius 	
 	 * @param {Array<Object>} obstacles, [{x:456, y:456, r:60, angle:123}, ...]
 	 * 
 	 * @return {Array<Object>} [{startX:1, startY:1, endX:4, endY:4}, {startX:6, startY:6, endX:8, endY:8}]
	 */
	astrology.utils.getDashedLinesPositions = function( centerX, centerY, angle, lineStartRadius, lineEndRadius, obstacleRadius, obstacles){
		var startPos, endPos;
		var result = [];	
		
		if( astrology.utils.isInCollision( angle, obstacles)){
			
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle);			
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );
			
			// the second part of the line when is space
			if( (obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)) < lineEndRadius){
				startPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE),angle); 			
				endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);				
				result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} ); 														
			}					
								
		}else{
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );	
		}	
						
		return result;		
	};
	
	/**
	 * Calculate ruler positions.
	 * 
	 * @param {Double} centerX
	 * @param {Double} centerY
	 * @param {Double} startRadius
	 * @param {Double} endRadius
	 * @param {Boolean} startAngle
	 * 
	 * @return {Array<Object>} [ {startX:1,startY:2, endX:3, endX:4 }, ...]
	 */
	astrology.utils.getRulerPositions = function( centerX, centerY, startRadius, endRadius, startAngle ){	
		var result = [];
		
		var rayRadius = endRadius;
		var halfRayRadius = (startRadius <= endRadius) ? rayRadius - (Math.abs(endRadius-startRadius)/2): rayRadius + (Math.abs(endRadius-startRadius)/2); 
		
		for(var i = 0, start = 0, step = 5; i < 72; i++ ){ 
			    var angle = start + startAngle;
			    var startPos = astrology.utils.getPointPosition( centerX, centerY, startRadius, angle);
				var endPos = astrology.utils.getPointPosition( centerX, centerY, (i%2 == 0 ? rayRadius : halfRayRadius), angle);				
				result.push({startX:startPos.x,startY:startPos.y, endX:endPos.x, endY:endPos.y });				
				
				start += step;
		} 
												
		return result;		
	};
	
	/**
	* Compare two points
	* 
	* @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
	* @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
	* @return 
	*/
	astrology.utils.comparePoints = function( pointA, pointB){		
		return pointA.angle - pointB.angle; 			
	};
									
}( window.astrology = window.astrology || {}));