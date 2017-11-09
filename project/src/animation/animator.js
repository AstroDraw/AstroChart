// ## Animator ###################################
(function( astrology ) {
			  
	/**
	 * Transit chart animator
	 * 
	 * Animates the object on a circle.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Object} from, {"Sun":[12], "Moon":[60]}
	 * @param {Object} to, {"Sun":[30], "Moon":[180]}
	 * @param {Object} settings, {cx:100, cy:100, radius:200, prefix:"astro-chart-"}
	 */
	astrology.Animator = function( transit ){
		
		this.transit = transit;
		
		// Copy data
		this.actualPlanetPos = {};
		for(var planet in this.transit.data.planets){
			this.actualPlanetPos[planet] = this.transit.data.planets[planet];
		}
										
		this.timer = new astrology.Timer( this.update.bind(this) );
		
		// time, passed since the start of the loop
		this.timeSinceLoopStart = 0;
									
		return this;
	};
		
	/**
	 * Animate objects
	 
	 * @param {Object} data, targetPositions 
 	 * @param {Integer} duration - seconds
 	 * @param {boolean} isReverse 
 	 * @param {Function} callbck - start et the end of animation
	 */
	astrology.Animator.prototype.animate = function( data, duration, isReverse, callback){
		this.data = data;		 			
		this.duration = duration * 1000;
		this.isReverse = isReverse || false;					
		this.callback = callback; 
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		this.timeSinceLoopStart += deltaTime;	
		
		if (this.timeSinceLoopStart >= this.duration) {
			this.timer.stop();					
								
			if( typeof this.callback  === "function"){
				this.callback();	
			}
			
			return;					
		}
									
		var expectedNumberOfLoops = (this.duration - this.timeSinceLoopStart) < deltaTime ? 
							1 :		
		 					Math.round( (this.duration - this.timeSinceLoopStart) / deltaTime);		
		
		for(var planet in this.data.planets){
			var actualPlanetAngle = this.actualPlanetPos[planet][0]; 		
			var targetPlanetAngle = this.data.planets[planet][0];
			var isRetrograde = this.actualPlanetPos[planet][1] != null && this.actualPlanetPos[planet][1] < 0;
								
			var difference;
			if( this.isReverse && isRetrograde){
				difference = targetPlanetAngle - actualPlanetAngle;
			
			}else if( this.isReverse || isRetrograde ){
				difference = actualPlanetAngle - targetPlanetAngle;
								
			}else{
				difference = targetPlanetAngle - actualPlanetAngle;
			}	
							
			// zero crossing			
			var increment = difference < 0 ?			
				(astrology.utils.radiansToDegree( 2 * Math.PI) -  Math.abs(difference) ) /  expectedNumberOfLoops :
				difference /  expectedNumberOfLoops;
			
			
			if(this.isReverse){
				increment *= -1; 
			}
																
			if(isRetrograde){
				increment *= -1; 
			}
													
			var newPos = (actualPlanetAngle + increment) < 0 ? 
				astrology.utils.radiansToDegree( 2 * Math.PI) - Math.abs(actualPlanetAngle + increment) :
				actualPlanetAngle + increment;
												
			this.actualPlanetPos[planet][0] = newPos;							
		}
								
		this.transit.drawPoints( this.actualPlanetPos );											
	};
						 		
}( window.astrology = window.astrology || {}));
