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
			
		return this;
	};
	
	/**
	 * Calculate position of the point on the circle.
	 * 
	 * @param {int} cx - center x 
	 * @param {int} cy - center y
	 * @param {int} radius
	 * @param {double} angle - degree			
	 * 
	 * @return {Object} - {x:10, y:20}
	 */	
	astrology.Chart.prototype.getPointPosition = function( cx, cy, radius, angle ){
		var SHIFT_IN_DEGREES = 180;				
		var angleInRadius = (SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );					
		return {x:Math.round(xPos), y:Math.round(yPos)};
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
	 * Set source
	 * 	 
	 * @param {Object} data			
	 * @throws {InvalidDataException} 
	 */
	astrology.Chart.prototype.radix = function(){
		this.paper.universe( this.paper.width/2, this.paper.height/2, this.paper.height/2.5); // TODO	
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
