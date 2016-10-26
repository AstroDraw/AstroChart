// ## CONSTANTS #############################
(function( astrology ) {
		
	/**
	 * Name of the root DOMElement ID
	 * @constant
	 * @type {String}
	 */
	astrology.ELEMENT_ID = "paper"; 
    
    	       
}( window.astrology = window.astrology || {}));
// ## CHART ###################################
(function( astrology ) {
    
	/**
	 * Displays astrology charts.
	 * 
	 * @class
	 * @public
	 * @constructor
	 * @param {Object} data 
	 */
	astrology.Chart = function( data ){	
	
		if (!document.getElementById( astrology.ELEMENT_ID )){
			var paper = document.createElement('div');
			paper.id = astrology.ELEMENT_ID;
			document.body.appendChild( paper );
		}
		
		if( !_isDataValid( data ) ) {
			throw new Error( "Source Data is not valid." );
		}
			
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
	
	/*
	 * Checks a source data
	 * @private
	 * @function
	 * @param {Object} data
	 * @return {boolean}
	 */
	function _isDataValid(){
		// TODO
		return true;	
	};
         
}( window.astrology = window.astrology || {}));

// ## UTILS #############################
(function( astrology ) {
	
	astrology.utils = {};
		
	astrology.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	astrology.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
				        	   
}( window.astrology = window.astrology || {}));