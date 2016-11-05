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
		this.radixData = data;
		
		this.paper.radixUniverse( this.cx, this.cy, this.radius);
		
		// Planets can not be displayed on the same radius.
		// The gap between indoor circle and outdoor circle / count of planets
		var margin = astrology.MARGIN_POINTS * astrology.SYMBOL_SCALE;
		var gap = this.radius - (this.radius/astrology.INNER_CIRCLE_RADIUS_RATIO + this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO);
		var radiusStep = (gap - margin) / Object.keys(this.radixData.points).length;	
		var planetRadius = (this.radius/astrology.INDOOR_CIRCLE_RADIUS_RATIO) + margin;
		
		console.log(gap);
		console.log(radiusStep);
									
		for (var planet in this.radixData.points) {
 		   if (this.radixData.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius , this.radixData.points[planet]);
        		this.paper.drawSymbol(planet, position.x, position.y, this.paper.root.getElementById( astrology.ID_RADIX ));
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
