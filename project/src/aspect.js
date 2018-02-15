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
		
		if(toPoints == null){
			throw new Error( "Param 'toPoint' must not be empty." );
		}
		
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
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
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
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision": calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]).toFixed(4)
	 		   								}
	 		   							)
	 		   				}
	 		   				
	 		   			}
 		   			} 		   		 		   						 
 		   		} 		   		
 		   	} 		   	 		   	 		  
 		   } 		
 		}
 		 		 		  		 		 
		return aspects.sort( compareAspectsByPrecision );
	}; 
			
	/**
	 * Transit aspects
	 *
	 * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]}; 
	 * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
	 */
	astrology.AspectCalculator.prototype.transit = function( points ){	
		if(!points){
			return []; 
		}
		
		var aspects = [];
		
		for (var point in points) {
 		   if (points.hasOwnProperty( point )) { 		   	
 		   		for (var toPoint in this.toPoints) {
 		   			if (this.toPoints.hasOwnProperty( toPoint )) {
 		   		
 		   				for(var aspect in this.settings.aspects){ 		   				
	 		   				if(hasAspect( points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect])){	 
	 		   					
	 		   					var precision = calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.aspects[aspect]["degree"]);
	 		   					
	 		   					// -1 : is approaching to aspect
	 		   					// +1 : is moving away
	 		   					if(isTransitPointApproachingToAspect( this.settings.aspects[aspect]["degree"], this.toPoints[toPoint][0], points[point][0] )){
	 		   						precision *= -1;
	 		   					}
	 		   					
	 		   					// if transit has speed value && transit is retrograde
	 		   					if(points[point][1] && points[point][1] < 0 ){ 
	 		   						precision *= -1;
	 		   					}
	 		   						 		   						 		   						 		   							   				
	 		   					aspects.push(
	 		   								{
	 		   								"aspect":{"name":aspect, "degree":this.settings.aspects[aspect].degree, "orbit":this.settings.aspects[aspect].orbit, "color":this.settings.aspects[aspect].color}, 	 		   								 
	 		   								"point":{"name":point, "position":points[point][0]}, 
	 		   								"toPoint":{"name":toPoint, "position":this.toPoints[toPoint][0]},
	 		   								"precision":precision.toFixed(4)
	 		   								}
	 		   							)
	 		   				}	 		   				
	 		   			} 		   		 		   		 		   	
 		   			}
 		   		} 		   	
 		   } 		
 		}
 		 		   						
		return aspects.sort( compareAspectsByPrecision );
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
		
		if( gap > astrology.utils.radiansToDegree( Math.PI)){
			gap = astrology.utils.radiansToDegree( 2 * Math.PI) - gap;
		}			
		return Math.abs( gap - aspect);
	}
	
	/*
	 * Calculate direction of aspect
	 * whether the transiting planet is approaching or is falling
	 * @private
	 * 
	 * //TODO
	 * This method is tested, and for tests gives the right results. 
	 * But the code is totally unclear. It needs to be rewritten.
	 * @param {double} aspect - aspect degree; for example 90.	
	 * @param {double} toPoint - angle of standing point
	 * @param {double} point - angle of transiting planet
	 * @return {boolean}
	 */
	function isTransitPointApproachingToAspect(aspect, toPoint, point){
		
		if( (point - toPoint) > 0 ){
			
			if((point - toPoint) > astrology.utils.radiansToDegree( Math.PI)){
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}			
		}else{
			
			if((toPoint - point) > astrology.utils.radiansToDegree( Math.PI)){
				toPoint = (toPoint + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}else{
				point = (point + aspect) % astrology.utils.radiansToDegree( 2 * Math.PI);
			}										
		}
		
		var _point = point;
		var _toPoint = toPoint;
		
		var difference = _point - _toPoint;
		
		if( Math.abs( difference ) > astrology.utils.radiansToDegree( Math.PI)){			
			_point = toPoint;
			_toPoint = point;
		}
							
		return (_point - _toPoint < 0);				
	}
	
	/*
	 * Aspects comparator
	 * by precision
	 * @private
	 * @param {Object} a 
	 * @param {Object} b 
	 */
	function compareAspectsByPrecision( a , b ) {		
		return a.precision - b.precision;								
	}
		
}( window.astrology = window.astrology || {}));
