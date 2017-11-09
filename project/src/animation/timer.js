// ## Timer ###################################
(function( astrology ) {
		   
	/**
	 * Timer
	 * 
	 * Animation timer
	 * 
	 * @class
	 * @public
	 * @constructor 	
	 */
	astrology.Timer = function( callback ){
						
		if(typeof callback !== "function"){
			throw new Error( "param 'callback' has to be a function." );
		}				
						
		this.callback = callback;				
		this.boundTick_ = this.tick.bind(this); 
										
		return this;
	};
	
	astrology.Timer.prototype.start = function(){	
		if (!this.requestID_){
			this.lastGameLoopFrame = new Date().getTime();	
			this.tick();	
			if( astrology.DEBUG ) console.log("[astrology.Timer] start"); 
		}
	};
	
	astrology.Timer.prototype.stop = function(){	
		if(this.requestID_){    		
			window.cancelAnimationFrame( this.requestID_ );	
			this.requestID_ = undefined;
			if(astrology.DEBUG) console.log("[astrology.Timer] stop");
		}	
	};
	
	astrology.Timer.prototype.isRunning = function(){
		return this.requestID_ ? true : false;
	};
	
	astrology.Timer.prototype.tick = function(){	
		var now = new Date().getTime(); 				
		this.requestID_ = window.requestAnimationFrame( this.boundTick_ );		
		this.callback( now - this.lastGameLoopFrame );		
		this.lastGameLoopFrame = now;				
	};
	 					 
}( window.astrology = window.astrology || {}));