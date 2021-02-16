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
