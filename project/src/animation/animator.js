// ## Animator ###################################
(function( astrology ) {
	
	var context;
			  
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
		
		context = this;
									
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
		this.rotation = 0;
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		deltaTime = deltaTime || 1; //									
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
						 											 
		updatePlanets( expectedNumberOfLoops );
		updateCusps( expectedNumberOfLoops );														
	};
	
	/*
	 * @private
	 */
	function updateCusps( expectedNumberOfLoops ){				
		var groupElement = document.getElementById(astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);		
		
		context.rotation += (context.isReverse) ? expectedNumberOfLoops : -1 * expectedNumberOfLoops;
		context.rotation = context.rotation % 360;						 		
		groupElement.setAttribute("transform", "rotate(" + context.rotation + " " + context.transit.cx + " " + context.transit.cy +")");
					
		if( expectedNumberOfLoops == 1){
			groupElement.removeAttribute("transform");
		}								
	};
	
	/*
	 * @private
	 */
	function updatePlanets( expectedNumberOfLoops ){
		
		for(var planet in context.data.planets){
			var actualPlanetAngle = context.actualPlanetPos[planet][0]; 		
			var targetPlanetAngle = context.data.planets[planet][0];
			var isRetrograde = context.actualPlanetPos[planet][1] != null && context.actualPlanetPos[planet][1] < 0;
								
			var difference;
			if( context.isReverse && isRetrograde){
				difference = targetPlanetAngle - actualPlanetAngle;
			
			}else if( context.isReverse || isRetrograde ){
				difference = actualPlanetAngle - targetPlanetAngle;
								
			}else{
				difference = targetPlanetAngle - actualPlanetAngle;
			}
																
			// zero crossing
			if( difference < 0 ){
				difference += astrology.utils.radiansToDegree( 2 * Math.PI); 		
			}
			
			var increment = difference /  expectedNumberOfLoops;
																																								
			if(context.isReverse){
				increment *= -1; 				
			}
			
			if(isRetrograde){
				increment *= -1; 
			}
			
			var newPos = actualPlanetAngle + increment;
			if( newPos < 0 ){
				newPos += astrology.utils.radiansToDegree( 2 * Math.PI);
			}
			
			context.actualPlanetPos[planet][0] = newPos;										
		}
								
		context.transit.drawPoints( context.actualPlanetPos );		
	}
						 		
}( window.astrology = window.astrology || {}));