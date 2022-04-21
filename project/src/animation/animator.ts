  import { Settings } from '../settings';
import { radiansToDegree } from '../utils'
	import Timer from './timer';
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
	class Animator {
		transit: any;
		isReverse: boolean;
		rotation: number;
		settings: Settings;
		actualPlanetPos: any;
		timer: Timer;
		timeSinceLoopStart: number;
		context: this;
		cuspsElement: any;
		data: any; 
		constructor( transit: any, settings: Settings ){
			
			this.transit = transit;
			this.isReverse = false;
			this.rotation = 0;
			this.settings = settings;
			// Copy data
			this.actualPlanetPos = {};
			for(var planet in this.transit.data.planets){
				this.actualPlanetPos[planet] = this.transit.data.planets[planet];
			}
											
			this.timer = new Timer( this.update.bind(this), this.settings.DEBUG );
			
			// time, passed since the start of the loop
			this.timeSinceLoopStart = 0;
			
			this.context = this;
			this.cuspsElement = null;
		};

			/**
	 * Animate objects
	 
	 * @param {Object} data, targetPositions 
 	 * @param {Integer} duration - seconds
 	 * @param {boolean} isReverse 
 	 * @param {Function} callbck - start et the end of animation
	 */
	animate = function( data: Object, duration: number, isReverse: boolean, callback: any){
		this.data = data;		 			
		this.duration = duration * 1000;
		this.isReverse = isReverse || false;					
		this.callback = callback; 
		
		this.rotation = 0;				
		this.cuspsElement = document.getElementById(this.transit.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_CUSPS);
		
		this.timer.start();									
	};

	update = function( deltaTime: number ){
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
						 											 
		this.updatePlanets( expectedNumberOfLoops );
		this.updateCusps( expectedNumberOfLoops );														
	};
	
	/*
	 * @private
	 */
	updateCusps( expectedNumberOfLoops: number ){	
		
		var deg360 = radiansToDegree( 2 * Math.PI);							
		var targetCuspAngle = this.transit.data.cusps[0] - this.data.cusps[0];					
					
		if( targetCuspAngle < 0 ){
			targetCuspAngle += deg360; 		
		}
						
		// speed
		if(  this.settings.ANIMATION_CUSPS_ROTATION_SPEED > 0 ){
			targetCuspAngle += (this.isReverse)?
		 		-1 * ((this.settings.ANIMATION_CUSPS_ROTATION_SPEED * deg360) + deg360) :
				this.settings.ANIMATION_CUSPS_ROTATION_SPEED * deg360;
		}
																																													
		var difference = (this.isReverse) ? 
			this.rotation - targetCuspAngle : 
			targetCuspAngle - this.rotation;
								
		// zero crossing
		if( difference < 0 ){
			difference += deg360; 		
		}
			 				
		var increment = difference /  expectedNumberOfLoops;
						
		if(this.isReverse){
			increment *= -1; 				
		}						
		this.rotation += increment;
														 
		this.cuspsElement.setAttribute("transform", "rotate(" + this.rotation + " " + this.transit.cx + " " + this.transit.cy +")");
					
		if( expectedNumberOfLoops == 1){
			this.cuspsElement.removeAttribute("transform");
		}								
	};
	
	/*
	 * @private
	 */
	updatePlanets( expectedNumberOfLoops: number ){
		
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
			if( difference < 0 ){
				difference += radiansToDegree( 2 * Math.PI); 		
			}
			
			var increment = difference /  expectedNumberOfLoops;
																																								
			if(this.isReverse){
				increment *= -1; 				
			}
			
			if(isRetrograde){
				increment *= -1; 
			}
			
			var newPos = actualPlanetAngle + increment;
			if( newPos < 0 ){
				newPos += radiansToDegree( 2 * Math.PI);
			}
			
			this.actualPlanetPos[planet][0] = newPos;										
		}
								
		this.transit.drawPoints( this.actualPlanetPos );		
	}
}


export default Animator;