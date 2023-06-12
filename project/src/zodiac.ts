import default_settings from './settings'
import type { Dignity, Settings } from './settings'
import { radiansToDegree } from './utils'
// Zodiac
const SIGNS_ARIES = 1
const SIGNS_TAURUS = 2
const SIGNS_GEMINI = 3
const SIGNS_CANCER = 4
const SIGNS_LEO = 5
const SIGNS_VIRGO = 6
const SIGNS_LIBRA = 7
const SIGNS_SCORPIO = 8
const SIGNS_SAGITTARIUS = 9
const SIGNS_CAPRICORN = 10
const SIGNS_AQUARIUS = 11
const SIGNS_PISCES = 12

/**
   * Zodiac
   *
   * Gives the position of points in the zodiac.
   * Position of point in the zodiac.
   * Position of point in houses.
   * Dignities of planets.
   *
   * @class
   * @public
   * @constructor
   * @param {Array} cusps - cusprs in zodiac; [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
   * @param {Object | null } settings
   */
class Zodiac {
  cusps: number[]
  settings: Settings
  constructor (cusps: number[], settings?: Settings) {
    if (cusps === null) {
      throw new Error('Param \'cusps\' must not be empty.')
    }

    if (!(Array.isArray(cusps) && cusps.length === 12)) {
      throw new Error('Param \'cusps\' is not 12 length Array.')
    }

    this.cusps = cusps
    this.settings = settings ?? default_settings
  }

  /**
   * Get astrological sign
   * 1 - Arise, ... , 12 - Pisces
   *
   * @param {double} point - angle of point in circle
   * @return { \[1-9] | 1[0-2]\ }
   */
  getSign (point: number): number {
    const angle = point % radiansToDegree(2 * Math.PI)
    return Math.floor((angle / 30) + 1)
  }

  /**
   * Is retrograde
   *
    * @param {double} speed
    * @return {boolean}
   */
  isRetrograde (speed: number): boolean {
    return speed < 0
  }

  /**
   * Get house number
   * 1 - 12
   *
   * @param {double} point - angle of point in circle
   * @return { \[1-9] | 1[0-2]\ }
   */
  getHouseNumber (point: number): number {
    const angle = point % radiansToDegree(2 * Math.PI)

    for (let i = 0, ln = this.cusps.length; i < ln; i++) {
      if (angle >= this.cusps[i] && angle < this.cusps[(i % (ln - 1)) + 1]) {
        return i + 1
      }
    }

    // cusp passes over zero
    for (let i = 0, ln = this.cusps.length; i < ln; i++) {
      if (this.cusps[i] > this.cusps[(i % (ln - 1)) + 1]) {
        return i + 1
      }
    }

    throw new Error('Oops, serious error in the method: \'astrology.Zodiac.getHouseNumber\'.')
  }

