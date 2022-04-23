import Zodiac from './zodiac'
import AspectCalculator, { FormedAspect } from './aspect';
import Animator from './animation/animator';
import { validate, getEmptyWrapper, getPointPosition, getRulerPositions, getDescriptionPosition, assemble, radiansToDegree } from './utils'
import Radix, { AstroData, LocatedPoint, Points } from './radix';
import SVG from './svg';
import { Settings } from './settings';
    
	/**
	 * Transit charts.
	 * 
	 * @class
	 * @public
	 * @constructor
 	 * @param {this.settings.Radix} radix 
	 * @param {Object} data
	 */
	class Transit {
		data: AstroData;
		paper: SVG;
		cx: number;
		cy: number;
		toPoints: Points;
		radius: number;
		settings: Settings;
		rulerRadius: number;
		pointRadius: number;
		shift: number;
		universe: Element;
		context: this;
		locatedPoints: LocatedPoint[]
		constructor( radix: Radix, data: AstroData, settings: Settings ){
		
		// Validate data
		var status = validate(data);		 		
		if( status.hasError ) {										
			throw new Error( status.messages.join(' | ') );
		}
						
		this.data = data;								
		this.paper = radix.paper; 
		this.cx = radix.cx;
		this.cy = radix.cy;
		this.toPoints = radix.toPoints;
		this.radius = radix.radius;
		this.settings = settings;
				
		this.rulerRadius = ((this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO)/this.settings.RULER_RADIUS);
		this.pointRadius = this.radius + (this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO +  (this.settings.PADDING * this.settings.SYMBOL_SCALE));
											
		this.shift = radix.shift;		
						
		this.universe = document.createElementNS(this.paper.root.namespaceURI, "g");
		this.universe.setAttribute('id', this.paper._paperElementId + "-" + this.settings.ID_TRANSIT);
		this.paper.root.appendChild( this.universe );
					
		this.context = this; 
	};

	/**
	 * Draw background
	 */
	 drawBg(){				
		var universe = this.universe;		
						
		var wrapper = getEmptyWrapper( universe, this.paper._paperElementId + "-" + this.settings.ID_BG, this.paper._paperElementId);	
		
		var LARGE_ARC_FLAG = 1;	
		var start = 0; //degree
		var end = 359.99; //degree 				
		var hemisphere = this.paper.segment( this.cx, this.cy, this.radius+this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO, start, end, this.radius/this.settings.INDOOR_CIRCLE_RADIUS_RATIO, LARGE_ARC_FLAG);
		hemisphere.setAttribute("fill", this.settings.STROKE_ONLY ? "none" : this.settings.COLOR_BACKGROUND);				
		wrapper.appendChild( hemisphere );							
	};

/**
	 * Draw planets
	 * 
	 * @param{undefined | Object} planetsData, posible data planets to draw
	 */
 drawPoints( planetsData?: Points ){
	
	var planets = (planetsData == null) ? this.data.planets : planetsData;		
	if(planets == null){
		return;
	}
	
	var universe = this.universe;		
	var wrapper = getEmptyWrapper( universe, this.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_POINTS, this.paper._paperElementId);
				
	var gap = this.radius - (this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO + this.radius/this.settings.INDOOR_CIRCLE_RADIUS_RATIO);								
	var step = ( gap - 2*(this.settings.PADDING * this.settings.SYMBOL_SCALE)) / Object.keys(planets).length;
				
	var pointerRadius = this.radius + (this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO);
	var startPosition, endPosition;
	
	this.locatedPoints = [];																			
	for (var planet in planets) {
			if (planets.hasOwnProperty( planet )) {
																					
					var position = getPointPosition( this.cx, this.cy, this.pointRadius, planets[planet][0] + this.shift, this.settings); 		   	
					var point = {name:planet, x:position.x, y:position.y, r:(this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE), angle:planets[planet][0] + this.shift, pointer:planets[planet][0] + this.shift}; 		   		
					this.locatedPoints = assemble(this.locatedPoints, point, {cx:this.cx, cy:this.cy, r:this.pointRadius}, this.settings);   
				} 		
	}
	
	if( this.settings.DEBUG ) console.log( "Transit count of points: " + this.locatedPoints.length );
	if( this.settings.DEBUG ) console.log( "Transit located points:\n" + JSON.stringify(this.locatedPoints) );
												
	this.locatedPoints.forEach(function(point){
									
				// draw pointer        	
				startPosition = getPointPosition( this.cx, this.cy, pointerRadius, planets[point.name][0] + this.shift, this.settings);
				endPosition = getPointPosition(this.cx, this.cy, pointerRadius+this.rulerRadius/2, planets[point.name][0] + this.shift, this.settings );
				var pointer = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
				pointer.setAttribute("stroke", this.settings.CIRCLE_COLOR);		 
		pointer.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE));
				wrapper.appendChild(pointer);
				
				// draw pointer line
				if( !this.settings.STROKE_ONLY && (planets[point.name][0] + this.shift) != point.angle){	        	
					startPosition = endPosition;
					endPosition = getPointPosition(this.cx, this.cy, this.pointRadius-(this.settings.COLLISION_RADIUS * this.settings.SYMBOL_SCALE), point.angle, this.settings );
					var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
					line.setAttribute("stroke", this.settings.LINE_COLOR);		        	
					line.setAttribute("stroke-width", 0.5 * (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE));       	
					wrapper.appendChild(line);
				}        	
				
				// draw symbol						
		var symbol = this.paper.getSymbol(point.name, point.x, point.y);
				symbol.setAttribute('id', this.paper.root.id + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_POINTS + "-" + point.name);
				wrapper.appendChild( symbol );
																		
				// draw point descriptions
				var textsToShow = [(Math.round(planets[point.name][0]) % 30).toString()];
				
				var zodiac = new Zodiac(this.data.cusps, this.settings);
				if(planets[point.name][1] && zodiac.isRetrograde(planets[point.name][1])){
					textsToShow.push("R");
				}else{
					textsToShow.push("");
				}
				textsToShow = textsToShow.concat(zodiac.getDignities({"name":point.name, "position":planets[point.name][0]}, this.settings.DIGNITIES_EXACT_EXALTATION_DEFAULT).join(","));        	
																															 
				var pointDescriptions = getDescriptionPosition(point, textsToShow, this.settings);         	
				pointDescriptions.forEach(function(dsc){        		        		        		     
			wrapper.appendChild( this.paper.text( dsc.text, dsc.x, dsc.y, this.settings.POINTS_TEXT_SIZE, this.settings.SIGNS_COLOR) );	        		
				}, this);
																																												 
	}, this);										
};

