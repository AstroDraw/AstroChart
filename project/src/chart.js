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
	 * @param {String} background
	 */
	astrology.Chart = function( elementId, width, height, background ){
		
		if (elementId && !document.getElementById( elementId )){
			var paper = document.createElement('div');
			paper.id = elementId;
			document.body.appendChild( paper );
		}
										
		this.paper = new astrology.SVG( elementId, width, height, background ); 
		this.cx = this.paper.width/2;
		this.cy = this.paper.height/2;
		this.radius = this.paper.height/2.5;
			
		return this;
	};
			
	/**
	 * Set source
	 * 	 
	 * @param {Object} data			
	 * @throws {InvalidDataException} 
	 */
	astrology.Chart.prototype.setData = function( data ){
		
		if( !_isDataValid( data ) ) {
			throw new Error( "Source Data is not valid." );
		}
		
		this.data = data;
	};
	
	/**
	 * Display radix horoscope	 
	 */
	astrology.Chart.prototype.radix = function(){
		this.paper.universe( this.cx, this.cy, this.radius);
		
		// Planets can not be displayed on the same radius.
		// Gaps between indoor circle and outdoor circle / count of planets
		var margin = 10;
		var radiusStep = Math.round((( (this.radius - this.radius/8) - margin) - (this.radius/2)) / (Object.keys(this.data.radix.points).length) );
		var planetRadius = this.radius/2 + margin;							
		for (var planet in this.data.radix.points) {
 		   if (this.data.radix.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius , this.data.radix.points[planet].position);
        		this.paper.drawSymbol(planet, position.x, position.y);
        		planetRadius += radiusStep;
    		}
		}		
	};
	
	/*
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {boolean}
	 */
	function _isDataValid(){
		// TODO
		return true;	
	};
         
}( window.astrology = window.astrology || {}));
