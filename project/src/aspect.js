// ## Transit chart ###################################
(function( astrology ) {
		
	var context;
    
	/**
	 * Aspects calculator
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {Object} radixData 
	 * @param {Object | null } transitData
	 * @param {Object | null } settings
	 */
	astrology.AspectCalculator = function( radixData, transitData, settings ){
		
		this.settings = settings || {};
		this.settings.type = settings.type || TRANSIT_TYPE;
		
		this.radix = radixData;
		this.transit = transitData;
				
		if( !this.transit ){
			this.transit = radixData;
			this.settings.type = RADIX_TYPE;
		}
																																							
		context = this; 
												
		return this;
	};
	
	/**
 	* Radix to Radix calculation type
 	* @constant
 	* @type {String}
 	*/	
	astrology.AspectCalculator.RADIX_TYPE = "radixToRadix";
	
	/**
 	* Radix to Transit calculation type
 	* @constant
 	* @type {String}
 	*/	
	astrology.AspectCalculator.TRANSIT_TYPE = "radixToTransit";
				
	/**
	 * Calculate Aspects
	 * @public
	 * @return {Object} {"Sun":[ {"aspect":"conjunction", "degree":0, "precision":0.5, "transitPlanet":"Moon"}]}
	 */
	astrology.AspectCalculator.prototype.aspects = function(){
		
		switch ( this.settings.type ) {
	  		case astrology.AspectCalculator.TRANSIT_TYPE:
	    		return calculateRadixToTransit();
	    		break;
	  		
	  		case astrology.AspectCalculator.RADIX_TYPE:
	    		return calculateRadixToRadix();
	    		break;
	 
	 		default:
	    		throw new Error( "Unknown aspect type: " + this.settings.type );
		}	
	};
	
	/*
	 * @private
	 * @return {Object}
	 * @see astrology.Transit.prototype.aspects
	 */
	function calculateRadixToRadix(){
		return []
	}
	
	/*
	 * @private
	 * @return {Object}
	 * @see astrology.Transit.prototype.aspects
	 */
	function calculateRadixToTransit(){
		return []	
	}
	
}( window.astrology = window.astrology || {}));
