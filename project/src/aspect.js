// ## Transit chart ###################################
(function( astrology ) {
		
	var context;
    
	/**
	 * Aspects calculator
	 * 
	 * @class
	 * @public
	 * @constructor 	 
	 * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
	 * @param {Object | null } settings
	 */
	astrology.AspectCalculator = function( toPoints, settings ){
		
		this.settings = settings || {}; 		
		this.settings.aspects = settings && settings.aspects || astrology.ASPECTS;
							
		this.toPoints = toPoints;
																																												
		context = this; 
												 
		return this;
	};
	
	/**
	 * Getter for this.toPoints
	 * @see constructor
	 * 
	 * @return {Object} 
	 */
	astrology.AspectCalculator.prototype.getToPoints = function(){
		return this.this.toPoints;
	};
	
	/**
	 * Radix aspects
	 * 
	 * In radix calculation is the param "points" the same as param "toPoints" in constructor 
	 * , but without special points such as: As,Ds, Mc, Ic, ...
	 * 
	 * @param {Object} points; {"Sun":[0], "Moon":[90]}
	 * 
	 * @return {Array<Object>} [{"aspect":"conjunction", "point":"Sun", "toPoint":"Moon", "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.radix = function( points ){
		if(!points){
			return []; 
		}
							
		var aspects = [];			
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) {
 		   	 		   	 		   
 		   	for (var toPoint in this.toPoints) {
 		   		if (this.toPoints.hasOwnProperty( toPoint )) { 		   			 		   			 		   		
 		   			
 		   			if( point != toPoint){ 		   				 		   			 		   			 		   
	 		   			for(var aspect in this.settings.aspects){ 		   				
	 		   				if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect])){
	 		   						
	 		   					aspects.push(
	 		   								{
	 		   								"name":aspect, 
	 		   								"precision":calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]), 
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
		var result = false;
		
		var gap = Math.abs( point - toPoint );
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}
		
		var orbitMin = aspect["degree"] - (aspect["orbit"] / 2);
		var orbitMax = aspect["degree"] + (aspect["orbit"] / 2);
		
		if(orbitMin <= gap && gap <= orbitMax){											
			result = true;
		}
								
		return result;	
	}
	
	/*
	* @private 
 	* @param {Object} pointAngle
 	* @param {Object} toPointAngle
 	* @param {double} aspectDegree;
	 */
	function calcPrecision(point, toPoint, aspect){
		var gap = Math.abs( point - toPoint );		
		return Math.abs( gap - aspect);
	}
		
}( window.astrology = window.astrology || {}));
