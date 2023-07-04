import type { AstroData, LocatedPoint } from './radix'
import type { Settings } from './settings'

/**
   * Calculate position of the point on the circle.
   *
   * @param {int} cx - center x
   * @param {int} cy - center y
   * @param {int} radius
   * @param {double} angle - degree
   *
   * @return {{x: number, y: number}} Obj - {x:10, y:20}
   */
export const getPointPosition = (cx: number, cy: number, radius: number, angle: number, astrology: { SHIFT_IN_DEGREES: number }): { x: number; y: number } => {
  const angleInRadius = (astrology.SHIFT_IN_DEGREES - angle) * Math.PI / 180
  const xPos = cx + radius * Math.cos(angleInRadius)
  const yPos = cy + radius * Math.sin(angleInRadius)
  return { x: xPos, y: yPos }
}

export const degreeToRadians = (degrees: number): number => degrees * Math.PI / 180

export const radiansToDegree = (radians: number): number => radians * 180 / Math.PI

interface TextLocation { text: string; x: number; y: number }

/**
   * Calculates positions of the point description
   *
   * @param {Object} point
   * @param {Array<String>} texts
   *
   * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
   */
export const getDescriptionPosition = function (point: { x: number; y: number }, texts: string[], astrology: { COLLISION_RADIUS: number; SYMBOL_SCALE: number }): TextLocation[] {
  const RATION = 1.4
  const result: TextLocation[] = []
  const posX = point.x + (astrology.COLLISION_RADIUS / RATION * astrology.SYMBOL_SCALE)
  const posY = point.y - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)

  texts.forEach((text, idx) => {
    result.push({ text, x: posX, y: posY + (astrology.COLLISION_RADIUS / RATION * astrology.SYMBOL_SCALE * idx) })
  }, this)

  return result
}

/**
   * Checks a source data
   * @private
   *
   * @param {Object} data
   * @return {{hasError: boolean, messages: string[]}} status
   */
export const validate = (data: AstroData): { hasError: boolean; messages: string[] } => {
  const status = { hasError: false, messages: [] as string[] }

  if (data == null) {
    status.messages.push('Data is not set.')
    status.hasError = true
    return status
  }

  if (data.planets == null) {
    status.messages.push('There is not property \'planets\'.')
    status.hasError = true
  }

  for (const property in data.planets) {
    if (data.planets.hasOwnProperty(property)) {
      if (!Array.isArray(data.planets[property])) {
        status.messages.push('The planets property \'' + property + '\' has to be Array.')
        status.hasError = true
      }
    }
  }

  if (data.cusps != null && !Array.isArray(data.cusps)) {
    status.messages.push('Property \'cusps\' has to be Array.')
    status.hasError = true
  }

  if (data.cusps != null && data.cusps.length !== 12) {
    status.messages.push('Count of \'cusps\' values has to be 12.')
    status.hasError = true
  }

  return status
}

/**
   * Get empty DOMElement with ID
   *
   * @param{String} elementID
   * @param{DOMElement} parent
   * @return {DOMElement}
   */
export const getEmptyWrapper = (parent: Element, elementID: string, _paperElementId: string): Element => {
  const element = document.getElementById(elementID)
  if (element != null) {
    removeChilds(element)
    return element
  }
  const paper = document.getElementById(_paperElementId)
  if (paper == null) throw new Error('Paper element should exist')

  const wrapper = document.createElementNS(paper.namespaceURI, 'g')
  wrapper.setAttribute('id', elementID)
  parent.appendChild(wrapper)

  return wrapper
}

/**
  * Remove childs
  *
  * @param{DOMElement} parent
  */
export const removeChilds = (parent: HTMLElement): void => {
  if (parent == null) {
    return
  }

  let last
  while ((last = parent.lastChild) != null) {
    parent.removeChild(last)
  }
}

/**
   * Check circle collision between two objects
   *
    * @param {Object} circle1, {x:123, y:123, r:50}
    * @param {Object} circle2, {x:456, y:456, r:60}
    * @return {boolean}
   */
