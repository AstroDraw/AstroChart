// ## Settings #############################
(function( astrology ) {
	
	//Scale of symbols	 
	astrology.SYMBOL_SCALE = 1;		 
	
	// Font size in chart
	astrology.FONT_SIZE = 12; //px
	
	// Font color in chart
	astrology.FONT_COLOR = "#333";
	
	// Font color of planet's symbols
	astrology.COLOR_POINTS = "#000";
	
	// Font color of signs symbols
	astrology.COLOR_SIGNS = "#333";
	
	// Chart margin inside paper
	astrology.MARGIN_CHART = 5; //px
	
	// Planets margin inside a chart
	astrology.MARGIN_POINTS = 10;
	
	// Radix chart element ID
	astrology.ID_RADIX = "radix";
	
	// Transit chart element ID
	astrology.ID_TRANSIT = "transit";
	
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
	astrology.COLOR_ARIES = "#FF0000";
	astrology.COLOR_TAURUS = "#8B4513";
	astrology.COLOR_GEMINI= "#87CEEB";
	astrology.COLOR_CANCER = "#006400"; 
	astrology.COLOR_LEO = "#FF0000"; 
	astrology.COLOR_VIRGO = "#8B4513"; 
	astrology.COLOR_LIBRA = "#87CEEB";  
	astrology.COLOR_SCORPIO = "#006400";  
	astrology.COLOR_SAGITTARIUS = "#FF0000";
	astrology.COLOR_CAPRICORN = "#8B4513"; 
	astrology.COLOR_AQUARIUS = "#87CEEB"; 
	astrology.COLOR_PISCES = "#006400"; 	        	
	astrology.COLORS_SIGNS = [astrology.COLOR_ARIES, astrology.COLOR_TAURUS, astrology.COLOR_GEMINI, astrology.COLOR_CANCER, astrology.COLOR_LEO, astrology.COLOR_VIRGO, astrology.COLOR_LIBRA, astrology.COLOR_SCORPIO, astrology.COLOR_SAGITTARIUS, astrology.COLOR_CAPRICORN, astrology.COLOR_AQUARIUS, astrology.COLOR_PISCES];
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
	
	// Opacity of colors in chart
	astrology.COLOR_OPACITY = 0.8;
		       	      
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
				
		this.root = svg;
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
		    	var unknownPoint = circle(x, y, 8, "#ffff00");
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
	 * @return {SVGPathElement} path
	 */
	function sun( x, y ){
		
		// center symbol
		var xShift = -10; //px						
		var yShift = 0; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " a 9.0000174,9.0000174 0 1 1 0,0.05 z m 1.500004,0 a 7.5000145,7.5000145 0 1 0 0,-0.05 z m 5.50001,0 a 2.0000038,2.0000038 0 1 0 0,-0.05 z");
		node.setAttribute("fill", astrology.COLOR_POINTS);			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " a 8.4375221,8.4375221 0 0 1 0,16.125042 8.4375221,8.4375221 0 1 0 0,-16.125042 z");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " 5.98096,0 m -2.99048,-4.18668 0,7.17716 m 5.60312,-25.45723 c -0.29561,3.06543 -3.02026,5.31081 -6.08568,5.0152 -2.65855,-0.25638 -4.76198,-2.36189 -5.01572,-5.02069 m 12.10122,11.7064 c 0,3.64673 -2.95626,6.60298 -6.60298,6.60298 -3.64672,0 -6.60298,-2.95625 -6.60298,-6.60298 0,-3.64672 2.95626,-6.60298 6.60298,-6.60298 3.64672,0 6.60298,2.95626 6.60298,6.60298 z");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var xShift = 4; //px						
		var yShift = 6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " -6.851145,0 m 3.425573,3.605865 0,-8.221373 a 6.5987339,6.5987339 0 1 1 0.03606,0");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var yShift = -6; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " a 6.9578018,6.9578018 0 1 0 1.140623,1.140623 z m 0,0 0.570311,0.570312 6.273428,-6.273428 m -5.132804,0 h 5.132804 v 5.132804");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var xShift = -6; //px						
		var yShift = -3; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " c -0.46434,0 -1.39302,-0.43333 -1.39302,-2.16668 0,-1.73335 1.85737,-3.4667 3.71473,-3.4667 1.85736,0 3.71472,1.30001 3.71472,4.33337 0,3.03336 -2.3217,7.80007 -6.96511,7.80007 m 13.00154,0 -13.46588,0 m 10.67984,-12.56678 0,16.90016");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var yShift = 9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + "  c -0.57499,0.57498 -1.14997,1.14997 -1.72495,1.14997 -0.57498,0 -1.72495,-0.57499 -1.72495,-1.72495 0,-1.14997 0.57498,-2.29994 1.72495,-3.4499 1.14996,-1.14997 2.29993,-3.4499 2.29993,-5.74983 0,-2.29993 -1.14997,-4.59987 -3.4499,-4.59987 -2.17527,0 -4.02488,1.14997 -5.17484,3.4499 m -2.81331,-6.46856 6.8998,0 m -4.08649,-2.73117 0,16.67451");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var yShift = 0; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " c 0,0.47733 -0.38695,0.86428 -0.86427,0.86428 -0.47733,0 -0.86428,-0.38695 -0.86428,-0.86428 0,-0.47732 0.38695,-0.86427 0.86428,-0.86427 0.47732,0 0.86427,0.38695 0.86427,0.86427 z m 5.82563,0.10284 c 0,3.63818 -2.94703,6.58752 -6.58238,6.58752 -3.63535,0 -6.58238,-2.94934 -6.58238,-6.58752 0,-3.63819 2.94703,-6.58753 6.58238,-6.58753 3.63535,0 6.58238,2.94934 6.58238,6.58753 z m -9.75964,-11.3805 3.0182,-3.0858 3.08578,3.01822 m -2.99353,-3.31362 0,8.01818");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var xShift = 4; //px						
		var yShift = -9; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " 2.10136,-2.80457 2.75187,2.1416 m -11.05157,2.14707 2.42106,-2.52267 2.47527,2.46742 m -10.98543,-2.32925 2.77848,-2.10562 2.06605,2.83167 m -0.17775,13.3664 7.83463,0 m -3.91731,-14.47212 0,18.46443 m -5.87598,-19.46251 c -1.46899,9.98078 0.97934,11.47789 5.87598,11.47789 4.89664,0 7.34497,-1.49711 5.87597,-11.47789");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var xShift = 7; //px						
		var yShift = -7; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " c 0,3.91856 -3.17662,7.09517 -7.09517,7.09517 -3.91855,0 -7.09517,-3.17661 -7.09517,-7.09517 0,0 0,0 0,0 m 11.23402,0 c 0,2.28582 -1.85303,4.13885 -4.13885,4.13885 -2.28582,0 -4.13885,-1.85303 -4.13885,-4.13885 0,-2.28582 1.85303,-4.13884 4.13885,-4.13884 2.28582,0 4.13885,1.85302 4.13885,4.13884 z m -4.13883,17.14667 0,-10.05148 m -4.73011,5.32137 9.46023,0");				
		node.setAttribute("stroke", astrology.COLOR_POINTS);		 
		node.setAttribute("stroke-width", 1.8);
		node.setAttribute("fill", "none");			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var xShift = -1; //px						
		var yShift = 2; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " c -0.471552,0.479677 -0.707324,1.056912 -0.707317,1.731707 -7e-6,0.674797 0.235765,1.247967 0.707317,1.719512 0.479666,0.479674 1.056902,0.719511 1.731707,0.719512 0.674787,-10e-7 1.247957,-0.239838 1.719512,-0.719512 0.479664,-0.471545 0.719501,-1.044715 0.719512,-1.719512 -1.1e-5,-0.674795 -0.239848,-1.25203 -0.719512,-1.731707 -0.471555,-0.479672 -1.044725,-0.719509 -1.719512,-0.719513 -0.674805,4e-6 -1.252041,0.239841 -1.731707,0.719513 m 1.731707,6 c -1.17887,-3e-6 -2.191064,-0.418702 -3.036585,-1.256098 -0.837405,-0.837399 -1.256103,-1.845528 -1.256098,-3.02439 -5e-6,-1.18699 0.422759,-2.199184 1.268293,-3.036586 0.585359,-0.577231 1.25609,-0.955278 2.012195,-1.134146 l 0,-11.87805 2.097561,0 0,3.731708 3.573171,-2.109756 1.04878,1.804878 -4.378049,2.54878 4.378049,2.560976 -1.04878,1.804879 -3.573171,-2.121952 0,3.682927 c 0.723566,0.178868 1.369907,0.548786 1.939024,1.109756 0.845516,0.837402 1.26828,1.849596 1.268293,3.036586 -1.3e-5,1.178862 -0.422777,2.186991 -1.268293,3.02439 -0.83741,0.837396 -1.845539,1.256095 -3.02439,1.256098");
		node.setAttribute("fill", astrology.COLOR_POINTS);			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
		var yShift = -8; //px		
		x =  Math.round(x + (xShift * astrology.SYMBOL_SCALE));
		y =  Math.round(y + (yShift * astrology.SYMBOL_SCALE));
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " c 1.135466,-0.58799 2.417355,-0.8905 3.695099,-0.8721 0.596742,-0.007 1.194865,0.0732 1.768123,0.23714 -0.907544,0.20905 -1.784699,0.56313 -2.570685,1.0641 -1.473895,0.93931 -2.598771,2.41321 -3.116776,4.08234 -0.33889,1.09679 -0.425914,2.26217 -0.320472,3.40271 0.07828,0.84308 0.279492,1.67788 0.61608,2.45603 0.480248,1.10323 1.217426,2.09872 2.150756,2.85985 0.804403,0.66074 1.753847,1.13086 2.749798,1.42371 0.135833,0.0438 0.275809,0.0718 0.411181,0.11742 -0.353625,0.087 -0.709091,0.16989 -1.072846,0.20212 -0.996871,0.0893 -2.011699,-0.023 -2.96713,-0.32093 -0.0028,0.66627 -0.0014,1.333 -4.6e-4,1.99927 1.188877,-0.002 2.377295,-8.3e-4 3.565713,-8.3e-4 -0.0028,0.57971 0.0074,1.16033 -0.0051,1.73958 -1.187497,-0.005 -2.375454,-0.005 -3.562951,-4.6e-4 0.0032,1.25335 4.61e-4,2.50622 0.0014,3.75956 -0.587073,-0.002 -1.174604,0.004 -1.761677,-0.003 0.0051,-1.25289 0.0018,-2.5053 0.0014,-3.75865 -1.190259,0 -2.380519,-0.004 -3.57078,0.002 -0.0064,-0.57971 -9.16e-4,-1.15941 -0.0028,-1.73865 1.1898,4.6e-4 2.379599,-0.004 3.569398,0.002 0.01105,-0.9347 0.0041,-1.86987 0.0032,-2.80459 -0.920897,-0.54838 -1.746021,-1.2584 -2.415973,-2.0955 -0.52307,-0.65752 -0.963258,-1.38595 -1.254262,-2.17562 -0.306659,-0.82558 -0.457685,-1.70733 -0.446636,-2.58772 -0.006,-0.78092 0.116034,-1.56368 0.360532,-2.30546 0.343955,-1.05259 0.953129,-2.0071 1.711948,-2.80921 0.714616,-0.75052 1.541121,-1.40067 2.46386,-1.8754 z");				
		node.setAttribute("fill", astrology.COLOR_POINTS);			
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m" + x + ", " + y + " c -1.826415,0.465024 -3.435492,1.806878 -4.045588,3.614335 -0.39011,0.856318 -0.407146,1.827321 -0.129938,2.717635 0.248447,1.119565 0.852296,2.107234 1.563348,2.992816 0.897343,1.403764 0.953488,3.73206 -0.293751,4.647319 -0.912949,0.682418 -1.832712,-0.09382 -1.961825,-0.807695 -0.312057,-1.075335 0.554192,-2.573324 1.763446,-2.573255 0.377043,0.102147 0.785371,0.145635 0.234363,-0.217504 -0.755897,-0.516807 -1.850218,-0.430933 -2.597363,0.06748 -0.708711,0.479071 -0.992132,1.39518 -0.782396,2.20922 0.148081,0.970565 0.878933,1.777137 1.811288,2.064648 0.917823,0.352763 2.032787,0.302554 2.822798,-0.280135 1.168428,-0.635845 1.585083,-2.166691 1.406102,-3.448196 -0.222763,-0.958172 -0.470359,-1.796769 -1.053718,-2.845528 -0.978824,-1.475022 -1.672651,-3.615299 -0.812138,-5.193859 0.506284,-1.056755 1.782453,-1.983365 3.13027,-1.999065 1.188331,-0.138582 2.258126,0.567203 2.942007,1.414096 0.600435,0.7484 0.94009,1.895563 0.86811,2.891397 -0.04462,1.458586 -0.8931,2.91319 -1.618379,4.020215 -0.399208,0.782228 -0.466421,1.405389 -0.496097,2.291748 0.09534,1.189878 0.264818,2.325905 1.339875,2.898316 1.385752,0.804749 3.472447,0.415334 4.19722,-1.096997 0.528875,-1.066281 0.246551,-2.623874 -0.932988,-3.117235 -0.821765,-0.455696 -1.946939,-0.271946 -2.565651,0.44044 0.751662,0.01902 1.751957,-0.06792 2.08102,0.800141 0.455924,0.899815 0.431377,2.309836 -0.604459,2.795201 -0.862066,0.364441 -1.761559,-0.428937 -1.931935,-1.256854 -0.239806,-1.13735 -0.209547,-2.39535 0.36747,-3.43243 0.454259,-0.823827 1.17939,-1.478368 1.505829,-2.379422 0.727343,-1.634226 0.39696,-3.590747 -0.661196,-5.003367 -0.990728,-1.446017 -2.712061,-2.318122 -4.461721,-2.275197 -0.362198,-0.0039 -0.724433,0.01874 -1.084003,0.06172 z");				
		node.setAttribute("fill", astrology.COLOR_POINTS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " 0,-1.5125 c -10e-6,-1.19166 -0.25834,-3.31666 -0.775,-6.375 -0.23334,-1.44166 -0.61668,-2.94166 -1.15,-4.5 -0.54167,-1.58332 -1.10834,-2.82498 -1.7,-3.725 -0.45834,-0.68332 -1.00417,-1.02498 -1.6375,-1.025 -0.71667,2e-5 -1.21667,0.27502 -1.5,0.825 -0.25834,0.50835 -0.3875,1.06252 -0.3875,1.6625 0,1.26668 0.45416,2.41251 1.3625,3.4375 l -2.125,0 c -0.73334,-1.12499 -1.1,-2.31248 -1.1,-3.5625 0,-1.30832 0.35,-2.33332 1.05,-3.075 0.725,-0.76665 1.60416,-1.14998 2.6375,-1.15 1.33333,2e-5 2.37499,0.55002 3.125,1.65 0.84999,1.24168 1.55832,2.75002 2.125,4.525 0.39999,1.29168 0.73749,2.72084 1.0125,4.2875 0.27499,-1.56666 0.61249,-2.99582 1.0125,-4.2875 0.53332,-1.73332 1.24165,-3.24165 2.125,-4.525 0.74998,-1.09998 1.79165,-1.64998 3.125,-1.65 1.03332,2e-5 1.91248,0.38335 2.6375,1.15 0.69998,0.74168 1.04998,1.76668 1.05,3.075 -2e-5,1.25002 -0.36669,2.43751 -1.1,3.5625 l -2.125,0 c 0.90832,-1.02499 1.36248,-2.17082 1.3625,-3.4375 -2e-5,-0.59998 -0.12918,-1.15415 -0.3875,-1.6625 -0.28335,-0.54998 -0.78335,-0.82498 -1.5,-0.825 -0.63335,2e-5 -1.17918,0.34168 -1.6375,1.025 -0.59168,0.90002 -1.15835,2.14168 -1.7,3.725 -0.53335,1.55834 -0.91668,3.05834 -1.15,4.5 -0.51668,3.05834 -0.77501,5.18334 -0.775,6.375 l 0,1.5125 -1.875,0");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c -0.225,-0.53332 -0.54584,-1.00832 -0.9625,-1.425 -0.38334,-0.38332 -0.85417,-0.69998 -1.4125,-0.95 -0.48334,-0.21665 -1.0375,-0.32498 -1.6625,-0.325 l 0,-1.875 c 0.85833,2e-5 1.65,0.15419 2.375,0.4625 0.75833,0.32502 1.43333,0.77918 2.025,1.3625 0.6,0.59168 1.05833,1.27085 1.375,2.0375 0.22499,0.53335 0.54583,1.00835 0.9625,1.425 0.38332,0.38335 0.85416,0.70001 1.4125,0.95 0.48332,0.21668 1.03749,0.32501 1.6625,0.325 0.59999,1e-5 1.15416,-0.10832 1.6625,-0.325 0.53332,-0.22499 1.00415,-0.54165 1.4125,-0.95 0.41665,-0.41665 0.73748,-0.89165 0.9625,-1.425 0.31665,-0.76665 0.77498,-1.44582 1.375,-2.0375 0.59165,-0.58332 1.26665,-1.03748 2.025,-1.3625 0.72498,-0.30831 1.51665,-0.46248 2.375,-0.4625 l 0,1.875 c -0.62502,2e-5 -1.17919,0.10835 -1.6625,0.325 -0.55835,0.25002 -1.02918,0.56668 -1.4125,0.95 -0.41668,0.41668 -0.73752,0.89168 -0.9625,1.425 -0.31668,0.75835 -0.77502,1.43751 -1.375,2.0375 -0.29168,0.29168 -0.67085,0.58751 -1.1375,0.8875 0.46665,0.30001 0.84582,0.59584 1.1375,0.8875 0.59998,0.60001 1.05832,1.27918 1.375,2.0375 0.30832,0.75001 0.46248,1.55418 0.4625,2.4125 -2e-5,0.83334 -0.15418,1.625 -0.4625,2.375 -0.32502,0.76667 -0.78335,1.44584 -1.375,2.0375 -0.59168,0.58334 -1.26668,1.0375 -2.025,1.3625 -0.72501,0.30834 -1.51668,0.4625 -2.375,0.4625 -0.90001,0 -1.69168,-0.15416 -2.375,-0.4625 -0.79168,-0.35833 -1.46667,-0.8125 -2.025,-1.3625 -0.59167,-0.59166 -1.05,-1.27083 -1.375,-2.0375 -0.30834,-0.75 -0.4625,-1.54166 -0.4625,-2.375 0,-0.85832 0.15416,-1.66249 0.4625,-2.4125 0.33333,-0.80832 0.79166,-1.48749 1.375,-2.0375 0.35833,-0.34166 0.74166,-0.63749 1.15,-0.8875 -0.41667,-0.24999 -0.80001,-0.54582 -1.15,-0.8875 -0.58334,-0.56665 -1.04167,-1.24582 -1.375,-2.0375 m 7.4375,4.1875 c -0.50834,-0.21666 -1.06251,-0.32499 -1.6625,-0.325 -0.60001,1e-5 -1.15418,0.10834 -1.6625,0.325 -0.51668,0.23334 -0.98751,0.55001 -1.4125,0.95 -0.43334,0.45001 -0.75417,0.92501 -0.9625,1.425 -0.21667,0.52501 -0.32501,1.09168 -0.325,1.7 -10e-6,0.58334 0.10833,1.1375 0.325,1.6625 0.20833,0.5 0.52916,0.975 0.9625,1.425 0.42499,0.4 0.89582,0.71667 1.4125,0.95 0.50832,0.21667 1.06249,0.325 1.6625,0.325 0.59999,0 1.15416,-0.10833 1.6625,-0.325 0.51665,-0.23333 0.98749,-0.55 1.4125,-0.95 0.43332,-0.45 0.75415,-0.925 0.9625,-1.425 0.21665,-0.525 0.32498,-1.07916 0.325,-1.6625 -2e-5,-0.60832 -0.10835,-1.17499 -0.325,-1.7 -0.20835,-0.49999 -0.52918,-0.97499 -0.9625,-1.425 -0.42501,-0.39999 -0.89585,-0.71666 -1.4125,-0.95");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c 1.39165,0.19167 2.74998,0.45417 4.075,0.7875 l 0,1.8625 c -2.95002,-0.74166 -6.05835,-1.1125 -9.325,-1.1125 -3.26668,0 -6.375,0.37084 -9.325,1.1125 l 0,-1.8625 c 1.325,-0.33333 2.68333,-0.59583 4.075,-0.7875 l 0,-14.0625 c -1.39167,-0.19165 -2.75,-0.45415 -4.075,-0.7875 l 0,-1.8625 c 2.95,0.74169 6.05832,1.11252 9.325,1.1125 3.26665,2e-5 6.37498,-0.37081 9.325,-1.1125 l 0,1.8625 c -1.32502,0.33335 -2.68335,0.59585 -4.075,0.7875 l 0,14.0625 m -1.875,-13.8625 c -1.10835,0.0917 -2.23334,0.13752 -3.375,0.1375 -1.14168,2e-5 -2.26668,-0.0458 -3.375,-0.1375 l 0,13.6625 c 1.10832,-0.0917 2.23332,-0.1375 3.375,-0.1375 1.14166,0 2.26665,0.0458 3.375,0.1375 l 0,-13.6625");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c 3.49847,2.2999 7.9798,2.88699 12.0125,1.875 -1.66059,-1.11538 -1.75368,-3.62251 -0.64078,-5.15594 1.02276,-1.5711 3.36301,-2.20765 4.93157,-1.06938 1.79935,1.13495 2.35373,3.88166 0.97343,5.55063 -1.0646,1.41816 -2.87209,1.85597 -4.47085,2.38208 -4.23375,1.20478 -8.92842,0.70459 -12.80589,-1.38237 2e-5,-0.73334 -2e-5,-1.46668 2e-5,-2.20002 z m 13.6375,0.6875 c 0.99031,0.54306 2.50885,-0.3259 2.29279,-1.50819 -0.009,-0.99656 -0.72701,-2.31733 -1.85448,-2.22078 -1.55258,0.28532 -2.2148,2.74003 -0.7843,3.59611 0.1081,0.0607 0.22483,0.10629 0.34599,0.13286 z m 4.45,-6.675 c -3.49848,-2.29988 -7.97979,-2.88695 -12.0125,-1.875 1.74977,1.18032 1.76473,3.88512 0.4452,5.39485 -1.14287,1.57804 -3.67636,1.91326 -5.11186,0.54332 -1.59192,-1.30013 -1.85262,-3.93774 -0.44849,-5.47109 1.1411,-1.32328 2.93429,-1.69873 4.51924,-2.22807 4.14582,-1.13582 8.72841,-0.64238 12.50869,1.4169 0.21373,0.72318 0.0573,1.48044 0.0997,2.21909 z m -13.6375,-0.6875 c -0.9898,-0.54425 -2.50874,0.32459 -2.29292,1.50675 0.008,0.99596 0.72396,2.32003 1.85137,2.22382 1.55218,-0.28697 2.2152,-2.7386 0.78924,-3.5994 -0.10857,-0.0605 -0.22595,-0.10563 -0.34769,-0.13117 z");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c -0.32704,0.89209 0.011,2.07505 1.00625,2.34219 0.85086,0.21231 1.79248,-0.0204 2.41875,-0.64219 0.44167,0.44167 0.88333,0.88333 1.325,1.325 -0.96066,0.90247 -2.29049,1.42737 -3.61495,1.23686 -1.7588,-0.11803 -3.2224,-1.77189 -3.11005,-3.53686 -0.0248,-1.42517 0.76409,-2.68358 1.37299,-3.92036 0.69572,-1.21765 1.66115,-2.27529 2.18451,-3.5933 0.68243,-1.40252 0.83192,-3.17025 0.0534,-4.56329 -0.89468,-1.57566 -2.98023,-2.29944 -4.64843,-1.57305 -1.63349,0.66365 -2.62109,2.52575 -2.24375,4.25001 0.46112,1.7866 1.97845,3.19859 2.00298,5.12284 0.1703,2.19069 -1.93116,4.19774 -4.11392,3.89746 -2.05884,-0.1566 -3.68615,-2.25665 -3.31914,-4.29238 0.23234,-1.85784 2.03872,-3.35278 3.91133,-3.20293 -0.86301,-2.09166 -0.43054,-4.70107 1.225,-6.2875 1.83562,-1.91819 5.08938,-2.20194 7.21269,-0.59745 1.57088,1.07132 2.44547,2.97402 2.36231,4.85995 0.0765,1.89183 -0.89773,3.59052 -1.8447,5.15361 -0.86143,1.25999 -1.76373,2.53136 -2.1803,4.02139 z m -6.275,-5.1375 c -1.23886,-0.57286 -2.77969,0.58729 -2.57891,1.93516 0.0742,1.34966 1.80907,2.18943 2.90078,1.37422 1.25502,-0.77671 1.05013,-2.77821 -0.32187,-3.30938 z");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c 2.59723,-2.5223 3.43689,-6.5119 2.53053,-9.95443 -0.72556,-1.65651 -1.83788,0.32503 -2.05982,1.24822 -0.71964,2.09655 -0.40236,4.3329 -0.47071,6.50529 0,0.73364 0,1.46728 0,2.20092 z m -1.5,3.45 c -1.27103,0.70271 -2.6746,1.18885 -4.125,1.325 0,-0.62917 0,-1.25833 0,-1.8875 1.34404,-0.17807 2.63603,-0.68202 3.775,-1.4125 -0.0912,-4.6822 0.062,-9.36824 -0.0827,-14.04843 -0.19977,-1.03653 -0.11252,-2.69172 -1.26235,-3.09907 -1.06767,0.5251 -1.39925,1.88017 -1.90499,2.88347 -0.79596,2.2551 -0.45436,4.66899 -0.52491,7.01058 0,2.22198 0,4.44397 0,6.66595 -0.625,0 -1.25,0 -1.875,0 -0.0345,-4.4232 0.0732,-8.85021 -0.062,-13.27094 -0.16445,-1.04379 -0.0485,-3.227 -1.42274,-3.22278 -0.96776,0.66843 -1.29184,1.94938 -1.79757,2.96578 -0.72814,2.27934 -0.39886,4.69576 -0.46761,7.04837 0,2.15985 0,4.31971 0,6.47957 -0.625,0 -1.25,0 -1.875,0 -0.0363,-4.35697 0.0769,-8.71786 -0.065,-13.07229 -0.15998,-1.92797 -0.65613,-3.92286 -1.93494,-5.42771 0.64167,0 1.28333,0 1.925,0 0.85827,0.6841 1.27782,2.37848 1.58307,2.92075 0.48598,-1.33621 1.34784,-2.58519 2.58801,-3.31918 1.49621,-0.33797 2.2595,1.41128 2.73003,2.53188 0.0459,0.50422 0.41267,1.15619 0.52017,0.25054 0.64691,-1.22416 1.62834,-2.93079 3.20678,-2.81946 1.13191,0.45051 1.70704,1.69821 2.11232,2.77607 0.3594,1.19839 0.32811,2.46139 0.42211,3.6969 0.53071,-0.9533 1.53434,-2.46633 2.79507,-1.85918 1.01403,0.74235 1.26039,2.09136 1.60832,3.22696 0.99555,3.94395 0.0397,8.4253 -2.86477,11.35309 -0.72515,0.71396 -1.83488,1.27952 -0.97749,2.37957 0.21474,0.80025 1.21465,1.76992 1.37729,2.21206 -0.76697,0 -1.53394,0 -2.30091,0 -0.45359,-0.71569 -0.85802,-1.47217 -1.10008,-2.2875 z");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c -2.3791,0 -4.7583,0 -7.1375,0 0,-0.625 0,-1.25 0,-1.875 1.4333,0 2.8667,0 4.3,0 -1.7672,-2.14662 -1.5685,-5.5656 0.4094,-7.51152 2.0181,-2.18368 5.6309,-2.60558 8.0906,-0.93221 1.9873,1.21173 3.127,3.66116 2.674,5.95888 -0.059,0.88801 -0.8073,1.93084 -1.0232,2.48485 1.3998,0 2.7995,0 4.1992,0 0,0.625 0,1.25 0,1.875 -2.3833,0 -4.7667,0 -7.15,0 0,-0.625 0,-1.25 0,-1.875 1.5522,-0.77524 2.4993,-2.60555 2.1062,-4.31561 -0.4463,-2.16745 -2.7982,-3.58998 -4.9369,-3.22969 -2.116,0.24112 -3.9706,2.2508 -3.6865,4.43437 0.1215,1.32077 1.0054,2.48975 2.1547,3.11093 0,0.625 0,1.25 0,1.875 z m -7.1375,5.625 c 0,-0.625 0,-1.25 0,-1.875 6.2167,0 12.4333,0 18.65,0 0,0.625 0,1.25 0,1.875 -6.2167,0 -12.4333,0 -18.65,0 z");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c -2.10492,0.21427 -4.03434,-1.90932 -3.67478,-3.98178 -0.0738,-4.54848 0.16498,-9.10861 -0.15449,-13.64891 0.0718,-0.94457 -0.49432,-3.03553 -1.74105,-2.02742 -0.90909,0.80763 -1.05804,2.0923 -1.55214,3.1448 -0.5755,2.84178 -0.20359,5.75227 -0.30255,8.62724 0,1.44119 0,2.88238 0,4.32357 -0.625,0 -1.25,0 -1.875,0 -0.0753,-4.68692 0.16714,-9.38529 -0.15436,-14.06422 0.075,-0.94604 -0.48752,-3.04068 -1.73843,-2.03392 -0.91123,0.80734 -1.05995,2.09392 -1.55465,3.14733 -0.57551,2.84178 -0.2036,5.75227 -0.30256,8.62724 0,1.44119 0,2.88238 0,4.32357 -0.625,0 -1.25,0 -1.875,0 -0.0775,-4.6468 0.17276,-9.3044 -0.16106,-13.94341 -0.22644,-1.63414 -0.75515,-3.28249 -1.83893,-4.55659 0.64167,0 1.28333,0 1.925,0 0.99776,0.44736 0.8458,2.43678 1.72976,2.55085 0.53229,-1.21222 1.33993,-2.40672 2.57947,-2.97493 1.43136,-0.12222 2.18985,1.43215 2.54756,2.58632 0.49433,1.43299 0.80028,-0.63855 1.3002,-1.03502 0.53752,-0.80686 1.41036,-1.67276 2.45532,-1.52636 1.51158,0.5981 2.07719,2.34244 2.34025,3.81063 0.41838,2.90761 0.10759,5.85162 0.21103,8.7753 0.0129,2.31121 -0.0494,4.62789 0.0519,6.93556 0.31936,1.28731 2.95382,1.65841 2.46369,-0.13901 0.56158,-0.35118 0.96725,0.64058 1.43363,0.93247 0.42075,0.40306 0.84151,0.80613 1.26227,1.20919 -0.89167,0.85833 -1.78333,1.71667 -2.675,2.575 0,-0.54583 0,-1.09167 0,-1.6375 -0.23334,0 -0.46668,0 -0.70003,0 z");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " -6.75,6.75 3.3875,3.3875 -1.325,1.325 -3.3875,-3.3875 -4.425,4.425 -1.325,-1.325 4.425,-4.425 -3.3875,-3.3875 1.325,-1.325 3.3875,3.3875 6.7625,-6.7625 -5.1375,0 0,-1.875 8.325,0 0,8.325 -1.875,0 0,-5.1125");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " c -1.30322,-1.84066 -1.53456,-4.16908 -1.44542,-6.35956 -0.0166,-1.47834 -0.0602,-3.02921 -0.76392,-4.36797 -1.09794,-0.87671 -1.64432,1.10216 -2.11052,1.81481 -0.83211,1.64462 -0.92923,3.51484 -0.86764,5.32167 0,0.55118 0,1.10236 0,1.65355 -0.625,0 -1.25,0 -1.875,0 -0.0649,-2.40824 0.18478,-4.85224 -0.28194,-7.23139 -0.20203,-1.01066 -1.02389,-2.01529 -2.1444,-1.89426 -0.721,0.20395 -0.89348,-0.14332 -0.78616,-0.76911 0,-0.53508 0,-1.07017 0,-1.60526 1.23265,-0.0635 2.68956,0.007 3.49623,1.08937 0.64197,0.55633 0.98726,2.01186 1.22494,2.33007 0.51805,-1.39175 1.43454,-2.77061 2.83559,-3.37963 1.17336,-0.19763 1.83388,1.07072 2.34536,1.91556 0.90391,1.91955 0.72531,4.1082 0.7781,6.17316 0.0222,0.96732 0.12018,1.94932 0.46978,2.85897 0.73194,-1.99036 2.97445,-3.23646 5.05048,-2.79726 2.12144,0.37688 3.68917,2.61011 3.22499,4.7333 -0.32148,1.85972 -2.0303,3.36769 -3.9384,3.3361 -1.3529,0.0607 -2.73258,-0.36585 -3.78707,-1.22214 -0.69709,2.25039 -2.72881,4.08446 -5.11223,4.28502 -0.46233,-0.0533 -1.53331,0.38436 -1.33777,-0.39987 0,-0.47838 0,-0.95676 0,-1.43515 1.47626,0.15236 3.05553,-0.39739 3.89421,-1.66676 0.5121,-0.72242 0.8177,-1.56232 1.13079,-2.38322 z m 2.125,-0.4875 c 0.96936,1.23213 2.88115,1.93018 4.29654,1.05844 1.14719,-0.77558 1.28238,-2.65138 0.15334,-3.50875 -1.13109,-0.9534 -3.01281,-0.44744 -3.62939,0.86598 -0.33531,0.49297 -0.60866,1.02728 -0.82049,1.58433 z");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " -1.45,-2.5 -4.325,2.5 -0.9375,-1.6125 5.9625,-3.4375 1.4375,2.5 4.3375,-2.5 1.4375,2.5 4.3375,-2.5 2.375,4.1125 -1.625,0.9375 -1.45,-2.5 -4.325,2.5 -1.45,-2.5 -4.325,2.5 m 0,8 -1.45,-2.5 -4.325,2.5 -0.9375,-1.6125 5.9625,-3.4375 1.4375,2.5 4.3375,-2.5 1.4375,2.5 4.3375,-2.5 2.375,4.1125 -1.625,0.9375 -1.45,-2.5 -4.325,2.5 -1.45,-2.5 -4.325,2.5");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
				
		var node = document.createElementNS( context.root.namespaceURI, "path");
		node.setAttribute("d", "m " + x + ", " + y + " -3.925,0 c -0.10001,1.65001 -0.44584,3.18751 -1.0375,4.6125 -0.54167,1.30834 -1.32501,2.56667 -2.35,3.775 l -2.5875,0 c 1.525,-1.48333 2.59166,-2.98333 3.2,-4.5 0.49999,-1.23332 0.79583,-2.52916 0.8875,-3.8875 l -3.7125,0 0,-1.875 3.7125,0 c -0.0917,-1.35832 -0.38751,-2.65415 -0.8875,-3.8875 -0.61667,-1.51665 -1.68334,-3.02081 -3.2,-4.5125 l 2.5875,0 c 1.01666,1.20836 1.79999,2.47085 2.35,3.7875 0.59999,1.42502 0.94582,2.96252 1.0375,4.6125 l 3.925,0 c 0.0917,-1.64998 0.43749,-3.18748 1.0375,-4.6125 0.54998,-1.31665 1.33332,-2.57914 2.35,-3.7875 l 2.5875,0 c -1.51668,1.49169 -2.58335,2.99585 -3.2,4.5125 -0.50002,1.23335 -0.79585,2.52918 -0.8875,3.8875 l 3.5875,0 0,1.875 -3.5875,0 c 0.0916,1.35834 0.38748,2.65418 0.8875,3.8875 0.60832,1.51667 1.67498,3.01667 3.2,4.5 l -2.5875,0 c -1.02502,-1.20833 -1.80835,-2.46666 -2.35,-3.775 -0.59168,-1.44999 -0.93751,-2.98749 -1.0375,-4.6125");				
		node.setAttribute("fill", astrology.COLOR_SIGNS);		
		node.setAttribute("transform", "translate(" + ( -x * (astrology.SYMBOL_SCALE - 1)) + "," + (-y * (astrology.SYMBOL_SCALE - 1)) + ") scale(" + astrology.SYMBOL_SCALE + ")");									
		return node;
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
	 * @param {String} color - HTML rgb
	 * 
	 * @return {SVGElement} segment
	 *  
	 * @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 */  
	astrology.SVG.prototype.segment = function segment( x, y, radius, a1, a2, thickness, color){
									            	 	            	
	 	// @see SVG Path arc: https://www.w3.org/TR/SVG/paths.html#PathData
	 	var LARGE_ARC_FLAG = 0;
	 	var SWEET_FLAG = 0;
            	 	                
        a1 = ((astrology.SHIFT_IN_DEGREES - a1) % 360) * Math.PI / 180;
        a2 = ((astrology.SHIFT_IN_DEGREES - a2 ) % 360) * Math.PI / 180;
		
		var segment = document.createElementNS( context.root.namespaceURI, "path");
		segment.setAttribute("d", "M " + (x + thickness * Math.cos(a1)) + ", " + (y + thickness * Math.sin(a1)) + " l " + ((radius-thickness) * Math.cos(a1)) + ", " + ((radius-thickness) * Math.sin(a1)) + " A " + radius + ", " + radius + ",0 ," +  LARGE_ARC_FLAG + ", " + SWEET_FLAG + ", " + ( x + radius * Math.cos(a2) ) + ", " + ( y + radius * Math.sin(a2) ) + " l " + ( (radius-thickness)  * -Math.cos(a2) ) + ", " + ( (radius-thickness) * -Math.sin(a2) ) + " A " + thickness + ", " + thickness + ",0 ," +  LARGE_ARC_FLAG + ", " + 1 + ", " + ( x + thickness * Math.cos(a1) ) + ", " + ( y + thickness * Math.sin(a1)));
		segment.setAttribute("fill", color);		 
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
	 * @param {String} style - line style
	 * 
	 * @return {SVGElement} line
	 */  
	astrology.SVG.prototype.line = function line( x1, y1, x2, y2, color, style){
									            	 	            		
		var line = document.createElementNS( context.root.namespaceURI, "line");
		line.setAttribute("x1", x1);
		line.setAttribute("y1", y1);	
  	    line.setAttribute("x2", x2);
		line.setAttribute("y2", y2);				
		line.setAttribute("stroke", color);		 
		line.setAttribute("stroke-width", 1);
		
		if(style){
			line.setAttribute("stroke-dasharray", style);
		}
				
		return line;
	};
	
	/**
	 * Draw a circle
	 * 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius
	 * @param {String} color - HTML rgb
	 * 
	 * @return {SVGElement} circle
	 */  
	astrology.SVG.prototype.circle = function circle( cx, cy, radius, color){						            	 	            		
		var circle = document.createElementNS( context.root.namespaceURI, "circle");
		circle.setAttribute("cx", cx);	
  	    circle.setAttribute("cy", cy);
		circle.setAttribute("r", radius);				
		circle.setAttribute("stroke", color);		 
		circle.setAttribute("stroke-width", 1);
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
			paper.id = elementId;
			document.body.appendChild( paper );
		}
										
		this.paper = new astrology.SVG( elementId, width, height); 
		this.cx = this.paper.width/2;
		this.cy = this.paper.height/2;
		this.radius = this.paper.height/2 - astrology.MARGIN_CHART;
			
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
		var radix = new astrology.Radix(this.paper, this.cx, this.cy, this.radius, data);
		radix.drawUniverse();
		radix.drawCusps();		
		radix.drawSigns();
		radix.drawPoints();
		radix.drawAspects();
		radix.drawCircles();
		return radix;
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
        for( var i = 0, step = 30, start = this.shift, len = astrology.COLORS_SIGNS.length; i < len; i++ ){        	        	                	
        	
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
	 */
	astrology.Radix.prototype.drawPoints = function(){
		if(this.data.points == null){
			return;
		}
		
		var universe = this.universe;
		
		// Planets can not be displayed on the same radius.
		// The gap between indoor circle and outdoor circle / count of planets
		var margin = astrology.MARGIN_POINTS * astrology.SYMBOL_SCALE;
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
		var radiusStep = (gap - margin) / Object.keys(this.data.points).length;	
		var planetRadius = (this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO) + margin;
									
		for (var planet in this.data.points) {
 		   if (this.data.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius, this.data.points[planet] + this.shift);
        		universe.appendChild( this.paper.getSymbol(planet, position.x, position.y));
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
		
		var textRadius = this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO + (this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO) )/1.2;
		
		//Cusps
		for (var i = 0, ln = this.data.cusps.length; i < ln; i++) {
 			
 			// Lines
 			var bottomPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, this.data.cusps[i] + this.shift);
 			var topPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, this.data.cusps[i] + this.shift);
 		 	universe.appendChild( this.paper.line( bottomPosition.x, bottomPosition.y, topPosition.x, topPosition.y, astrology.COLOR_LINE, "5, 5"));
 		 	
 		 	// Text
 		 	var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
 		 	var startOfCusp = this.data.cusps[i];
 		 	var endOfCusp = this.data.cusps[ (i+1)%12 ];
 		 	var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
 		 	var textPosition = astrology.utils.getPointPosition( this.cx, this.cy, textRadius, ((startOfCusp + gap/2) % deg360) + this.shift  );
 		 	universe.appendChild( this.paper.text( i+1, textPosition.x, textPosition.y, astrology.FONT_SIZE + "px", astrology.FONT_COLOR ));
 		 	
 		 	// As
 		 	if(i == 0){
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, textRadius, this.data.cusps[i] + this.shift);
 		 		universe.appendChild( this.paper.text( "As", textPosition.x, textPosition.y, astrology.FONT_SIZE * 1.5 + "px", astrology.FONT_COLOR ));
 		 	}
 		 	
 		 	// Mc
 		 	if(i == 9){
 		 		textPosition = astrology.utils.getPointPosition( this.cx, this.cy, textRadius, this.data.cusps[i] + 2 + this.shift);
 		 		universe.appendChild( this.paper.text( "Mc", textPosition.x, textPosition.y, astrology.FONT_SIZE * 1.5 + "px", astrology.FONT_COLOR ));
 		 	}
		}
	};
	
	/**
	 * Draw aspects
	 */
	astrology.Radix.prototype.drawAspects = function(){
		if(this.data.aspects == null){
			return;
		}
		
		var universe = this.universe;
		
        for( var i = 0, len = this.data.aspects.length; i < len; i++ ){ 
        	var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, this.data.aspects[i][0] + this.shift);
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, this.data.aspects[i][1] + this.shift);
        	universe.appendChild( this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y, this.data.aspects[i][2]));
        }
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
	 * .
	 */
	astrology.Radix.prototype.drawCircles = function drawCircles(){
		var universe = this.universe;
		
		//outdoor circle
        universe.appendChild( this.paper.circle( this.cx, this.cy, this.radius, astrology.COLOR_CIRCLE));
       	
       	//inner circle
        universe.appendChild( this.paper.circle( this.cx, this.cy, this.radius-this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO, astrology.COLOR_CIRCLE));
        
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
	
	/**
	 * Scale chart
	 * 
	 * @param {int} factor 
	 */
	astrology.Radix.prototype.scale = function( factor ){			
		this.universe.setAttribute("transform", "translate(" + ( -this.cx * (factor - 1)) + "," + (-this.cy * (factor - 1)) + ") scale(" + factor + ")");		
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
		radix.drawUniverse();
		radix.drawCusps();		
		radix.drawSigns();
		radix.drawPoints();
		radix.drawAspects();
		radix.drawCircles();
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
		this.universe.setAttribute('id', astrology.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		context = this; 
		
		radix.scale(0.8); // TODO
									
		return this;
	};
	
	/**
	 * Draw universe.
	 */
	astrology.Transit.prototype.drawUniverse = function(){
		var universe = this.universe;		
	};
	
	/**
	 * Draw points
	 */
	astrology.Transit.prototype.drawPoints = function(){
		if(this.data.points == null){
			return;
		}
		
		var universe = this.universe;			
	};
	
	/**
	 * Draw cusps
	 */
	astrology.Transit.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;				
	};
	
	/**
	 * Draw aspects
	 */
	astrology.Transit.prototype.drawAspects = function(){
		if(this.data.aspects == null){
			return;
		}			
	};
	
	/**
	 * Draw signs symbols
	 * .
	 */
	astrology.Transit.prototype.drawSigns = function(){
		var universe = this.universe;			
	};
	
	/**
	 * Draw circles
	 * .
	 */
	astrology.Transit.prototype.drawCircles = function drawCircles(){
		var universe = this.universe;					
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
						        	 
}( window.astrology = window.astrology || {}));