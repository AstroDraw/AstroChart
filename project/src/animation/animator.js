// ## Animator ###################################
(function( astrology ) {
	
	
    
	/**
	 * Animator
	 * 
	 * Animates the object on a circle.
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 * @param {Integer} cx - x center
	 * @param {Integer} cy - y center
	 * @param {Integer} radius - circle radius
	 */
	astrology.Animator = function( cx, cy, radius){
		
		this.cx = cx;
		this.cy = cy;
		this.radius = radius;		
		
			
		this.timer = new astrology.Timer( this );
		
		// time, passed since the start of the loop
		this.timeSinceLoopStart = 0;
							
		return this;
	};
	
	
	/**
	 * Animate objects
	 * 
 	 * @param {Integer} duration - seconds
 	 * @param {Function} callbck - start et the end of animation
	 */
	astrology.Animator.prototype.animate = function( planets, duration, callback){
		
		this.planets = planets;
		this.duration = duration * 1000;		
		this.callback = callback; 
		
		this.timer.start();									
	};
	
	astrology.Animator.prototype.update = function( deltaTime ){
		this.timeSinceLoopStart += deltaTime;
		var expectedNumberOfLoops = Math.floor( this.duration - this.timeSinceLoopStart ) / deltaTime; 			
		
		var planetToDraw = {};							
		for(var planet in this.planets){
			var element = document.getElementById(astrology.ID_CHART + "-" + astrology.ID_TRANSIT + "-" + astrology.ID_POINTS + "-" + planet);
			var actualPlanetAngle = parseFloat(element.getAttribute("data-angle"));			
			var targetPlanetAngle = this.planets[planet][0];
			var increment = (targetPlanetAngle - actualPlanetAngle < 0) ?			
				(astrology.utils.radiansToDegree( 2 * Math.PI) - ( actualPlanetAngle - targetPlanetAngle) ) /  expectedNumberOfLoops :
				(targetPlanetAngle - actualPlanetAngle) /  expectedNumberOfLoops;
														
			element.setAttribute("data-angle", actualPlanetAngle + increment);			
			planetToDraw[planet] = [ actualPlanetAngle ];												
		}
		
					
		console.log("update");
		
		// TODO
		this.transit.locatedPoints = [];
		this.transit.drawPoints( planetToDraw );
									
		if (this.timeSinceLoopStart > this.duration) {
			this.timer.stop();
			
			if( typeof this.callback  === "function"){
				this.callback();	
			}					
		}						
	};
				 				
}( window.astrology = window.astrology || {}));
