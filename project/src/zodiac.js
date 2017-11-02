// ## Zodiac ###################################
(function( astrology ) {
    
	/**
	 * Zodiac
	 * 
	 * Gives the position of points in the zodiac.
	 * Position of point in the zodiac.
	 * Position of point in houses.
	 * Dignities of planets.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Array} cusps - cusprs in zodiac; [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
	 * @param {Object | null } settings
	 */
	astrology.Zodiac = function( cusps, settings){
		
		if(cusps == null){
			throw new Error( "Param 'cusps' must not be empty." );
		}
		
		if( !( Array.isArray(cusps) && cusps.length == 12) ){
			throw new Error( "Param 'cusps' is not 12 length Array." );
		}
		
		this.cusps = cusps;
		this.settings = settings || {}; 
						
		return this;
	};
	
	/**
	 * Get astrological sign
	 * 1 - Arise, ... , 12 - Pisces
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ } 
	 */
	astrology.Zodiac.prototype.getSign = function( point ){
		var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);											
		return Math.floor((angle  / 30) + 1);			
	};
	
	/**
	 * Is retrograde
	 * 
 	 * @param {double} speed
 	 * @return {boolean}
	 */
	astrology.Zodiac.prototype.isRetrograde = function( speed ){
		return speed < 0;
	};
	 
	 /**
	 * Get house number
	 * 1 - 12
	 * 
	 * @param {double} point - angle of point in circle
	 * @return { \[1-9] | 1[0-2]\ }
	 */
	 astrology.Zodiac.prototype.getHouseNumber = function( point ){
	 	var angle = point % astrology.utils.radiansToDegree( 2 * Math.PI);	
	 	
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if(angle >= this.cusps[i] && angle < this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i + 1;
	 		}
	 	}
	 	
	 	// cusp passes over zero
	 	for(var i = 0, ln = this.cusps.length; i < ln; i++){
	 		if( this.cusps[i] > this.cusps[ (i % (ln-1)) + 1 ]){
	 			return i+1;
	 		}	
	 	}
	 		 	
		throw new Error( "Oops, serious error in the method: 'astrology.Zodiac.getHouseNumber'." );
	 };
	
	
	
		 		  
}( window.astrology = window.astrology || {}));
