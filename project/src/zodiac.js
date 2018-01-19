// ## Zodiac ###################################
(function( astrology ) {
	
	// Zodiac
	var SIGNS_ARIES 		= 1;
	var SIGNS_TAURUS 		= 2;
	var SIGNS_GEMINI 		= 3;
	var SIGNS_CANCER 		= 4;
	var SIGNS_LEO 			= 5;
	var SIGNS_VIRGO 		= 6;
	var SIGNS_LIBRA 		= 7;
	var SIGNS_SCORPIO 		= 8;
	var SIGNS_SAGITTARIUS 	= 9;
	var SIGNS_CAPRICORN 	= 10;
	var SIGNS_AQUARIUS 		= 11;
	var SIGNS_PISCES 		= 12;
    
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
	 
	 /**
	  * Calculate dignities of planet
	  *   
	  * r - Rulership 
	  * d - Detriment  
	  * e - Exaltation  
	  * E - Exalatation - Exact exaltation
	  * f - Fall 
	  *  
 	  * @param {Object} planet, { name:"Sun", position:60.2 }
 	  * @param {Array<Object> | null } exactExaltation - list of named angles, [{ name:"Sun", position:278, orbit:2 }, { name:"Moon", position:3, , orbit:2 }]
 	  * @return {Array<String>}
	  */
	 astrology.Zodiac.prototype.getDignities = function( planet, exactExaltation ){
	 	if(!(planet && planet.name && planet.position != null)){
	 		return [];
	 	}
	 	
	 	var result = [];	 	
	 	var sign = this.getSign(planet.position);
	 		 		 
	 	var position = planet.position % astrology.utils.radiansToDegree( 2 * Math.PI);
	 	
	 	switch ( planet.name ) {
		  case astrology.SYMBOL_SUN:
		  		
		  		if(sign == SIGNS_LEO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_AQUARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_MOON:
		  		
		  		if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CAPRICORN){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_MERCURY:
		  		
		  		if(sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_SAGITTARIUS){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;	
		    
		    case astrology.SYMBOL_VENUS:
		  		
		  		if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_VIRGO){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_MARS:
		  		
		  		if(sign == SIGNS_ARIES || sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS || sign == SIGNS_LIBRA){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_JUPITER:
		  		
		  		if(sign == SIGNS_SAGITTARIUS || sign == SIGNS_PISCES){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_GEMINI || sign == SIGNS_VIRGO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_CANCER){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_CAPRICORN){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break; 
		    
		    case astrology.SYMBOL_SATURN:
		  		
		  		if(sign == SIGNS_CAPRICORN || sign == SIGNS_AQUARIUS){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_CANCER || sign == SIGNS_LEO){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_ARIES){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_URANUS:
		  		
		  		if(sign == SIGNS_AQUARIUS ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_LEO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_SCORPIO){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_TAURUS){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_NEPTUNE:
		  		
		  		if(sign == SIGNS_PISCES ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_VIRGO ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_LEO || sign == SIGNS_SAGITTARIUS){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_AQUARIUS || sign == SIGNS_GEMINI){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		    
		    case astrology.SYMBOL_PLUTO:
		  		
		  		if(sign == SIGNS_SCORPIO ){
					result.push(astrology.DIGNITIES_RULERSHIP);
				
				}else if(sign == SIGNS_TAURUS ){										
					result.push(astrology.DIGNITIES_DETRIMENT);
				}
											
				if( sign == SIGNS_ARIES ){
					result.push(astrology.DIGNITIES_EXALTATION);	
																						
				}else if(sign == SIGNS_LIBRA){
					result.push(astrology.DIGNITIES_FALL);
				}
																				  		  		  	
		    break;
		     
		    
		    
		    
		  default:		    
		    break;
		}
									
		if( exactExaltation != null && Array.isArray(exactExaltation)){			
			for(var i = 0, ln = exactExaltation.length; i < ln; i++){
				if(planet.name == exactExaltation[i].name){					
					if( hasConjunction( planet.position, exactExaltation[i].position, exactExaltation[i].orbit)){
						result.push(astrology.DIGNITIES_EXACT_EXALTATION);		
					}								
				}				
			}
		}
			 		 		 		 		 
	 	return result;
	 };
	 
	  /*
	 * To hours:minutes:seconds
	 * @param {Double} d
	 * @return {String}
	 */
	 astrology.Zodiac.prototype.toDMS = function ( d ) {  
	 	d += 0.5/3600./10000.;	// round to 1/1000 of a second
		var deg = parseInt(d);
		d = (d - deg) * 60;
		var min = parseInt(d);
		d = (d - min) * 60;
		var sec = parseInt(d);
		
		return deg + "° " + min + "' " + sec;
	 };
	 
	 /*
	  * Has conjunction with point
	  * 
	  * @private
	  * 
	  * @param {Double} planetPosition
 	  * @param {Double} poitPosition
 	  * @param {Integer} orbit
 	  * @return {boolean}
	  */
	 function hasConjunction(planetPosition, pointPosition, orbit){
	 	var result = false;
	 		 		 		
			var minOrbit = (pointPosition - orbit/2) < 0 ?
				astrology.utils.radiansToDegree( 2 * Math.PI) - (pointPosition - orbit/2) : 
				pointPosition - orbit/2;
				
			var maxOrbit = (pointPosition + orbit/2) >= astrology.utils.radiansToDegree( 2 * Math.PI) ?
				(pointPosition + orbit/2) - astrology.utils.radiansToDegree( 2 * Math.PI) :
				(pointPosition + orbit/2);
			
			if( minOrbit > maxOrbit){ //crossing over zero
			
				if( minOrbit >= planetPosition && planetPosition <= minOrbit){
					result = true;
				}
									
			}else{
				
				if( minOrbit <= planetPosition && planetPosition <= maxOrbit){
					result = true;
				}				
			}				 						
								 		 		 	
	 	return result;
	 };
	 
	
	 					 
}( window.astrology = window.astrology || {}));