/**
 * Draw circles
 */
drawCircles(){
	
	var universe = this.universe;		
	var wrapper = getEmptyWrapper( universe, this.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_CIRCLES, this.paper._paperElementId);
	var radius = this.radius + this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO;
		
	var circle;			
	circle = this.paper.circle( this.cx, this.cy, radius);
	circle.setAttribute("stroke", this.settings.CIRCLE_COLOR);		 
	circle.setAttribute("stroke-width", (this.settings.CIRCLE_STRONG * this.settings.SYMBOL_SCALE).toString());
			wrapper.appendChild( circle );										
};

/**
 * Draw cusps
 * @param{undefined | Object} cuspsData, posible data cusps to draw
 */
drawCusps( cuspsData? : number[] ){
	
	var cusps = (cuspsData == null) ? this.data.cusps : cuspsData;		
	if(cusps == null){
		return;
	}
					
	let bottomPosition
	var universe = this.universe;
	var wrapper = getEmptyWrapper( universe, this.paper._paperElementId + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_CUSPS, this.paper._paperElementId);		
	var numbersRadius = this.radius + ((this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius)/2);
	
	var AS = 0;
	var IC = 3;
	var DC = 6;
	var MC = 9;
	var mainAxis = [AS,IC,DC,MC];
	
	//Cusps
	for (var i = 0, ln = cusps.length; i < ln; i++) {
		// Lines 			 			 		 		
		 var startPosition = bottomPosition = getPointPosition( this.cx, this.cy, this.radius, cusps[i] + this.shift, this.settings);
		 var endPosition = getPointPosition( this.cx, this.cy, this.radius + this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO - this.rulerRadius, cusps[i] + this.shift, this.settings);
		 var line = this.paper.line( startPosition.x, startPosition.y, endPosition.x, endPosition.y);
		 line.setAttribute("stroke", this.settings.LINE_COLOR);		 				 				 		
		 line.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString()); 
		 
		 wrapper.appendChild( line );
								 
		 // Cup number  		 	
			var deg360 = radiansToDegree( 2 * Math.PI );
			var startOfCusp = cusps[i];
			var endOfCusp = cusps[ (i+1)%12 ];
			var gap = endOfCusp - startOfCusp > 0 ? endOfCusp - startOfCusp : endOfCusp - startOfCusp + deg360;
			var textPosition = getPointPosition( this.cx, this.cy, numbersRadius, ((startOfCusp + gap/2) % deg360) + this.shift, this.settings );
			wrapper.appendChild( this.paper.getSymbol( (i+1).toString(), textPosition.x, textPosition.y )); 						
	}				
};
	
