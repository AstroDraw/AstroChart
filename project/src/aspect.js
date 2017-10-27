// ## Transit chart ###################################
(function( astrology ) {
		
	var context;
    
	/**
	 * Aspects calculator
	 * 
	 * @class
	 * @public
	 * @constructor 	 
	 * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120, -0.2], "As":[30]}
	 * @param {Object | null } settings
	 */
	astrology.AspectCalculator = function( points, settings ){
		
		this.settings = settings || {}; 			
		this.points = points;
																																												
		context = this; 
												 
		return this;
	};
	
	/**
	 * Radix aspects
	 *
	 * @return {Array<Object>} [{"aspect":"conjunction", "point":"Sun", "toPoint":"Moon", "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.radix = function(){
		
		var aspects = [];
		
		for (var point in this.points) {
 		   if (this.points.hasOwnProperty( point )) {
 		   	 		   	 		   
 		   	for (var toPoint in this.points) {
 		   		if (this.points.hasOwnProperty( toPoint )) { 		   			 		   			 		   		
 		   			if( point != toPoint){ 		   				 		   			 		   			 		   
	 		   			for(var aspect in astrology.ASPECTS){ 		   				
	 		   				if(hasAspect( this.points[point], this.points[toPoint], astrology.ASPECTS[aspect])){
	 		   						
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":aspect, 
	 		   								"precision":calcPrecision(this.points[point], this.points[toPoint], astrology.ASPECTS[aspect]), 
	 		   								"point":point, 
	 		   								"toPoint":toPoint
	 		   								}
	 		   							)
	 		   				}
	 		   				
	 		   			}
 		   			} 		   		 		   						 
 		   		} 		   		
 		   	} 		   	 		   	 		  
 		   } 		
 		}
		 
		return aspects;
	}; 
			
	/**
	 * Transit aspects
	 *
	 * @return {Array<Object>} [{"aspect":"conjunction", "point":"Sun", "toPoint":"Moon", "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.transit = function( transitData ){		
		return [{a:1}];
	};
	
	/*
	* @private
 	* @param {double} point
 	* @param {double} toPoint
 	* @param {Array} aspects; [DEGREE, ORBIT]
	 */
	function hasAspect(point, toPoint, aspect){
		return true;	
	}
	
	/*
	* @private 
 	* @param {Object} point; [ANGLE, SPEED]
 	* @param {Object} toPoint; [ANGLE, SPEED]
 	* @param {Array} aspect;  [DEGREE, ORBIT]
	 */
	function calcPrecision(point, toPoint, aspect){
		return 0.1;
	}
		
}( window.astrology = window.astrology || {}));


