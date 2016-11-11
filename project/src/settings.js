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
	
	// Chart margin
	astrology.MARGIN = 50; //px
		
	// Chart PAdding
	astrology.PADDING = 10; //px
	
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
	
	// Opacity of colors in chart
	astrology.COLOR_OPACITY = 0.8;
		       	      
}( window.astrology = window.astrology || {}));