drawRuler(){
	
	var universe = this.universe;		
	var wrapper = getEmptyWrapper( universe, this.paper.root.id + "-" + this.settings.ID_TRANSIT + "-" + this.settings.ID_RULER, this.paper._paperElementId);
			
	var startRadius = (this.radius + (this.radius/this.settings.INNER_CIRCLE_RADIUS_RATIO));		
	var rays = getRulerPositions( this.cx, this.cy, startRadius, startRadius - this.rulerRadius, this.shift, this.settings);
	
	rays.forEach(function( ray ){
		var line = this.paper.line( ray.startX, ray.startY, ray.endX, ray.endY);       		       		       
		line.setAttribute("stroke", this.settings.CIRCLE_COLOR);		 				 				 		
		line.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE));       		
		wrapper.appendChild( line );				
	}, this);

	var circle;			
	circle = this.paper.circle( this.cx, this.cy, startRadius - this.rulerRadius);
	circle.setAttribute("stroke", this.settings.CIRCLE_COLOR);		 
	circle.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString());
			wrapper.appendChild( circle );       	       	
};
	
/**
 * Draw aspects
 * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
 */
aspects( customAspects: FormedAspect[] ){
	
	var aspectsList = customAspects != null && Array.isArray(customAspects) ? 
						customAspects : 
						new AspectCalculator( this.toPoints, this.settings ).radix( this.data.planets );
						
	var universe = this.universe;		
	var wrapper = getEmptyWrapper( universe, this.paper.root.id + "-" + this.settings.ID_ASPECTS, this.paper._paperElementId);
																									
	for(var i = 0, ln = aspectsList.length; i < ln; i++){
													
		var startPoint = getPointPosition(this.cx, this.cy, this.radius/this.settings.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].toPoint.position + this.shift, this.settings );
		var endPoint = getPointPosition(this.cx, this.cy, this.radius/this.settings.INDOOR_CIRCLE_RADIUS_RATIO, aspectsList[i].point.position + this.shift, this.settings);
							
		var line = this.paper.line( startPoint.x, startPoint.y, endPoint.x, endPoint.y);       		       		       
		line.setAttribute("stroke", this.settings.STROKE_ONLY ? this.settings.LINE_COLOR : aspectsList[i].aspect.color);		 				 				 		
		line.setAttribute("stroke-width", (this.settings.CUSPS_STROKE * this.settings.SYMBOL_SCALE).toString());  
		
		line.setAttribute("data-name", aspectsList[i].aspect.name);
		line.setAttribute("data-degree", aspectsList[i].aspect.degree.toString());				
		line.setAttribute("data-point", aspectsList[i].point.name);   		
		line.setAttribute("data-toPoint", aspectsList[i].toPoint.name);
		line.setAttribute("data-precision", aspectsList[i].precision.toString());
								 
		wrapper.appendChild( line );				
	}         
					 
			// this
		return this.context;				
};
	
/**
 * Moves points to another position.
 * 
	* @param {Object} data - planets target positions.
	* @param {Integer} duration - in seconds
	* @param {boolean} isReverse 	  	 
	* @param {Function | undefined} callbck - the function executed at the end of animation
 */
animate( data: AstroData, duration: number, isReverse: boolean, callback: () => void ){
	// Validate data
	var status = validate(data);		 		
	if( status.hasError ) {										
		throw new Error( status.messages.join(' | ') );
	}
						
	// remove aspects
	getEmptyWrapper( this.universe, this.paper._paperElementId + "-" + this.settings.ID_ASPECTS, this.paper._paperElementId);
																			
	var animator = new Animator( this.context, this.settings );			
	animator.animate( data, duration, isReverse, (function(){
		
		// animation is finished
		this.data = data;
		this.drawPoints();		
		this.drawCusps();
		this.aspects();
		
		if(typeof callback == 'function'){
			callback();
		}
					
	}).bind(this));
																										
	 // this
		return this.context;
};

}

export default Transit;