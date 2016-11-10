// ## Transit chart ###################################
(function( astrology ) {
	
	var context;
    
	/**
	 * Transit charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {astrology.Radix} radix 
	 * @param {Object} data
	 */
	astrology.Transit = function( radix, data ){
		
		// Validate data
		var status = astrology.utils.validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages );
		}
						
		this.data = data;								
		this.paper = radix.paper; 
		this.cx = radix.cx;
		this.cy = radix.cy;
		this.radius = radix.radius;
		
		this.shift = radix.shift;		
						
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', astrology.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		context = this; 
		
		radix.scale(0.8); // TODO
									
		return this;
	};
	
	/**
	 * Draw universe.
	 */
	astrology.Transit.prototype.drawUniverse = function(){
		var universe = this.universe;		
	};
	
	/**
	 * Draw points
	 */
	astrology.Transit.prototype.drawPoints = function(){
		if(this.data.points == null){
			return;
		}
		
		var universe = this.universe;			
	};
	
	/**
	 * Draw cusps
	 */
	astrology.Transit.prototype.drawCusps = function(){
		if(this.data.cusps == null){
			return;
		}
		
		var universe = this.universe;				
	};
	
	/**
	 * Draw aspects
	 */
	astrology.Transit.prototype.drawAspects = function(){
		if(this.data.aspects == null){
			return;
		}			
	};
	
	/**
	 * Draw signs symbols
	 * .
	 */
	astrology.Transit.prototype.drawSigns = function(){
		var universe = this.universe;			
	};
	
	/**
	 * Draw circles
	 * .
	 */
	astrology.Transit.prototype.drawCircles = function drawCircles(){
		var universe = this.universe;					
	};
				
}( window.astrology = window.astrology || {}));
