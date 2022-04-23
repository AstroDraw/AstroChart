import default_settings from "./settings";
import Zodiac from "./zodiac";

describe('getSign', () => {
  const cusps = [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274];
  var reporter = new Zodiac( cusps );
  test.each([
    [0, 1],
    [30, 2],
    [270, 10],
    [359, 12],
    [361, 1],
  ])('should return correct sign', (point, expected) => {
    expect( reporter.getSign( point ) ).toBe( expected );
  })
})

test.each([
  [-1, true],
  [1, false],
])('should return retrograde if speed is negative', (speed, expected) => {
  const cusps = [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274];
  const zodiac = new Zodiac( cusps );

  expect(zodiac.isRetrograde(speed)).toBe(expected);
})

test.each([
  [274, 12],
  [296, 12],
  [296.1, 1],
  [350, 2],
  [359, 2],
  [0, 2],
  [361, 2],
  [29.9, 2],
  [30, 3],
])('getHouseNumber [1] %i', (house, expected) => {
  const cusps = [296.1, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274];
  const zodiac = new Zodiac( cusps );

  expect(zodiac.getHouseNumber(house)).toBe(expected);
})

test.each([
  [248.58, 12],
  [265, 12],
  [265.7, 1],
  [307.65, 2],
  [353.4, 3],
  [0, 3],
  [361, 3],
  [26.87, 4],
])('getHouseNumber [2] %i', (house, expected) => {
  const cusps = [265.6850555442075,307.6441825689919,353.38796689506074,26.86890880306794,50.191811553503044,68.57049261566578,85.6850555442075,127.64418256899188,173.3879668950608,206.8689088030679,230.19181155350307,248.5704926156658];
  const zodiac = new Zodiac( cusps );

  expect(zodiac.getHouseNumber(house)).toBe(expected);
}) 
									
test.each([
  [266.1234, "266° 7' 24"],
  [0.1234, "0° 7' 24"],
  [360.1234, "360° 7' 24"],
  [266.3251184363515, "266° 19' 30"],
])('toDMS %i', (angle, expected) => {
  const cusps = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  const zodiac = new Zodiac( cusps );

  expect(zodiac.toDMS(angle)).toBe(expected);
}) 

describe('dignities', () => {
  const cusps = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  const reporter = new Zodiac( cusps );	
  test('Sun', () => {            
    expect( reporter.getDignities( {name:"Sun", position:120} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
    expect( reporter.getDignities( {name:"Sun", position:300} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Sun", position:150} )).toStrictEqual([default_settings.DIGNITIES_FALL] );
    expect( reporter.getDignities( {name:"Sun", position:18} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );					
    expect( reporter.getDignities( {name:"Sun", position:0}, [{"name":"Sun", "position":0, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Moon', () => {
    expect( reporter.getDignities( {name:"Moon", position:90} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
    expect( reporter.getDignities( {name:"Moon", position:270} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Moon", position:210} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					
    expect( reporter.getDignities( {name:"Moon", position:30} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );					
    expect( reporter.getDignities( {name:"Moon", position:32}, [{"name":"Moon", "position":33, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Mercury', () => {
    expect( reporter.getDignities( {name:"Mercury", position:60} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );									
    expect( reporter.getDignities( {name:"Mercury", position:240} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Mercury", position:330} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					
    expect( reporter.getDignities( {name:"Mercury", position:150} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Mercury", position:156}, [{"name":"Mercury", "position":155, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Venus', () => {
    expect( reporter.getDignities( {name:"Venus", position:30} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );									
    expect( reporter.getDignities( {name:"Venus", position:180} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );

    expect( reporter.getDignities( {name:"Venus", position:0} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Venus", position:210} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );

    expect( reporter.getDignities( {name:"Venus", position:150} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					

    expect( reporter.getDignities( {name:"Venus", position:330} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Venus", position:357.987}, [{"name":"Venus", "position":357, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Mars', () => {

    expect( reporter.getDignities( {name:"Mars", position:0} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );									
    expect( reporter.getDignities( {name:"Mars", position:210} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
   
    expect( reporter.getDignities( {name:"Mars", position:30} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Mars", position:180} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
   
    expect( reporter.getDignities( {name:"Mars", position:90} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					
   
    expect( reporter.getDignities( {name:"Mars", position:270} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Mars", position:298}, [{"name":"Mars", "position":298, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Jupiter', () => {
    expect( reporter.getDignities( {name:"Jupiter", position:240} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );									
    expect( reporter.getDignities( {name:"Jupiter", position:330} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );

    expect( reporter.getDignities( {name:"Jupiter", position:60} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Jupiter", position:150} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );

    expect( reporter.getDignities( {name:"Jupiter", position:270} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					

    expect( reporter.getDignities( {name:"Jupiter", position:90} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Jupiter", position:105}, [{"name":"Jupiter", "position":105, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Saturn', () => {
    expect( reporter.getDignities( {name:"Saturn", position:300} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
   
    expect( reporter.getDignities( {name:"Saturn", position:90} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Saturn", position:120} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
   
    expect( reporter.getDignities( {name:"Saturn", position:0} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					
   
    expect( reporter.getDignities( {name:"Saturn", position:180} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Saturn", position:201}, [{"name":"Saturn", "position":201, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Uranus', () => {
    expect( reporter.getDignities( {name:"Uranus", position:300} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
    expect( reporter.getDignities( {name:"Uranus", position:120} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Uranus", position:30} )).toStrictEqual([default_settings.DIGNITIES_FALL] );					
    expect( reporter.getDignities( {name:"Uranus", position:210} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );					
    expect( reporter.getDignities( {name:"Uranus", position:218}, [{"name":"Uranus", "position":218, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Neptune', () => {
    expect( reporter.getDignities( {name:"Neptune", position:330} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
    expect( reporter.getDignities( {name:"Neptune", position:150} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );
    expect( reporter.getDignities( {name:"Neptune", position:60} )).toStrictEqual([default_settings.DIGNITIES_FALL] );
    expect( reporter.getDignities( {name:"Neptune", position:300} )).toStrictEqual([default_settings.DIGNITIES_FALL] );
        
    expect( reporter.getDignities( {name:"Neptune", position:120} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );					
    expect( reporter.getDignities( {name:"Neptune", position:240} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Neptune", position:241}, [{"name":"Neptune", "position":241, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })

  test('Pluto', () => {
    expect( reporter.getDignities( {name:"Pluto", position:210} )).toStrictEqual([default_settings.DIGNITIES_RULERSHIP] );
    expect( reporter.getDignities( {name:"Pluto", position:30} )).toStrictEqual([default_settings.DIGNITIES_DETRIMENT] );					
    expect( reporter.getDignities( {name:"Pluto", position:180} )).toStrictEqual([default_settings.DIGNITIES_FALL] );																						
    expect( reporter.getDignities( {name:"Pluto", position:0} )).toStrictEqual([default_settings.DIGNITIES_EXALTATION] );
    expect( reporter.getDignities( {name:"Pluto", position:18}, [{"name":"Pluto", "position":18, "orbit":2}] )).toStrictEqual([default_settings.DIGNITIES_EXALTATION, default_settings.DIGNITIES_EXACT_EXALTATION] );
  })
})