export const isCollision = (circle1: { x: number; y: number; r: number }, circle2: { x: number; y: number; r: number }): boolean => {
  // Calculate the vector between the circles’ center points
  const vx = circle1.x - circle2.x
  const vy = circle1.y - circle2.y

  const magnitude = Math.sqrt(vx * vx + vy * vy)

  // circle.radius has been set to astrology.COLLISION_RADIUS;
  const totalRadii = circle1.r + circle2.r

  return magnitude <= totalRadii
}

/**
   * Places a new point in the located list
   *
    * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
    * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96}
    * @param {Object} universe - current universe
    * @return {Array<Object>} locatedPoints
   */
export const assemble = (locatedPoints: LocatedPoint[], point: LocatedPoint, universe: { cx: number; cy: number; r: number }, astrology: Settings): LocatedPoint[] => {
  // first item
  if (locatedPoints.length === 0) {
    locatedPoints.push(point)
    return locatedPoints
  }

  if ((2 * Math.PI * universe.r) - (2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length + 2)) <= 0) {
    if (astrology.DEBUG) console.log('Universe circumference: ' + (2 * Math.PI * universe.r) + ', Planets circumference: ' + (2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) * (locatedPoints.length + 2)))
    throw new Error('Unresolved planet collision. Try change SYMBOL_SCALE or paper size.')
  }

  let hasCollision = false
  let locatedButInCollisionPoint
  locatedPoints.sort(comparePoints)
  for (let i = 0, ln = locatedPoints.length; i < ln; i++) {
    if (isCollision(locatedPoints[i], point)) {
      hasCollision = true
      locatedButInCollisionPoint = locatedPoints[i]
      locatedButInCollisionPoint.index = i

      if (astrology.DEBUG) console.log('Resolve collision: ' + locatedButInCollisionPoint.name + ' X ' + point.name)

      break
    }
  }

  if (hasCollision && locatedButInCollisionPoint != null && locatedButInCollisionPoint.index != null) {
    placePointsInCollision(locatedButInCollisionPoint, point)

    let newPointPosition = getPointPosition(universe.cx, universe.cy, universe.r, locatedButInCollisionPoint.angle, astrology)
    locatedButInCollisionPoint.x = newPointPosition.x
    locatedButInCollisionPoint.y = newPointPosition.y

    newPointPosition = getPointPosition(universe.cx, universe.cy, universe.r, point.angle, astrology)
    point.x = newPointPosition.x
    point.y = newPointPosition.y

    // remove locatedButInCollisionPoint from locatedPoints
    locatedPoints.splice(locatedButInCollisionPoint.index, 1)

    // call recursive
    locatedPoints = assemble(locatedPoints, locatedButInCollisionPoint, universe, astrology)
    locatedPoints = assemble(locatedPoints, point, universe, astrology)
  } else {
    locatedPoints.push(point)
  }
  locatedPoints.sort(comparePoints)
  return locatedPoints
}

/**
   * Sets the positions of two points that are in collision.
   *
   * @param {Object} p1, {..., pointer:123, angle:456}
   * @param {Object} p2, {..., pointer:23, angle:56}
   */
export const placePointsInCollision = (p1: LocatedPoint, p2: LocatedPoint): void => {
  const step = 1
  let adjustedP1Pointer = p1.pointer === undefined ? p1.angle : p1.pointer
  let adjustedP2Pointer = p2.pointer === undefined ? p2.angle : p2.pointer

  // solving problems with zero crossing
  if (Math.abs(adjustedP1Pointer - adjustedP2Pointer) > 180) {
    adjustedP1Pointer = (adjustedP1Pointer + 180) % 360
    adjustedP2Pointer = (adjustedP2Pointer + 180) % 360
  }

  if (adjustedP1Pointer <= adjustedP2Pointer) {
    p1.angle = p1.angle - step
    p2.angle = p2.angle + step
  } else if (adjustedP1Pointer >= adjustedP2Pointer) {
    p1.angle = p1.angle + step
    p2.angle = p2.angle - step
  }

  p1.angle = (p1.angle + 360) % 360
  p2.angle = (p2.angle + 360) % 360
}

