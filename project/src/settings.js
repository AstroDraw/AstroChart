const settings = {};

//Scale of symbols	 
settings.SYMBOL_SCALE = 1;
	
// BG color
settings.COLOR_BACKGROUND = "#fff";		 
			
// Color of planet's symbols
settings.POINTS_COLOR = "#000";

// Size of description text next to the planet: angle, retrograde, dignities, ...
settings.POINTS_TEXT_SIZE = 8;

// Points strength of lines
settings.POINTS_STROKE = 1.8;
	
// Font color of signs symbols
settings.SIGNS_COLOR = "#000"; 

// Signs strength of lines
settings.SIGNS_STROKE = 1.5;

// Chart margin
settings.MARGIN = 50; //px
	
// Chart Padding  
settings.PADDING = 18; //px

// Module wrapper element ID
settings.ID_CHART = "astrology";

// Radix chart element ID
settings.ID_RADIX = "radix";

// Transit chart element ID
settings.ID_TRANSIT = "transit";

// Aspects wrapper element ID
settings.ID_ASPECTS = "aspects";

// Aspects wrapper element ID
settings.ID_POINTS = "planets"; 

// Signs wrapper element ID
settings.ID_SIGNS = "signs"; 

// Circles wrapper element ID
settings.ID_CIRCLES = "circles";

// Axis wrapper element ID
settings.ID_AXIS = "axis";

// Cusps wrapper element ID
settings.ID_CUSPS = "cusps";
	
// Cusps wrapper element ID
settings.ID_RULER = "ruler";

// Background wrapper element ID
settings.ID_BG = "bg";

// Color of circles in charts
settings.CIRCLE_COLOR = "#333";

// Circles strength of lines
settings.CIRCLE_STRONG = 2;

// Color of lines in charts
settings.LINE_COLOR = "#333";

// radius / INDOOR_CIRCLE_RADIUS_RATIO
settings.INDOOR_CIRCLE_RADIUS_RATIO = 2;

// radius - radius/INNER_CIRCLE_RADIUS_RATIO
settings.INNER_CIRCLE_RADIUS_RATIO = 8;

// ( radius / settings.INNER_CIRCLE_RADIUS_RATIO ) / settings.RULER_RADIUS 
settings.RULER_RADIUS = 4;
	
// Points
settings.SYMBOL_SUN = "Sun";
settings.SYMBOL_MOON = "Moon";
settings.SYMBOL_MERCURY = "Mercury";
settings.SYMBOL_VENUS = "Venus";
settings.SYMBOL_MARS = "Mars";
settings.SYMBOL_JUPITER = "Jupiter";
settings.SYMBOL_SATURN = "Saturn";
settings.SYMBOL_URANUS = "Uranus";
settings.SYMBOL_NEPTUNE = "Neptune";
settings.SYMBOL_PLUTO = "Pluto";
settings.SYMBOL_CHIRON = "Chiron";
settings.SYMBOL_LILITH = "Lilith";
settings.SYMBOL_NNODE = "NNode";

// Axis
settings.SYMBOL_AS = "As";
settings.SYMBOL_DS = "Ds";
settings.SYMBOL_MC = "Mc";
settings.SYMBOL_IC = "Ic";
	
settings.SYMBOL_AXIS_FONT_COLOR = "#333";
settings.SYMBOL_AXIS_STROKE = 1.6;
	
// Cusps
settings.SYMBOL_CUSP_1 = "1";
settings.SYMBOL_CUSP_2 = "2";
settings.SYMBOL_CUSP_3 = "3";
settings.SYMBOL_CUSP_4 = "4";
settings.SYMBOL_CUSP_5 = "5";
settings.SYMBOL_CUSP_6 = "6";
settings.SYMBOL_CUSP_7 = "7";
settings.SYMBOL_CUSP_8 = "8";
settings.SYMBOL_CUSP_9 = "9";
settings.SYMBOL_CUSP_10 = "10";
settings.SYMBOL_CUSP_11 = "11";
settings.SYMBOL_CUSP_12 = "12";

