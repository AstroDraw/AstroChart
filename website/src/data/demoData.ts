/**
 * Demo data module for AstroChart examples.
 * Contains sample birth chart and transit data for component examples.
 */

export interface AstroData {
  planets: Record<string, number[]>
  cusps: number[]
}

/**
 * Default radix (birth chart) data.
 * Represents a sample birth chart with 15 planets and 12 cusps.
 * Planet positions are in degrees.
 * Based on: 1990-04-03, 14:30 UTC, New York, NY
 */
export const defaultRadixData: AstroData = {
  planets: {
    Sun: [12.45, 0],        // Aries 12°45'
    Moon: [145.67, 0],      // Leo 25°40'
    Mercury: [8.23, 0],     // Aries 8°14'
    Venus: [35.12, 0],      // Taurus 5°07'
    Mars: [162.34, 0],      // Virgo 12°20'
    Jupiter: [298.56, 0],   // Aquarius 28°34'
    Saturn: [245.78, 0],    // Sagittarius 5°47'
    Uranus: [178.90, 0],    // Libra 28°54'
    Neptune: [210.12, 0],   // Scorpio 0°07'
    Pluto: [238.34, 0],     // Sagittarius 28°20'
    Chiron: [125.67, 0],    // Leo 5°40'
    NorthNode: [95.45, 0],  // Gemini 5°27'
    SouthNode: [275.45, 0], // Sagittarius 5°27'
    Lilith: [145.23, 0],    // Leo 25°14'
    Vertex: [325.67, 0]     // Aquarius 25°40'
  },
  cusps: [
    315.45,  // Asc (Aquarius 15°27')
    35.67,   // 2nd (Taurus 5°40')
    65.23,   // 3rd (Gemini 5°14')
    92.45,   // IC (Gemini 2°27')
    125.67,  // 5th (Leo 5°40')
    155.89,  // 6th (Virgo 15°53')
    135.45,  // Dsc (Leo 15°27') - opposite Asc
    215.67,  // 8th (Scorpio 5°40')
    245.23,  // 9th (Sagittarius 5°14')
    272.45,  // MC (Sagittarius 2°27')
    305.67,  // 11th (Aquarius 5°40')
    335.89   // 12th (Pisces 15°53')
  ]
}

/**
 * Default transit data.
 * Represents current planetary positions for transit chart overlay.
 * Date: Example 2024-01-15, 10:00 UTC
 */
export const defaultTransitData: AstroData = {
  planets: {
    Sun: [25.34, 0],        // Aquarius 25°20'
    Moon: [182.45, 0],      // Libra 2°27'
    Mercury: [42.67, 0],    // Taurus 12°40'
    Venus: [58.12, 0],      // Taurus 28°07'
    Mars: [198.34, 0],      // Libra 18°20'
    Jupiter: [328.56, 0],   // Pisces 28°34'
    Saturn: [288.78, 0],    // Capricorn 8°47'
    Uranus: [298.90, 0],    // Aquarius 28°54'
    Neptune: [325.12, 0],   // Pisces 25°07'
    Pluto: [300.34, 0],     // Aquarius 0°20'
    Chiron: [168.67, 0],    // Virgo 18°40'
    NorthNode: [62.45, 0],  // Taurus 2°27'
    SouthNode: [242.45, 0], // Sagittarius 2°27'
    Lilith: [215.23, 0],    // Scorpio 5°14'
    Vertex: [45.67, 0]      // Taurus 15°40'
  },
  cusps: [
    315.45,  // Asc (Aquarius 15°27') - same as radix for comparison
    35.67,   // 2nd (Taurus 5°40')
    65.23,   // 3rd (Gemini 5°14')
    92.45,   // IC (Gemini 2°27')
    125.67,  // 5th (Leo 5°40')
    155.89,  // 6th (Virgo 15°53')
    135.45,  // Dsc (Leo 15°27')
    215.67,  // 8th (Scorpio 5°40')
    245.23,  // 9th (Sagittarius 5°14')
    272.45,  // MC (Sagittarius 2°27')
    305.67,  // 11th (Aquarius 5°40')
    335.89   // 12th (Pisces 15°53')
  ]
}

/**
 * Sample data combining both radix and transit for animation examples.
 */
export const animationData = {
  radix: defaultRadixData,
  transit: defaultTransitData
}
