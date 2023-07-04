import { LocatedPoint, Points } from './radix';
import default_settings, { Settings } from './settings';
import { getPointPosition, isCollision, comparePoints, placePointsInCollision, assemble } from './utils'

describe('getPointPosition', () => {
  test.each([
    [10, 10, 10, 0, {x:0, y:10}],
    [10, 10, 10, 90, {x:10, y:20}],
    [10, 10, 10, 180, {x:20, y:10}],
    [10, 10, 10, 270, {x:10, y:0}],
    [10, 10, 10, 360, {x:0, y:10}],
    [10, 10, 10, 450, {x:10, y:20}],
  ])('should return position for angle', (cx, cy, radius, angle, expected) => {
    const position = getPointPosition(cx, cy, radius, angle, default_settings)
    expect(position.x).toBeCloseTo(expected.x)
    expect(position.y).toBeCloseTo(expected.y)
  })
});

describe('isCollision', () => {
  test.each([
    [{x:10, y:10, r:5}, {x:10, y:10, r:5}, true],
    [{x:10, y:10, r:5}, {x:21, y:10, r:5}, false],
    [{x:10, y:10, r:5}, {x:10, y:20, r:5}, true],
    [{x:10, y:10, r:5}, {x:10, y:21, r:5}, false],
    [{x:10, y:10, r:5}, {x:20, y:10, r:10}, true]
  ])('should return if circles are in collision', (circle1, circle2, expected) => {
    expect(isCollision(circle1, circle2)).toBe(expected)
  })
})

describe('comparePoints', () => {
  test.each([
    [    10, 20,     -10],
    [    20, 20,       0],
    [    30, 20,      10],
    [     0,  1,      -1],
    [259.99,  0,  259.99],
  ])('should return if circles are in collision', (angle1, angle2, expected) => {
    expect(comparePoints({angle: angle1}, {angle: angle2})).toBe(expected)
  })
})

describe('placePointsInCollision', () => {
  test('should place correctly planets', () => {
    let p1 = {name:'Sun', pointer:1, angle:1, x:1, y:1, r:1};
    let p2 = {name:'Mercury', pointer:359, angle:1, x:1, y:1, r:1};	

    placePointsInCollision(p1, p2);					

    expect(p1).toStrictEqual({name:'Sun', pointer:1, angle:2, x:1, y:1, r:1});
    expect(p2).toStrictEqual({name:'Mercury', pointer:359, angle:0, x:1, y:1, r:1});
  })

  test('should place correctly planets when passing in other order', () => {
    let p1 = {name:'Mercury', pointer:359, angle:1, x:1, y:1, r:1};
    let p2 = {name:'Sun', pointer:1, angle:1, x:1, y:1, r:1};	

    placePointsInCollision(p1, p2);					

    expect(p1).toStrictEqual({name:'Mercury', pointer:359, angle:0, x:1, y:1, r:1});
    expect(p2).toStrictEqual({name:'Sun', pointer:1, angle:2, x:1, y:1, r:1});
  })

  test('should place correctly planets when in collision', () => {
    let p1 = {name:'Sun', pointer:10, angle:10, x:1, y:1, r:1};
    let p2 = {name:'Mercury', pointer:20, angle:10, x:1, y:1, r:1};	

    placePointsInCollision(p1, p2);					

    expect(p1).toStrictEqual({name:'Sun', pointer:10, angle:9, x:1, y:1, r:1});
    expect(p2).toStrictEqual({name:'Mercury', pointer:20, angle:11, x:1, y:1, r:1});
  })
})

describe('assemble', () => {
  test('assemble', () => {
    let locatedPoints: LocatedPoint[] = [];
    const universe = {cx:0, cy:0, r:100}
    const planetRadius = 10
    const settings: Settings = {...default_settings, COLLISION_RADIUS: planetRadius}
                                                        
    let point: LocatedPoint = {name:"Point1", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);
                              
    point = {name:"Point2", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point3", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point4", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point5", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point6", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point7", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point8", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point9", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);

    point = {name:"Point10", x:100, y:0, r:planetRadius, angle:180}														
    locatedPoints = assemble(locatedPoints, point, universe, settings);
                      
    expect( locatedPoints ).toHaveLength( 10 );		
  })

  test('assemble2', () => {
    const universe = {cx:0, cy:0, r:100};					
    const collisionRadius = 10;
    let angle, planetPosition, sun, mercury, venus, result, locatedPoints;

    angle = 0;
    planetPosition = getPointPosition(universe.cx, universe.cy, universe.r, angle, default_settings);
    sun = {name:"Sun", x:planetPosition.x, y:planetPosition.y, r:collisionRadius, angle:angle};					
    expect(assemble([], sun, universe, default_settings)).toStrictEqual([sun]);
                    									
    angle = 90;
    planetPosition = getPointPosition(universe.cx, universe.cy, universe.r, angle, default_settings);					
    mercury = {name:"Mercury", x:planetPosition.x, y:planetPosition.y, r:collisionRadius, angle:angle};																										
                                            
    locatedPoints = assemble([sun], mercury, universe, default_settings);
    expect(locatedPoints[0].angle).toBe(0);
    expect(locatedPoints[1].angle).toBe(90); 

    angle = 2;
    planetPosition = getPointPosition(universe.cx, universe.cy, universe.r, angle, default_settings);					
    mercury = {name:"Mercury", x:planetPosition.x, y:planetPosition.y, r:collisionRadius, angle:angle};																										
                                            
    locatedPoints = assemble([sun], mercury, universe, default_settings);
    expect(locatedPoints[0].angle).toBe(7);
    expect(locatedPoints[1].angle).toBe(355);
    expect(locatedPoints).toHaveLength(2);
          
    angle = 1;
    planetPosition = getPointPosition(universe.cx, universe.cy, universe.r, angle, default_settings);					
    venus = {name:"Venus", x:planetPosition.x, y:planetPosition.y, r:collisionRadius, angle:angle};																										
                                            
    locatedPoints = assemble([sun, mercury], venus, universe, default_settings);
          
    expect( locatedPoints[0].name ).toBe("Venus"); 
    expect( locatedPoints[0].angle ).toBe(1);

    expect( locatedPoints[1].name ).toBe("Mercury");
    expect( locatedPoints[1].angle ).toBe(13);

    expect( locatedPoints[2].name ).toBe("Sun");
    expect( locatedPoints[2].angle ).toBe(349);
          
    expect(locatedPoints).toHaveLength(3);	
  })

  test('assemble should not change planet position when planet are in collision', () => {
    const shift = 344.07396032340205;
    const universe = {cx:300, cy:300, r:185.125};	
    const collisionRadius = 10;
    let angle, planetPosition, sun, mercury, venus, result
    let locatedPoints: LocatedPoint[] = [];
    const planets: Points = {"Sun": [264.7071707108],"Mercury": [283.248841516],"Saturn": [283.8137792332],"Uranus": [274.8367919812],"Neptune": [281.4462451253]}

    for(var planet in planets){
      planetPosition = getPointPosition(universe.cx, universe.cy, universe.r, planets[planet][0]+shift, default_settings);
      const planetObject = {name:planet, x:planetPosition.x, y:planetPosition.y, r:collisionRadius, angle:planets[planet][0]+shift,pointer:planets[planet][0]+shift};
                                                  
      locatedPoints = assemble(locatedPoints, planetObject, universe, default_settings);
    }

    var expectedPlanetOrder = ["Sun", "Uranus", "Neptune", "Mercury", "Saturn"];
    
    expect(locatedPoints.map(lp => lp.name)).toStrictEqual(expectedPlanetOrder);
  })
})