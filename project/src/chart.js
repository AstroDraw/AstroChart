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
		this.radius = this.paper.height/2.5;
			
		return this;
	};
	
	/**
	 * Display radix horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":{"position":0}, "Sun":{"position":30},  ... },
	 *		"cups":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]
	 *	} 
	 */
	astrology.Chart.prototype.radix = function( data ){
		
		if( !isDataValid( data ) ) {
			throw new Error( "Source Data is not valid." );
		}
		this.radixData = data;
		
		this.paper.radixUniverse( this.cx, this.cy, this.radius);
		
		// Planets can not be displayed on the same radius.
		// The gap between indoor circle and outdoor circle / count of planets
		var margin = 10 * astrology.RADIX_SYMBOL_SCALE;
		var radiusStep = Math.round((( (this.radius - this.radius/8) - margin) - (this.radius/2)) / (Object.keys(this.radixData.points).length) );
		var planetRadius = this.radius/2 + margin;							
		for (var planet in this.radixData.points) {
 		   if (this.radixData.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius , this.radixData.points[planet].position);
        		this.paper.drawSymbol(planet, position.x, position.y, this.paper.root.getElementById( astrology.RADIX_ID ));
        		planetRadius += radiusStep;
    		}
		}		
	};
	
	/**
	 * Display transit horoscope
	 * 
	 * @param {Object} data
	 * @example
	 *	{
	 *		"points":{"Moon":{"position":0}, "Sun":{"position":30},  ... },
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
