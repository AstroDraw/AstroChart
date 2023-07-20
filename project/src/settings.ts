import type SVG from './svg'

export interface AspectData { degree: number; orbit: number; color: string }
export type Aspect = Record<string, AspectData>
export interface Dignity {
  name: string
  position: number
  orbit: number
}

export interface Settings {
  SYMBOL_SCALE: number
  COLOR_BACKGROUND: string
  POINTS_COLOR: string
  POINTS_TEXT_SIZE: number
  POINTS_STROKE: number
  SIGNS_COLOR: string
  SIGNS_STROKE: number
  MARGIN: number
  PADDING: number
  ID_CHART: string
  ID_RADIX: string
  ID_TRANSIT: string
  ID_ASPECTS: string
  ID_POINTS: string
  ID_SIGNS: string
  ID_CIRCLES: string
  ID_AXIS: string
  ID_CUSPS: string
  ID_RULER: string
  ID_BG: string
  CIRCLE_COLOR: string
  CIRCLE_STRONG: number
  LINE_COLOR: string
  INDOOR_CIRCLE_RADIUS_RATIO: number
  INNER_CIRCLE_RADIUS_RATIO: number
  RULER_RADIUS: number
  SYMBOL_SUN: string
  SYMBOL_MOON: string
  SYMBOL_MERCURY: string
  SYMBOL_VENUS: string
  SYMBOL_MARS: string
  SYMBOL_JUPITER: string
  SYMBOL_SATURN: string
  SYMBOL_URANUS: string
  SYMBOL_NEPTUNE: string
  SYMBOL_PLUTO: string
  SYMBOL_CHIRON: string
  SYMBOL_LILITH: string
  SYMBOL_NNODE: string
  SYMBOL_SNODE: string
  SYMBOL_FORTUNE: string
  SYMBOL_AS: string
  SYMBOL_DS: string
  SYMBOL_MC: string
  SYMBOL_IC: string
  SYMBOL_AXIS_FONT_COLOR: string
  SYMBOL_AXIS_STROKE: number
  SYMBOL_CUSP_1: string
  SYMBOL_CUSP_2: string
  SYMBOL_CUSP_3: string
  SYMBOL_CUSP_4: string
  SYMBOL_CUSP_5: string
  SYMBOL_CUSP_6: string
  SYMBOL_CUSP_7: string
  SYMBOL_CUSP_8: string
  SYMBOL_CUSP_9: string
  SYMBOL_CUSP_10: string
  SYMBOL_CUSP_11: string
  SYMBOL_CUSP_12: string
  CUSPS_STROKE: number
  CUSPS_FONT_COLOR: string
  SYMBOL_ARIES: string
  SYMBOL_TAURUS: string
  SYMBOL_GEMINI: string
  SYMBOL_CANCER: string
  SYMBOL_LEO: string
  SYMBOL_VIRGO: string
  SYMBOL_LIBRA: string
  SYMBOL_SCORPIO: string
  SYMBOL_SAGITTARIUS: string
  SYMBOL_CAPRICORN: string
  SYMBOL_AQUARIUS: string
  SYMBOL_PISCES: string
  SYMBOL_SIGNS: string[]
  COLOR_ARIES: string
  COLOR_TAURUS: string
  COLOR_GEMINI: string
  COLOR_CANCER: string
  COLOR_LEO: string
  COLOR_VIRGO: string
  COLOR_LIBRA: string
  COLOR_SCORPIO: string
  COLOR_SAGITTARIUS: string
  COLOR_CAPRICORN: string
  COLOR_AQUARIUS: string
  COLOR_PISCES: string
  COLORS_SIGNS: string[]
  CUSTOM_SYMBOL_FN: null | ((name: string, x: number, y: number, context: SVG) => Element)
  SHIFT_IN_DEGREES: number
  STROKE_ONLY: boolean
  ADD_CLICK_AREA: boolean
  COLLISION_RADIUS: number
  ASPECTS: Aspect
  SHOW_DIGNITIES_TEXT: boolean
  DIGNITIES_RULERSHIP: string
  DIGNITIES_DETRIMENT: string
  DIGNITIES_EXALTATION: string
  DIGNITIES_EXACT_EXALTATION: string
  DIGNITIES_FALL: string
  DIGNITIES_EXACT_EXALTATION_DEFAULT: Dignity[]
  ANIMATION_CUSPS_ROTATION_SPEED: number
  DEBUG: boolean
}