  /**
    * Calculate dignities of planet
    *
    * r - Rulership
    * d - Detriment
    * e - Exaltation
    * E - Exalatation - Exact exaltation
    * f - Fall
    *
     * @param {Object} planet, { name:"Sun", position:60.2 }
     * @param {Array<Object> | null } exactExaltation - list of named angles, [{ name:"Sun", position:278, orbit:2 }, { name:"Moon", position:3, , orbit:2 }]
     * @return {Array<String>}
    */
  getDignities (planet: { name: string; position: number }, exactExaltation?: Dignity[]): string[] {
    if (!(planet && planet.name && planet.position != null)) {
      return []
    }

    const result = []
    const sign = this.getSign(planet.position)

    const position = planet.position % radiansToDegree(2 * Math.PI)

    switch (planet.name) {
      case this.settings.SYMBOL_SUN:

        if (sign === SIGNS_LEO) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_AQUARIUS) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_ARIES) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_VIRGO) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_MOON:

        if (sign === SIGNS_CANCER) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_CAPRICORN) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_TAURUS) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_SCORPIO) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_MERCURY:

        if (sign === SIGNS_GEMINI) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_SAGITTARIUS) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_VIRGO) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_PISCES) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_VENUS:

        if (sign === SIGNS_TAURUS || sign === SIGNS_LIBRA) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_ARIES || sign === SIGNS_SCORPIO) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_PISCES) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_VIRGO) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_MARS:

        if (sign === SIGNS_ARIES || sign === SIGNS_SCORPIO) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_TAURUS || sign === SIGNS_LIBRA) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_CAPRICORN) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_CANCER) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_JUPITER:

        if (sign === SIGNS_SAGITTARIUS || sign === SIGNS_PISCES) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_GEMINI || sign === SIGNS_VIRGO) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_CANCER) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_CAPRICORN) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_SATURN:

        if (sign === SIGNS_CAPRICORN || sign === SIGNS_AQUARIUS) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_CANCER || sign === SIGNS_LEO) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_LIBRA) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_ARIES) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_URANUS:

        if (sign === SIGNS_AQUARIUS) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_LEO) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_SCORPIO) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_TAURUS) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_NEPTUNE:

        if (sign === SIGNS_PISCES) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_VIRGO) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_LEO || sign === SIGNS_SAGITTARIUS) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_AQUARIUS || sign === SIGNS_GEMINI) {
          result.push(this.settings.DIGNITIES_FALL)
        }

        break

      case this.settings.SYMBOL_PLUTO:

        if (sign === SIGNS_SCORPIO) {
          result.push(this.settings.DIGNITIES_RULERSHIP)
        } else if (sign === SIGNS_TAURUS) {
          result.push(this.settings.DIGNITIES_DETRIMENT)
        }

        if (sign === SIGNS_ARIES) {
          result.push(this.settings.DIGNITIES_EXALTATION)
        } else if (sign === SIGNS_LIBRA) {
          result.push(this.settings.DIGNITIES_FALL)
        }
        break
      default:
        break
    }

    if (exactExaltation != null && Array.isArray(exactExaltation)) {
      for (let i = 0, ln = exactExaltation.length; i < ln; i++) {
        if (planet.name === exactExaltation[i].name) {
          if (this.hasConjunction(planet.position, exactExaltation[i].position, exactExaltation[i].orbit)) {
            result.push(this.settings.DIGNITIES_EXACT_EXALTATION)
          }
        }
      }
    }

    return result
  }

  /*
   * To hours:minutes:seconds
   * @param {Double} d
   * @return {String}
   */
  toDMS (d: number): string {
    d += 0.5 / 3600.0 / 10000.0 // round to 1/1000 of a second
    const deg = parseInt(d.toString(), 10)
    d = (d - deg) * 60
    const min = parseInt(d.toString(), 10)
    const sec = parseInt(((d - min) * 60).toString(), 10)
    return deg + '° ' + min + '\' ' + sec
  }

  /*
    * Has conjunction with point
    *
    * @private
    *
    * @param {Double} planetPosition
     * @param {Double} poitPosition
     * @param {Integer} orbit
     * @return {boolean}
    */
  hasConjunction (planetPosition: number, pointPosition: number, orbit: number): boolean {
    let result = false

    const minOrbit = (pointPosition - orbit / 2) < 0
      ? radiansToDegree(2 * Math.PI) - (pointPosition - orbit / 2)
      : pointPosition - orbit / 2

    const maxOrbit = (pointPosition + orbit / 2) >= radiansToDegree(2 * Math.PI)
      ? (pointPosition + orbit / 2) - radiansToDegree(2 * Math.PI)
      : (pointPosition + orbit / 2)

    if (minOrbit > maxOrbit) { // crossing over zero
      if (minOrbit >= planetPosition && planetPosition <= minOrbit) {
        result = true
      }
    } else {
      if (minOrbit <= planetPosition && planetPosition <= maxOrbit) {
        result = true
      }
    }

    return result
  }
}

export default Zodiac
