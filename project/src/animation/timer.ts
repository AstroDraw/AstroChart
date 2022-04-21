
class Timer {
	debug: boolean;
	callback: any;
	boundTick_: any;
	constructor( callback: any, debug: boolean ){
						
		if(typeof callback !== "function"){
			throw new Error( "param 'callback' has to be a function." );
		}				
		this.debug = debug;
						
		this.callback = callback;				
		this.boundTick_ = this.tick.bind(this); 
										
	};


	start = function(){	
		if (!this.requestID_){
			this.lastGameLoopFrame = new Date().getTime();	
			this.tick();	
			if( this.debug ) console.log("[astrology.Timer] start"); 
		}
	};
	
	stop = function(){	
		if(this.requestID_){    		
			window.cancelAnimationFrame( this.requestID_ );	
			this.requestID_ = undefined;
			if(this.debug) console.log("[astrology.Timer] stop");
		}	
	};
	
	isRunning = function(){
		return this.requestID_ ? true : false;
	};
	
	tick = function(){	
		var now = new Date().getTime(); 				
		this.requestID_ = window.requestAnimationFrame( this.boundTick_ );		
		this.callback( now - this.lastGameLoopFrame );		
		this.lastGameLoopFrame = now;				
	};
	 					 
}
	
export default Timer;