// ## UTILS #############################
(function( astrology ) {
	
	astrology.utils = {};
	
	/**
	 * Calculate position of the point on the circle.
	 * 
	 * @param {int} cx - center x 
	 * @param {int} cy - center y
	 * @param {int} radius
	 * @param {double} angle - degree			
	 * 
	 * @return {Object} - {x:10, y:20}
	 */	
	astrology.utils.getPointPosition = function( cx, cy, radius, angle ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );							  		  			
		return {x:xPos, y:yPos};
	};
	
	astrology.utils.degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	astrology.utils.radiansToDegree = function( radians ){
		return radians * 180 / Math.PI;
	};
	
	/**
	 * Calculates positions of the point description
	 * 
	 * @param {Object} point
	 * @param {Array<String>} texts
	 * 
	 * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
	 */
	astrology.utils.getDescriptionPosition = function( point, texts ){
		var RATION = 1.4;
		var result = [];		
		var posX = point.x + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE)  ;
		var posY = point.y - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE);
		
		texts.forEach(function(text, idx){						
			result.push({text:text, x:posX, y:posY + (astrology.COLLISION_RADIUS/RATION * astrology.SYMBOL_SCALE * idx)});					
		}, this);
						
		return result;
	};
	
	/**
	 * Checks a source data
	 * @private
	 * 
	 * @param {Object} data
	 * @return {Object} status
	 */
	astrology.utils.validate = function( data ){
		var status = {hasError:false, messages:[]};
		
		if( data == null ){			
			status.messages.push( "Data is not set." );
			status.hasError = true;
			return status;
		}
		
		if(data.planets == null){					
			status.messages.push( "There is not property 'planets'." );
			status.hasError = true;
		}
		
		for (var property in data.planets) {
    		if (data.planets.hasOwnProperty(property)) {        		
        		if(!Array.isArray( data.planets[property] )){
        			status.messages.push( "The planets property '"+ property +"' has to be Array." );
					status.hasError = true;	
        		}
    		}
		}
					
		if(data.cusps != null && !Array.isArray(data.cusps)){
			status.messages.push( "Property 'cusps' has to be Array." );
			status.hasError = true;
		}
		
		if(data.cusps != null && data.cusps.length != 12){			
			status.messages.push( "Count of 'cusps' values has to be 12." );
			status.hasError = true;
		}
									
		return status;		
	};
	
	/**
	 * Get empty DOMElement with ID
	 * 
	 * @param{String} elementID
	 * @param{DOMElement} parent
	 * @return {DOMElement}
	 */
	astrology.utils.getEmptyWrapper = function( parent, elementID ){
		
		var wrapper = document.getElementById( elementID );		
		if(wrapper){
			astrology.utils.removeChilds( wrapper );
		}else{					
			wrapper = document.createElementNS( document.getElementById( astrology._paperElementId ).namespaceURI, "g");
			wrapper.setAttribute('id', elementID);
			parent.appendChild( wrapper );			
		} 
		
		return wrapper;
	};
	
	/**
	* Remove childs
	* 
	* @param{DOMElement} parent
	*/
	astrology.utils.removeChilds = function(parent){
		if( parent == null ){
			return;
		}
		
		var last;
    	while (last = parent.lastChild){
    		parent.removeChild(last);
    	}
	};
	
	/**
	 * Check circle collision between two objects 
	 * 
 	 * @param {Object} circle1, {x:123, y:123, r:50}
 	 * @param {Object} circle2, {x:456, y:456, r:60}
 	 * @return {boolean} 	 
	 */
	astrology.utils.isCollision = function(circle1, circle2){			
		//Calculate the vector between the circles’ center points
  		var vx = circle1.x - circle2.x;
  		var vy = circle1.y - circle2.y;
  		
  		var magnitude = Math.sqrt(vx * vx + vy * vy);
  		
  		//circle.radius has been set to astrology.COLLISION_RADIUS;
  		var totalRadii = circle1.r + circle2.r;
  		  		  		  		   		  		   	
		return magnitude <= totalRadii; 
	};
		
	/**
	 * Places a new point in the located list 
	 * 
 	 * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
 	 * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96} 
 	 * @param {Object} universe - current universe
 	 * @return {Array<Object>} locatedPoints 	 
	 */
	astrology.utils.assemble = function( locatedPoints, point, universe){
		
		// first item
		if(locatedPoints.length == 0){
			locatedPoints.push(point);
			return locatedPoints; //================>
		}
								
		if( (2 * Math.PI * universe.r) - ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2))  <= 0){							
			if( astrology.DEBUG ) console.log( "Universe circumference: " + (2 * Math.PI * universe.r) + ", Planets circumference: " + ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2)));							
			throw new Error("Unresolved planet collision. Try change SYMBOL_SCALE or paper size.");
		}
													
		var isCollision = false;				
		locatedPoints.sort( astrology.utils.comparePoints );
		for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
			
			if(astrology.utils.isCollision(locatedPoints[i], point)){
				isCollision = true;
				var locatedButInCollisionPoint =  locatedPoints[i];
				locatedButInCollisionPoint.index = i;
				
				if( astrology.DEBUG ) console.log( "Resolve collision: " + locatedButInCollisionPoint.name + " X " + point.name); 
												
				break;
			}
		}
						
		if( isCollision ){
			
			astrology.utils.placePointsInCollision(locatedButInCollisionPoint, point);
																																																																 						 										    				  			  																													
			var newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, locatedButInCollisionPoint.angle);
			locatedButInCollisionPoint.x = newPointPosition.x;
			locatedButInCollisionPoint.y = newPointPosition.y;
			
			newPointPosition = astrology.utils.getPointPosition(universe.cx, universe.cy, universe.r, point.angle);
			point.x = newPointPosition.x;
			point.y = newPointPosition.y;
																		  		
			// remove locatedButInCollisionPoint from locatedPoints									
			locatedPoints.splice(locatedButInCollisionPoint.index, 1);
																
			// call recursive	
			locatedPoints = astrology.utils.assemble(locatedPoints, locatedButInCollisionPoint, universe);	
			locatedPoints = astrology.utils.assemble(locatedPoints, point, universe);	
														
		}else{
			locatedPoints.push(point);	
		}
													
		return locatedPoints;	
	};
	
	/**
	 * Sets the positions of two points that are in collision.
	 * 
	 * @param {Object} p1, {..., pointer:123, angle:456}
	 * @param {Object} p2, {..., pointer:23, angle:56}
	 */
	astrology.utils.placePointsInCollision = function(p1, p2){
		
		var step = 1;
		
		if( 
			// solving problems with zero crossing										
			(p1.pointer <= p2.pointer && 
			Math.abs(p1.pointer - p2.pointer) <= astrology.COLLISION_RADIUS) ||
							
			(p1.pointer >= p2.pointer && 
			Math.abs(p1.pointer - p2.pointer) >= astrology.COLLISION_RADIUS)			
		){
								
			p1.angle = p1.angle - step;
			p2.angle = p2.angle + step;											
		}else{
										
			p1.angle = p1.angle + step;
			p2.angle = p2.angle - step;	
		}
							
		p1.angle = (p1.angle + 360) % 360;
		p2.angle = (p2.angle + 360) % 360;		 					
	};
		
	/**
	 * Check collision between angle and object 
	 * 
 	 * @param {double} angle
 	 * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
 	 * @return {boolean} 	 
	 */
	astrology.utils.isInCollision = function(angle, points){		
		var deg360 = astrology.utils.radiansToDegree(2*Math.PI);
		var collisionRadius = (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) / 2;
							
		var result = false;					
		for(var i = 0, ln = points.length; i < ln ; i++ ){
										
			if( Math.abs(points[i].angle - angle) <= collisionRadius || 
			(deg360 - Math.abs(points[i].angle - angle)) <= collisionRadius){
				result = true;
				break;
			}					
		}				
					
		return result;			
	};
		
	/**
	 * Calculates positions of the dashed line passing through the obstacle.
	 * 	* 
	 * @param {double} centerX
	 * @param {double} centerY
	 * @param {double} angle - line angle
 	 * @param {double} lineStartRadius
 	 * @param {double} lineEndRadius
 	 * @param {double} obstacleRadius 	
 	 * @param {Array<Object>} obstacles, [{x:456, y:456, r:60, angle:123}, ...]
 	 * 
 	 * @return {Array<Object>} [{startX:1, startY:1, endX:4, endY:4}, {startX:6, startY:6, endX:8, endY:8}]
	 */
	astrology.utils.getDashedLinesPositions = function( centerX, centerY, angle, lineStartRadius, lineEndRadius, obstacleRadius, obstacles){
		var startPos, endPos;
		var result = [];	
		
		if( astrology.utils.isInCollision( angle, obstacles)){
			
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle);			
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );
			
			// the second part of the line when is space
			if( (obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)) < lineEndRadius){
				startPos = astrology.utils.getPointPosition( centerX, centerY, obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE),angle); 			
				endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);				
				result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} ); 														
			}					
								
		}else{
			startPos = astrology.utils.getPointPosition( centerX, centerY, lineStartRadius, angle);
			endPos = astrology.utils.getPointPosition( centerX, centerY, lineEndRadius, angle);
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );	
		}	
						
		return result;		
	};
	
	/**
	 * Calculate ruler positions.
	 * 
	 * @param {Double} centerX
	 * @param {Double} centerY
	 * @param {Double} startRadius
	 * @param {Double} endRadius
	 * @param {Boolean} startAngle
	 * 
	 * @return {Array<Object>} [ {startX:1,startY:2, endX:3, endX:4 }, ...]
	 */
	astrology.utils.getRulerPositions = function( centerX, centerY, startRadius, endRadius, startAngle ){	
		var result = [];
		
		var rayRadius = endRadius;
		var halfRayRadius = (startRadius <= endRadius) ? rayRadius - (Math.abs(endRadius-startRadius)/2): rayRadius + (Math.abs(endRadius-startRadius)/2); 
		
		for(var i = 0, start = 0, step = 5; i < 72; i++ ){ 
			    var angle = start + startAngle;
			    var startPos = astrology.utils.getPointPosition( centerX, centerY, startRadius, angle);
				var endPos = astrology.utils.getPointPosition( centerX, centerY, (i%2 == 0 ? rayRadius : halfRayRadius), angle);				
				result.push({startX:startPos.x,startY:startPos.y, endX:endPos.x, endY:endPos.y });				
				
				start += step;
		} 
												
		return result;		
	};
	
	/**
	* Compare two points
	* 
	* @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
	* @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
	* @return 
	*/
	astrology.utils.comparePoints = function( pointA, pointB){		
		return pointA.angle - pointB.angle; 			
	};
									
}( window.astrology = window.astrology || {}));