// Cusps strength of lines
settings.CUSPS_STROKE = 1;
settings.CUSPS_FONT_COLOR = "#000";	

//Signs
settings.SYMBOL_ARIES = "Aries";
settings.SYMBOL_TAURUS = "Taurus";
settings.SYMBOL_GEMINI= "Gemini";
settings.SYMBOL_CANCER = "Cancer"; 
settings.SYMBOL_LEO = "Leo"; 
settings.SYMBOL_VIRGO = "Virgo"; 
settings.SYMBOL_LIBRA = "Libra";  
settings.SYMBOL_SCORPIO = "Scorpio";  
settings.SYMBOL_SAGITTARIUS = "Sagittarius";
settings.SYMBOL_CAPRICORN = "Capricorn"; 
settings.SYMBOL_AQUARIUS = "Aquarius"; 
settings.SYMBOL_PISCES = "Pisces";
settings.SYMBOL_SIGNS = [settings.SYMBOL_ARIES, settings.SYMBOL_TAURUS, settings.SYMBOL_GEMINI, settings.SYMBOL_CANCER, settings.SYMBOL_LEO, settings.SYMBOL_VIRGO, settings.SYMBOL_LIBRA, settings.SYMBOL_SCORPIO, settings.SYMBOL_SAGITTARIUS, settings.SYMBOL_CAPRICORN, settings.SYMBOL_AQUARIUS, settings.SYMBOL_PISCES];
			
// http://www.rapidtables.com/web/color/html-color-codes.htm
settings.COLOR_ARIES = "#FF4500";
settings.COLOR_TAURUS = "#8B4513";
settings.COLOR_GEMINI= "#87CEEB";
settings.COLOR_CANCER = "#27AE60"; 
settings.COLOR_LEO = "#FF4500"; 
settings.COLOR_VIRGO = "#8B4513"; 
settings.COLOR_LIBRA = "#87CEEB";  
settings.COLOR_SCORPIO = "#27AE60";  
settings.COLOR_SAGITTARIUS = "#FF4500";
settings.COLOR_CAPRICORN = "#8B4513"; 
settings.COLOR_AQUARIUS = "#87CEEB"; 
settings.COLOR_PISCES = "#27AE60"; 	        	
settings.COLORS_SIGNS = [settings.COLOR_ARIES, settings.COLOR_TAURUS, settings.COLOR_GEMINI, settings.COLOR_CANCER, settings.COLOR_LEO, settings.COLOR_VIRGO, settings.COLOR_LIBRA, settings.COLOR_SCORPIO, settings.COLOR_SAGITTARIUS, settings.COLOR_CAPRICORN, settings.COLOR_AQUARIUS, settings.COLOR_PISCES];

settings.CUSTOM_SYMBOL_FN = null

// 0 degree is on the West 
settings.SHIFT_IN_DEGREES = 180;

// No fill, only stroke
settings.STROKE_ONLY = false;

settings.ADD_CLICK_AREA = false;

// Planets collision circle radius for settings.SYMBOL_SCALE = 1
// Scaling changes the collision radius 
settings.COLLISION_RADIUS = 10; //px

// Aspects	
settings.ASPECTS = { 
	"conjunction":{"degree":0, "orbit":10, "color":"transparent"}, 
	"square":{"degree":90, "orbit":8, "color":"#FF4500"}, 
	"trine":{"degree":120, "orbit":8, "color":"#27AE60"},
	"opposition":{"degree":180, "orbit":10, "color":"#27AE60"}
	};	

// Dignities
settings.DIGNITIES_RULERSHIP = "r";			
settings.DIGNITIES_DETRIMENT = "d";			
settings.DIGNITIES_EXALTATION = "e";			
settings.DIGNITIES_EXACT_EXALTATION = "E";		
settings.DIGNITIES_FALL = "f";	

// Source: Aleister Crowley
settings.DIGNITIES_EXACT_EXALTATION_DEFAULT = [
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
settings.ANIMATION_CUSPS_ROTATION_SPEED = 2;

settings.DEBUG = false;

const default_settings = settings;
export default default_settings;
