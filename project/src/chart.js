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
		//this.paper.root.appendChild( this.paper.getSymbol("Lilith", this.cx - this.radius, this.cy));										
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
