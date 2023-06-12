import type { AstroData } from '../radix'
import type { Settings } from '../settings'
import type Transit from '../transit'
import { radiansToDegree } from '../utils'
import Timer from './timer'
/**
   * Transit chart animator
   *
   * Animates the object on a circle.
   *
   * @class
   * @public
   * @constructor
   * @param {Object} from, {"Sun":[12], "Moon":[60]}
   * @param {Object} to, {"Sun":[30], "Moon":[180]}
   * @param {Object} settings, {cx:100, cy:100, radius:200, prefix:"astro-chart-"}
   */
class Animator {
  transit: Transit
  isReverse: boolean
  rotation: number
  settings: Settings
  actualPlanetPos: any
  timer: Timer
  timeSinceLoopStart: number
  context: this
  cuspsElement: any
  data: AstroData
  duration: number
  callback: () => void
  constructor (transit: Transit, settings: Settings) {
    this.transit = transit
    this.isReverse = false
    this.rotation = 0
    this.settings = settings
    // Copy data
    this.actualPlanetPos = {}
    for (const planet in this.transit.data.planets) {
      if (this.transit.data.planets.hasOwnProperty(planet)) {
        this.actualPlanetPos[planet] = this.transit.data.planets[planet]
      }
    }

    this.timer = new Timer(this.update.bind(this), this.settings.DEBUG)

    // time, passed since the start of the loop
    this.timeSinceLoopStart = 0

    this.context = this
    this.cuspsElement = null
  }

  /**
   * Animate objects

   * @param {Object} data, targetPositions
    * @param {Integer} duration - seconds
    * @param {boolean} isReverse
    * @param {Function} callbck - start et the end of animation
   */
  animate (data: any, duration: number, isReverse: boolean, callback: () => void): void {
    this.data = data
    this.duration = duration * 1000
    this.isReverse = isReverse || false
    this.callback = callback

    this.rotation = 0
    this.cuspsElement = document.getElementById(this.transit.paper._paperElementId + '-' + this.settings.ID_TRANSIT + '-' + this.settings.ID_CUSPS)

    this.timer.start()
  }

  update (deltaTime?: number): void {
    deltaTime = deltaTime ?? 1
    this.timeSinceLoopStart += deltaTime
    if (this.timeSinceLoopStart >= this.duration) {
      this.timer.stop()

      if (typeof this.callback === 'function') {
        this.callback()
      }

      return
    }

    const expectedNumberOfLoops = (this.duration - this.timeSinceLoopStart) < deltaTime
      ? 1
      : Math.round((this.duration - this.timeSinceLoopStart) / deltaTime)

    this.updatePlanets(expectedNumberOfLoops)
    this.updateCusps(expectedNumberOfLoops)
  }

  /*
   * @private
   */
  updateCusps (expectedNumberOfLoops: number): void {
    const deg360 = radiansToDegree(2 * Math.PI)
    let targetCuspAngle = this.transit.data.cusps[0] - this.data.cusps[0]

    if (targetCuspAngle < 0) {
      targetCuspAngle += deg360
    }

    // speed
    if (this.settings.ANIMATION_CUSPS_ROTATION_SPEED > 0) {
      targetCuspAngle += (this.isReverse)
        ? -1 * ((this.settings.ANIMATION_CUSPS_ROTATION_SPEED * deg360) + deg360)
        : this.settings.ANIMATION_CUSPS_ROTATION_SPEED * deg360
    }

    let difference = (this.isReverse)
      ? this.rotation - targetCuspAngle
      : targetCuspAngle - this.rotation

    // zero crossing
    if (difference < 0) {
      difference += deg360
    }

    let increment = difference / expectedNumberOfLoops

    if (this.isReverse) {
      increment *= -1
    }
    this.rotation += increment

    this.cuspsElement.setAttribute('transform', 'rotate(' + this.rotation + ' ' + this.transit.cx + ' ' + this.transit.cy + ')')

    if (expectedNumberOfLoops === 1) {
      this.cuspsElement.removeAttribute('transform')
    }
  }

  /*
   * @private
   */
  updatePlanets (expectedNumberOfLoops: number): void {
    for (const planet in this.data.planets) {
      if (this.data.planets.hasOwnProperty(planet)) {
        const actualPlanetAngle: number = this.actualPlanetPos[planet][0]
        const targetPlanetAngle: number = this.data.planets[planet][0]
        const isRetrograde = this.actualPlanetPos[planet][1] != null && this.actualPlanetPos[planet][1] < 0

        let difference
        if (this.isReverse && isRetrograde) {
          difference = targetPlanetAngle - actualPlanetAngle
        } else if (this.isReverse || isRetrograde) {
          difference = actualPlanetAngle - targetPlanetAngle
        } else {
          difference = targetPlanetAngle - actualPlanetAngle
        }

        // zero crossing
        if (difference < 0) {
          difference += radiansToDegree(2 * Math.PI)
        }

        let increment = difference / expectedNumberOfLoops

        if (this.isReverse) {
          increment *= -1
        }

        if (isRetrograde) {
          increment *= -1
        }

        let newPos = actualPlanetAngle + increment
        if (newPos < 0) {
          newPos += radiansToDegree(2 * Math.PI)
        }

        this.actualPlanetPos[planet][0] = newPos
      }
    }

    this.transit.drawPoints(this.actualPlanetPos)
  }
}

export default Animator
