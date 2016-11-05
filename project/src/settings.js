// ## Settings #############################
(function( astrology ) {
	
	// 0 degree is on the West 
	astrology.SHIFT_IN_DEGREES = 180;
		 
	//Scale of symbols	 
	astrology.RADIX_SYMBOL_SCALE = 1;
	
	// Font color of planet's symbols
	astrology.COLOR_PLANETS = "#000";
	
	// Radix chart element ID
	astrology.RADIX_ID = "radix";
	
	// Radix chart element ID
	astrology.TRANSIT_ID = "transit";
	
	// Planets
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