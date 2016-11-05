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
	 * Draw radix Universe
 	 * @param {int} cx
 	 * @param {int} cy
 	 * @param {int} radius
	 */
	astrology.SVG.prototype.radixUniverse = function( cx, cy, radius ){		
		var universe = document.createElementNS(this.root.namespaceURI, "g");
		universe.setAttribute('id', astrology.ID_RADIX);
		
		// signs
        for( var i = 0, step = 30, start = 0, len = astrology.COLORS_SIGNS.length; i < len; i++ ){        	        	                	
        	universe.appendChild( segment( cx, cy, radius, start, start+step, radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, astrology.COLORS_SIGNS[i]));        	        	        	               		
			start += step;
        }
         
        //outdoor circle
        universe.appendChild( circle( cx, cy, radius, astrology.COLOR_CIRCLE));
       	
       	//inner circle
        universe.appendChild( circle( cx, cy, radius-radius/astrology.INNER_CIRCLE_RADIUS_RATIO, astrology.COLOR_CIRCLE) );
        
        //indoor circle
       	universe.appendChild( circle( cx, cy, radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO, astrology.COLOR_CIRCLE));
        
        // lines
        var lineLength = 3;
        for( i = 0, start = 0, step = 5;i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( cx, cy, radius, start );
        	var endPosition = astrology.utils.getPointPosition( cx, cy, radius + lineLength, start );
       		universe.appendChild( line( startPosition.x, startPosition.y, endPosition.x, endPosition.y, astrology.COLOR_CIRCLE));
       		start += step;
       	}
       	
       	this.root.appendChild( universe );						
	};
	
	/**
	 * Draw a required symbol. 
	 * 
	 * @param {String} name
	 * @param {int} x
	 * @param {int} y
	 * @param {GroupSVGElement} universe
	 */
	astrology.SVG.prototype.drawSymbol = function( name, x, y, universe){		
		
		switch(name) {
			case astrology.SYMBOL_SUN:		        
		        universe.appendChild( sun( x, y) );		        
		        break;
		    case astrology.SYMBOL_MOON:		        
		        universe.appendChild( moon( x, y) );		        
		        break;
		   case astrology.SYMBOL_MERCURY:		        
		        universe.appendChild( mercury( x, y) );		        
		        break;     
		    case astrology.SYMBOL_VENUS:		        
		        universe.appendChild( venus( x, y) );		        
		        break;	
		    case astrology.SYMBOL_MARS:		        
		        universe.appendChild( mars( x, y) );		        
		        break;
		    case astrology.SYMBOL_JUPITER:		        
		        universe.appendChild( jupiter( x, y) );		        
		        break;
		    case astrology.SYMBOL_SATURN:		        
		        universe.appendChild( saturn( x, y) );		        
		        break; 
		    case astrology.SYMBOL_URANUS:		        
		        universe.appendChild( uranus( x, y) );		        
		        break;
		    case astrology.SYMBOL_NEPTUNE:		        
		        universe.appendChild( neptune( x, y) );		        
		        break;
		    case astrology.SYMBOL_PLUTO:		        
		        universe.appendChild( pluto( x, y) );		        
		        break;
		    case astrology.SYMBOL_CHIRON:		        
		        universe.appendChild( chiron( x, y) );		        
		        break;
		    case astrology.SYMBOL_LILITH:		        
		        universe.appendChild( lilith( x, y) );		        
		        break;
		     case astrology.SYMBOL_NNODE:		        
		        universe.appendChild( nnode( x, y) );		        
		        break;                                  	  
		    default:
		    	var unknownPoint = circle(x, y, 8, "#ffff00");
		    	unknownPoint.setAttribute("fill", "#ff0000");
		    	return universe.appendChild( unknownPoint );	 
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
	 * Draw circular sector
	 * @private
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
	function segment( x, y, radius, a1, a2, thickness, color){
									            	 	            	
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
	
	/*
	 * Draw line in circle
	 * @private
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
	function line( x1, y1, x2, y2, color, style){
									            	 	            		
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
	
	/*
	 * Draw a circle
	 * @private
	 * 
	 * @param {int} cx
	 * @param {int} cy
	 * @param {int} radius
	 * @param {String} color - HTML rgb
	 * 
	 * @return {SVGElement} circle
	 */  
	function circle( cx, cy, radius, color){						            	 	            		
		var circle = document.createElementNS( context.root.namespaceURI, "circle");
		circle.setAttribute("cx", cx);	
  	    circle.setAttribute("cy", cy);
		circle.setAttribute("r", radius);				
		circle.setAttribute("stroke", color);		 
		circle.setAttribute("stroke-width", 1);
		circle.setAttribute("fill", "none");
		return circle;
	};
	
								    	 
}( window.astrology = window.astrology || {}));