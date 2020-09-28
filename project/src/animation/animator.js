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
		this.cuspsElement = document.getElementById(astrology._paperElementId + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_CUSPS);
		
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
		
		var deg360 = astrology.utils.radiansToDegree( 2 * Math.PI);							
		var targetCuspAngle = context.transit.data.cusps[0] - context.data.cusps[0];					
					
		if( targetCuspAngle < 0 ){
			targetCuspAngle += deg360; 		
		}
						
		// speed
		if(  astrology.ANIMATION_CUSPS_ROTATION_SPEED > 0 ){
			targetCuspAngle += (context.isReverse)?
		 		-1 * ((astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360) + deg360) :
				astrology.ANIMATION_CUSPS_ROTATION_SPEED * deg360;
		}
																																													
		var difference = (context.isReverse) ? 
			context.rotation - targetCuspAngle : 
			targetCuspAngle - context.rotation;
								
		// zero crossing
		if( difference < 0 ){
			difference += deg360; 		
		}
			 				
		var increment = difference /  expectedNumberOfLoops;
						
		if(context.isReverse){
			increment *= -1; 				
		}						
		context.rotation += increment;
														 
		context.cuspsElement.setAttribute("transform", "rotate(" + context.rotation + " " + context.transit.cx + " " + context.transit.cy +")");
					
		if( expectedNumberOfLoops == 1){
			context.cuspsElement.removeAttribute("transform");
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