/**
   * Check collision between angle and object
   *
    * @param {double} angle
    * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
    * @return {boolean}
   */
export const isInCollision = (angle: number, points: string | any[], astrology: Settings): boolean => {
  const deg360 = radiansToDegree(2 * Math.PI)
  const collisionRadius = (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE) / 2

  let result = false
  for (let i = 0, ln = points.length; i < ln; i++) {
    if (Math.abs(points[i].angle - angle) <= collisionRadius ||
      (deg360 - Math.abs(points[i].angle - angle)) <= collisionRadius) {
      result = true
      break
    }
  }

  return result
}

interface InitialEndPosition {
  startX: number
  startY: number
  endX: number
  endY: number
}

/**
   * Calculates positions of the dashed line passing through the obstacle.
   *   *
   * @param {double} centerX
   * @param {double} centerY
   * @param {double} angle - line angle
    * @param {double} lineStartRadius
    * @param {double} lineEndRadius
    * @param {double} obstacleRadius
    * @param {Array<Object>} obstacles, [{x:456, y:456, r:60, angle:123}, ...]
    *
    * @return {Array<any>} [{startX:1, startY:1, endX:4, endY:4}, {startX:6, startY:6, endX:8, endY:8}]
   */
export const getDashedLinesPositions = (centerX: number, centerY: number, angle: number, lineStartRadius: number, lineEndRadius: number, obstacleRadius: number, obstacles: LocatedPoint[], astrology: Settings): InitialEndPosition[] => {
  let startPos
  let endPos
  const result = []

  if (isInCollision(angle, obstacles, astrology)) {
    startPos = getPointPosition(centerX, centerY, lineStartRadius, angle, astrology)
    endPos = getPointPosition(centerX, centerY, obstacleRadius - (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle, astrology)
    result.push({ startX: startPos.x, startY: startPos.y, endX: endPos.x, endY: endPos.y })

    // the second part of the line when is space
    if ((obstacleRadius + 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE)) < lineEndRadius) {
      startPos = getPointPosition(centerX, centerY, obstacleRadius + 2 * (astrology.COLLISION_RADIUS * astrology.SYMBOL_SCALE), angle, astrology)
      endPos = getPointPosition(centerX, centerY, lineEndRadius, angle, astrology)
      result.push({ startX: startPos.x, startY: startPos.y, endX: endPos.x, endY: endPos.y })
    }
  } else {
    startPos = getPointPosition(centerX, centerY, lineStartRadius, angle, astrology)
    endPos = getPointPosition(centerX, centerY, lineEndRadius, angle, astrology)
    result.push({ startX: startPos.x, startY: startPos.y, endX: endPos.x, endY: endPos.y })
  }

  return result
}

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
export const getRulerPositions = (centerX: number, centerY: number, startRadius: number, endRadius: number, startAngle: number, astrology: { SHIFT_IN_DEGREES: number }): InitialEndPosition[] => {
  const result = []

  const rayRadius = endRadius
  const halfRayRadius = (startRadius <= endRadius) ? rayRadius - (Math.abs(endRadius - startRadius) / 2) : rayRadius + (Math.abs(endRadius - startRadius) / 2)

  for (let i = 0, start = 0, step = 5; i < 72; i++) {
    const angle = start + startAngle
    const startPos = getPointPosition(centerX, centerY, startRadius, angle, astrology)
    const endPos = getPointPosition(centerX, centerY, (i % 2 === 0 ? rayRadius : halfRayRadius), angle, astrology)
    result.push({ startX: startPos.x, startY: startPos.y, endX: endPos.x, endY: endPos.y })

    start += step
  }

  return result
}

/**
  * Compare two points
  *
  * @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
  * @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
  * @return
  */
export const comparePoints = (pointA: { angle: number }, pointB: { angle: number }): number => {
  return pointA.angle - pointB.angle
}