const settings: Settings = {

  // Scale of symbols
  SYMBOL_SCALE: 1,

  // BG color
  COLOR_BACKGROUND: '#fff',

  // Color of planet's symbols
  POINTS_COLOR: '#000',

  // Size of description text next to the planet: angle, retrograde, dignities, ...
  POINTS_TEXT_SIZE: 8,

  // Points strength of lines
  POINTS_STROKE: 1.8,

  // Font color of signs symbols
  SIGNS_COLOR: '#000',

  // Signs strength of lines
  SIGNS_STROKE: 1.5,

  // Chart margin
  MARGIN: 50, // px

  // Chart Padding
  PADDING: 18, // px

  // Module wrapper element ID
  ID_CHART: 'astrology',

  // Radix chart element ID
  ID_RADIX: 'radix',

  // Transit chart element ID
  ID_TRANSIT: 'transit',

  // Aspects wrapper element ID
  ID_ASPECTS: 'aspects',

  // Aspects wrapper element ID
  ID_POINTS: 'planets',

  // Signs wrapper element ID
  ID_SIGNS: 'signs',

  // Circles wrapper element ID
  ID_CIRCLES: 'circles',

  // Axis wrapper element ID
  ID_AXIS: 'axis',

  // Cusps wrapper element ID
  ID_CUSPS: 'cusps',

  // Cusps wrapper element ID
  ID_RULER: 'ruler',

  // Background wrapper element ID
  ID_BG: 'bg',

  // Color of circles in charts
  CIRCLE_COLOR: '#333',

  // Circles strength of lines
  CIRCLE_STRONG: 2,

  // Color of lines in charts
  LINE_COLOR: '#333',

  // radius / INDOOR_CIRCLE_RADIUS_RATIO
  INDOOR_CIRCLE_RADIUS_RATIO: 2,

  // radius - radius/INNER_CIRCLE_RADIUS_RATIO
  INNER_CIRCLE_RADIUS_RATIO: 8,

  // ( radius / INNER_CIRCLE_RADIUS_RATIO ) / RULER_RADIUS
  RULER_RADIUS: 4,

  // Points
  SYMBOL_SUN: 'Sun',
  SYMBOL_MOON: 'Moon',
  SYMBOL_MERCURY: 'Mercury',
  SYMBOL_VENUS: 'Venus',
  SYMBOL_MARS: 'Mars',
  SYMBOL_JUPITER: 'Jupiter',
  SYMBOL_SATURN: 'Saturn',
  SYMBOL_URANUS: 'Uranus',
  SYMBOL_NEPTUNE: 'Neptune',
  SYMBOL_PLUTO: 'Pluto',
  SYMBOL_CHIRON: 'Chiron',
  SYMBOL_LILITH: 'Lilith',
  SYMBOL_NNODE: 'NNode',
  SYMBOL_SNODE: 'SNode',
  SYMBOL_FORTUNE: 'Fortune',

  // Axis
  SYMBOL_AS: 'As',
  SYMBOL_DS: 'Ds',
  SYMBOL_MC: 'Mc',
  SYMBOL_IC: 'Ic',

  SYMBOL_AXIS_FONT_COLOR: '#333',
  SYMBOL_AXIS_STROKE: 1.6,

  // Cusps
  SYMBOL_CUSP_1: '1',
  SYMBOL_CUSP_2: '2',
  SYMBOL_CUSP_3: '3',
  SYMBOL_CUSP_4: '4',
  SYMBOL_CUSP_5: '5',
  SYMBOL_CUSP_6: '6',
  SYMBOL_CUSP_7: '7',
  SYMBOL_CUSP_8: '8',
  SYMBOL_CUSP_9: '9',
  SYMBOL_CUSP_10: '10',
  SYMBOL_CUSP_11: '11',
  SYMBOL_CUSP_12: '12',

  // Cusps strength of lines
  CUSPS_STROKE: 1,
  CUSPS_FONT_COLOR: '#000',

  // Signs
  SYMBOL_ARIES: 'Aries',
  SYMBOL_TAURUS: 'Taurus',
  SYMBOL_GEMINI: 'Gemini',
  SYMBOL_CANCER: 'Cancer',
  SYMBOL_LEO: 'Leo',
  SYMBOL_VIRGO: 'Virgo',
  SYMBOL_LIBRA: 'Libra',
  SYMBOL_SCORPIO: 'Scorpio',
  SYMBOL_SAGITTARIUS: 'Sagittarius',
  SYMBOL_CAPRICORN: 'Capricorn',
  SYMBOL_AQUARIUS: 'Aquarius',
  SYMBOL_PISCES: 'Pisces',
  SYMBOL_SIGNS: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],

  // http://www.rapidtables.com/web/color/html-color-codes.htm
  COLOR_ARIES: '#FF4500',
  COLOR_TAURUS: '#8B4513',
  COLOR_GEMINI: '#87CEEB',
  COLOR_CANCER: '#27AE60',
  COLOR_LEO: '#FF4500',
  COLOR_VIRGO: '#8B4513',
  COLOR_LIBRA: '#87CEEB',
  COLOR_SCORPIO: '#27AE60',
  COLOR_SAGITTARIUS: '#FF4500',
  COLOR_CAPRICORN: '#8B4513',
  COLOR_AQUARIUS: '#87CEEB',
  COLOR_PISCES: '#27AE60',
  COLORS_SIGNS: ['#FF4500', '#8B4513', '#87CEEB', '#27AE60', '#FF4500', '#8B4513', '#87CEEB', '#27AE60', '#FF4500', '#8B4513', '#87CEEB', '#27AE60'],

  CUSTOM_SYMBOL_FN: null,

  // 0 degree is on the West
  SHIFT_IN_DEGREES: 180,

  // No fill, only stroke
  STROKE_ONLY: false,

  ADD_CLICK_AREA: false,

  // Planets collision circle radius for SYMBOL_SCALE : 1
  // Scaling changes the collision radius
  COLLISION_RADIUS: 10, // px

  // Aspects
  ASPECTS: {
    conjunction: { degree: 0, orbit: 10, color: 'transparent' },
    square: { degree: 90, orbit: 8, color: '#FF4500' },
    trine: { degree: 120, orbit: 8, color: '#27AE60' },
    opposition: { degree: 180, orbit: 10, color: '#27AE60' }
  },

  // Dignities
  SHOW_DIGNITIES_TEXT: true,
  DIGNITIES_RULERSHIP: 'r',
  DIGNITIES_DETRIMENT: 'd',
  DIGNITIES_EXALTATION: 'e',
  DIGNITIES_EXACT_EXALTATION: 'E',
  DIGNITIES_FALL: 'f',

  // Source: Aleister Crowley
  DIGNITIES_EXACT_EXALTATION_DEFAULT: [
    { name: 'Sun', position: 19, orbit: 2 }, // 19 Arise
    { name: 'Moon', position: 33, orbit: 2 }, // 3 Taurus
    { name: 'Mercury', position: 155, orbit: 2 }, // 15 Virgo
    { name: 'Venus', position: 357, orbit: 2 }, // 27 Pisces
    { name: 'Mars', position: 298, orbit: 2 }, // 28 Capricorn
    { name: 'Jupiter', position: 105, orbit: 2 }, // 15 Cancer
    { name: 'Saturn', position: 201, orbit: 2 }, // 21 Libra
    { name: 'NNode', position: 63, orbit: 2 } // 3 Geminy
  ],

  // 0 - 4
  ANIMATION_CUSPS_ROTATION_SPEED: 2,

  DEBUG: false
}

const default_settings = settings
export default default_settings
