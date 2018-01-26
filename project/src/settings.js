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