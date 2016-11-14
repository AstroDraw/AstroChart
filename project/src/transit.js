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
												
		return this;
	};
		
	/**
	 * Draw points
	 */
	astrology.Transit.prototype.drawPoints = function(){
		if(this.data.points == null){
			return;
		}
		
		var universe = this.universe;
				
		// Planets can not be displayed on the same radius.				
		var gap = astrology.MARGIN;
		var radiusStep = ( gap / 2 ) / Object.keys(this.data.points).length;	
		var planetRadius = this.radius + astrology.PADDING;
									
		for (var planet in this.data.points) {
 			if (this.data.points.hasOwnProperty( planet )) {
 		   		var position = astrology.utils.getPointPosition( this.cx, this.cy, planetRadius, this.data.points[planet] + this.shift);
        		universe.appendChild( this.paper.getSymbol(planet, position.x, position.y));
        		planetRadius += radiusStep;
    		}
		}							
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
	 * Draw ruler
	 */
	astrology.Transit.prototype.drawRuler = function drawRuler(){
		 var universe = this.universe;
		
		// rays
        var lineLength = 3;
        for( i = 0, start = 0, step = 5;i < 72; i++ ){ 
            var startPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius, start  + this.shift);
        	var endPosition = astrology.utils.getPointPosition( this.cx, this.cy, this.radius + lineLength, start + this.shift);
       		universe.appendChild( this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y, astrology.COLOR_CIRCLE));
       		start += step;
       	}		
	};
				
}( window.astrology = window.astrology || {}));
