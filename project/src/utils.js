
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
	export const getPointPosition = function( cx, cy, radius, angle, astrology ){		
		var angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180;
		var xPos = cx + radius * Math.cos( angleInRadius );
		var yPos = cy + radius * Math.sin( angleInRadius );							  		  			
		return {x:xPos, y:yPos};
	};
	
	export const degreeToRadians = function( degree ){
		return degrees * Math.PI / 180;
	};

	export const radiansToDegree = function( radians ){
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
	 export const getDescriptionPosition = function( point, texts, astrology ){
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
	 export const validate = function( data ){
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
	 export const getEmptyWrapper = function( parent, elementID, _paperElementId ){
		
		var wrapper = document.getElementById( elementID );		
		if(wrapper){
			removeChilds( wrapper );
		}else{					
			wrapper = document.createElementNS( document.getElementById( _paperElementId ).namespaceURI, "g");
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
	export const removeChilds = function(parent){
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
	 export const isCollision = function(circle1, circle2){			
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
	 export const assemble = function( locatedPoints, point, universe, astrology){
		
		// first item
		if(locatedPoints.length == 0){
			locatedPoints.push(point);
			return locatedPoints; //================>
		}
								
		if( (2 * Math.PI * universe.r) - ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2))  <= 0){							
			if( astrology.DEBUG ) console.log( "Universe circumference: " + (2 * Math.PI * universe.r) + ", Planets circumference: " + ( 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length+2)));							
			throw new Error("Unresolved planet collision. Try change SYMBOL_SCALE or paper size.");
		}
													
		var hasCollision = false;				
		locatedPoints.sort( comparePoints );
		for(var i = 0, ln = locatedPoints.length; i < ln; i++ ){
			
			if(isCollision(locatedPoints[i], point)){
				hasCollision = true;
				var locatedButInCollisionPoint =  locatedPoints[i];
				locatedButInCollisionPoint.index = i;
				
				if( astrology.DEBUG ) console.log( "Resolve collision: " + locatedButInCollisionPoint.name + " X " + point.name); 
												
				break;
			}
		}
						
		if( hasCollision ){
			
			placePointsInCollision(locatedButInCollisionPoint, point);
																																																																 						 										    				  			  																													
			var newPointPosition = getPointPosition(universe.cx, universe.cy, universe.r, locatedButInCollisionPoint.angle, astrology);
			locatedButInCollisionPoint.x = newPointPosition.x;
			locatedButInCollisionPoint.y = newPointPosition.y;
			
			newPointPosition = getPointPosition(universe.cx, universe.cy, universe.r, point.angle, astrology);
			point.x = newPointPosition.x;
			point.y = newPointPosition.y;
																		  		
			// remove locatedButInCollisionPoint from locatedPoints									
			locatedPoints.splice(locatedButInCollisionPoint.index, 1);
																
			// call recursive	
			locatedPoints = assemble(locatedPoints, locatedButInCollisionPoint, universe, astrology);	
			locatedPoints = assemble(locatedPoints, point, universe, astrology);	
														
		}else{
			locatedPoints.push(point);	
		}
		locatedPoints.sort( comparePoints );									
		return locatedPoints;	
	};
	
	/**
	 * Sets the positions of two points that are in collision.
	 * 
	 * @param {Object} p1, {..., pointer:123, angle:456}
	 * @param {Object} p2, {..., pointer:23, angle:56}
	 */
	 export const placePointsInCollision = function(p1, p2){
		
		var step = 1;
		var adjustedP1Pointer = p1.pointer == undefined ? p1.angle : p1.pointer;
		var adjustedP2Pointer = p2.pointer == undefined ? p2.angle : p2.pointer;

		// solving problems with zero crossing
		if(Math.abs(adjustedP1Pointer - adjustedP2Pointer) > 180) {
			adjustedP1Pointer = (adjustedP1Pointer + 180) % 360
			adjustedP2Pointer = (adjustedP2Pointer + 180) % 360
		}
		
		if(adjustedP1Pointer <= adjustedP2Pointer){
			p1.angle = p1.angle - step;
			p2.angle = p2.angle + step;											
		} else if(adjustedP1Pointer >= adjustedP2Pointer)
		{
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
	 export const isInCollision = function(angle, points, astrology){		
		var deg360 = radiansToDegree(2*Math.PI);
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
	 export const getDashedLinesPositions = function( centerX, centerY, angle, lineStartRadius, lineEndRadius, obstacleRadius, obstacles, astrology){
		var startPos, endPos;
		var result = [];	
		
		if( isInCollision( angle, obstacles, astrology)){
			
			startPos = getPointPosition( centerX, centerY, lineStartRadius, angle, astrology);
			endPos = getPointPosition( centerX, centerY, obstacleRadius - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle, astrology);			
			result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} );
			
			// the second part of the line when is space
			if( (obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)) < lineEndRadius){
				startPos = getPointPosition( centerX, centerY, obstacleRadius + 2*(astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE),angle, astrology); 			
				endPos = getPointPosition( centerX, centerY, lineEndRadius, angle, astrology);				
				result.push( {startX:startPos.x, startY:startPos.y, endX:endPos.x, endY:endPos.y} ); 														
			}					
								
		}else{
			startPos = getPointPosition( centerX, centerY, lineStartRadius, angle, astrology);
			endPos = getPointPosition( centerX, centerY, lineEndRadius, angle, astrology);
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
	 export const getRulerPositions = function( centerX, centerY, startRadius, endRadius, startAngle, astrology ){	
		var result = [];
		
		var rayRadius = endRadius;
		var halfRayRadius = (startRadius <= endRadius) ? rayRadius - (Math.abs(endRadius-startRadius)/2): rayRadius + (Math.abs(endRadius-startRadius)/2); 
		
		for(var i = 0, start = 0, step = 5; i < 72; i++ ){ 
			    var angle = start + startAngle;
			    var startPos = getPointPosition( centerX, centerY, startRadius, angle, astrology);
				var endPos = getPointPosition( centerX, centerY, (i%2 == 0 ? rayRadius : halfRayRadius), angle, astrology);				
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
	export const comparePoints = function( pointA, pointB){		
		return pointA.angle - pointB.angle; 			
	};
									
