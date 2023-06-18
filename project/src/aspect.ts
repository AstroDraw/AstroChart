import type { Points } from './radix'
import type { AspectData, Settings } from './settings'
import { radiansToDegree } from './utils'

export interface FormedAspect {
  point: {
    name: string
    position: number
  }
  toPoint: {
    name: string
    position: number
  }
  aspect: {
    name: string
    degree: number
    color: string
    orbit: number
  }
  precision: string
}

const DEFAULT_ASPECTS = {
  conjunction: { degree: 0, orbit: 10, color: 'transparent' },
  square: { degree: 90, orbit: 8, color: '#FF4500' },
  trine: { degree: 120, orbit: 8, color: '#27AE60' },
  opposition: { degree: 180, orbit: 10, color: '#27AE60' }
}
/**
   * Aspects calculator
   *
   * @class
   * @public
   * @constructor
   * @param {AspectPoints} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
   * @param {Object | null } settings
   */
class AspectCalculator {
  settings: Partial<Settings>
  toPoints: Points
  context: this
  constructor (toPoints: Points, settings?: Partial<Settings>) {
    if (toPoints == null) {
      throw new Error('Param \'toPoint\' must not be empty.')
    }

    this.settings = settings ?? {}
    this.settings.ASPECTS = settings?.ASPECTS ?? DEFAULT_ASPECTS

    this.toPoints = toPoints

    this.context = this
  }

  /**
   * Getter for this.toPoints
   * @see constructor
   *
   * @return {Object}
   */
  getToPoints (): Points {
    return this.toPoints
  }

  /**
   * Radix aspects
   *
   * In radix calculation is the param "points" the same as param "toPoints" in constructor
   * , but without special points such as: As,Ds, Mc, Ic, ...
   *
   * @param {Object} points; {"Sun":[0], "Moon":[90]}
   *
   * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
   */
  radix (points: Points): FormedAspect[] {
    if (points == null) {
      return []
    }

    const aspects: FormedAspect[] = []

    for (const point in points) {
      if (points.hasOwnProperty(point)) {
        for (const toPoint in this.toPoints) {
          if (this.toPoints.hasOwnProperty(toPoint)) {
            if (point !== toPoint) {
              for (const aspect in this.settings.ASPECTS) {
                if (this.hasAspect(points[point][0], this.toPoints[toPoint][0], this.settings.ASPECTS[aspect])) {
                  aspects.push(
                    {
                      aspect: { name: aspect, degree: this.settings.ASPECTS[aspect].degree, orbit: this.settings.ASPECTS[aspect].orbit, color: this.settings.ASPECTS[aspect].color },
                      point: { name: point, position: points[point][0] },
                      toPoint: { name: toPoint, position: this.toPoints[toPoint][0] },
                      precision: this.calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.ASPECTS[aspect].degree).toFixed(4)
                    }
                  )
                }
              }
            }
          }
        }
      }
    }

    return aspects.sort(this.compareAspectsByPrecision)
  }

  /**
   * Transit aspects
   *
   * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]};
   * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
   */
  transit (points: Points): FormedAspect[] {
    if (points == null) {
      return []
    }

    const aspects = []

    for (const point in points) {
      if (points.hasOwnProperty(point)) {
        for (const toPoint in this.toPoints) {
          if (this.toPoints.hasOwnProperty(toPoint)) {
            for (const aspect in this.settings.ASPECTS) {
              if (this.hasAspect(points[point][0], this.toPoints[toPoint][0], this.settings.ASPECTS[aspect])) {
                let precision = this.calcPrecision(points[point][0], this.toPoints[toPoint][0], this.settings.ASPECTS[aspect].degree)

                // -1 : is approaching to aspect
                // +1 : is moving away
                if (this.isTransitPointApproachingToAspect(this.settings.ASPECTS[aspect].degree, this.toPoints[toPoint][0], points[point][0])) {
                  precision *= -1
                }

                // if transit has speed value && transit is retrograde
                if (points[point][1] && points[point][1] < 0) {
                  precision *= -1
                }

                aspects.push(
                  {
                    aspect: { name: aspect, degree: this.settings.ASPECTS[aspect].degree, orbit: this.settings.ASPECTS[aspect].orbit, color: this.settings.ASPECTS[aspect].color },
                    point: { name: point, position: points[point][0] },
                    toPoint: { name: toPoint, position: this.toPoints[toPoint][0] },
                    precision: precision.toFixed(4)
                  }
                )
              }
            }
          }
        }
      }
    }

    return aspects.sort(this.compareAspectsByPrecision)
  }

  /*
  * @private
   * @param {double} point
   * @param {double} toPoint
   * @param {Array} aspects; [DEGREE, ORBIT]
   */
  hasAspect (point: number, toPoint: number, aspect: AspectData): boolean {
    let result = false

    let gap = Math.abs(point - toPoint)

    if (gap > radiansToDegree(Math.PI)) {
      gap = radiansToDegree(2 * Math.PI) - gap
    }

    const orbitMin = aspect.degree - (aspect.orbit / 2)
    const orbitMax = aspect.degree + (aspect.orbit / 2)

    if (orbitMin <= gap && gap <= orbitMax) {
      result = true
    }

    return result
  }

  /*
  * @private
   * @param {Object} pointAngle
   * @param {Object} toPointAngle
   * @param {double} aspectDegree;
   */
  calcPrecision (point: number, toPoint: number, aspect: number): number {
    let gap = Math.abs(point - toPoint)

    if (gap > radiansToDegree(Math.PI)) {
      gap = radiansToDegree(2 * Math.PI) - gap
    }
    return Math.abs(gap - aspect)
  }

  /*
   * Calculate direction of aspect
   * whether the transiting planet is approaching or is falling
   * @private
   *
   * //TODO
   * This method is tested, and for tests gives the right results.
   * But the code is totally unclear. It needs to be rewritten.
   * @param {double} aspect - aspect degree; for example 90.
   * @param {double} toPoint - angle of standing point
   * @param {double} point - angle of transiting planet
   * @return {boolean}
   */
  isTransitPointApproachingToAspect (aspect: number, toPoint: number, point: number): boolean {
    if ((point - toPoint) > 0) {
      if ((point - toPoint) > radiansToDegree(Math.PI)) {
        point = (point + aspect) % radiansToDegree(2 * Math.PI)
      } else {
        toPoint = (toPoint + aspect) % radiansToDegree(2 * Math.PI)
      }
    } else {
      if ((toPoint - point) > radiansToDegree(Math.PI)) {
        toPoint = (toPoint + aspect) % radiansToDegree(2 * Math.PI)
      } else {
        point = (point + aspect) % radiansToDegree(2 * Math.PI)
      }
    }

    let _point = point
    let _toPoint = toPoint

    const difference = _point - _toPoint

    if (Math.abs(difference) > radiansToDegree(Math.PI)) {
      _point = toPoint
      _toPoint = point
    }

    return (_point - _toPoint < 0)
  }

  /*
   * Aspects comparator
   * by precision
   * @private
   * @param {Object} a
   * @param {Object} b
   */
  compareAspectsByPrecision (a: FormedAspect, b: FormedAspect): number {
    return parseFloat(a.precision) - parseFloat(b.precision)
  }
}

export default AspectCalculator
