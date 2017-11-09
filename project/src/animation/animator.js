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
 	 * @param {Function} callbck - start et the end of animation
	 */
	astrology.Animator.prototype.animate = function( data, duration, callback){
		this.data = data;		 			
		this.duration = duration * 1000;		
		this.callback = callback; 
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		this.timeSinceLoopStart += deltaTime;	
		
		if (this.timeSinceLoopStart >= this.duration) {
			this.timer.stop();
			
			this.transit.reset();
			this.transit.data = this.data;
			this.transit.drawPoints();		
			this.transit.drawCusps();
			
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
			
			// TODO retrograde, reverse, zero pass trough
			var increment = (targetPlanetAngle - actualPlanetAngle < 0) ?			
				(astrology.utils.radiansToDegree( 2 * Math.PI) - ( actualPlanetAngle - targetPlanetAngle) ) /  expectedNumberOfLoops :
				(targetPlanetAngle - actualPlanetAngle) /  expectedNumberOfLoops;
			
			this.actualPlanetPos[planet][0] = actualPlanetAngle + increment;					
		}
								
		this.transit.drawPoints( this.actualPlanetPos );											
	};
						 		
}( window.astrology = window.astrology || {}));
