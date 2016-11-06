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
	 *		"cups":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]
	 *	} 
	 */
	astrology.Chart.prototype.radix = function( data ){
		
		if( !isDataValid( data ) ) {
			throw new Error( "Source Data is not valid." );
		}
		
		var radix = new astrology.Radix(this.paper, this.cx, this.cy, this.radius);
		radix.drawUniverse();
		radix.drawPoints( data.points );
		radix.drawCusps(data.cusps);
		
		radix.drawSigns();
		radix.drawCircles();
	 };
	
	/**
	 * Display transit horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":0, "Sun":30,  ... },
	 *		"cups":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]
	 *	} 
	 */
	astrology.Chart.prototype.transit = function( data ){
		
		if( !isDataValid( data ) ) {
			throw new Error( "Source Data is not valid." );
		}
		
		//TODO
		throw new Error( "NotImplementedException." );
	
	};
	
	/*
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {boolean}
	 */
	function isDataValid(){
		// TODO
		return true;	
	};
         
}( window.astrology = window.astrology || {}));
