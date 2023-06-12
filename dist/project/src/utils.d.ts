import type { AstroData, LocatedPoint } from './radix';
import type { Settings } from './settings';
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
export declare const getPointPosition: (cx: number, cy: number, radius: number, angle: number, astrology: {
    SHIFT_IN_DEGREES: number;
}) => {
    x: number;
    y: number;
};
export declare const degreeToRadians: (degrees: number) => number;
export declare const radiansToDegree: (radians: number) => number;
interface TextLocation {
    text: string;
    x: number;
    y: number;
}
/**
   * Calculates positions of the point description
   *
   * @param {Object} point
   * @param {Array<String>} texts
   *
   * @return {Array<Object>} [{text:"abc", x:123, y:456}, {text:"cvb", x:456, y:852}, ...]
   */
export declare const getDescriptionPosition: (point: {
    x: number;
    y: number;
}, texts: string[], astrology: {
    COLLISION_RADIUS: number;
    SYMBOL_SCALE: number;
}) => TextLocation[];
/**
   * Checks a source data
   * @private
   *
   * @param {Object} data
   * @return {{hasError: boolean, messages: string[]}} status
   */
export declare const validate: (data: AstroData) => {
    hasError: boolean;
    messages: string[];
};
/**
   * Get empty DOMElement with ID
   *
   * @param{String} elementID
   * @param{DOMElement} parent
   * @return {DOMElement}
   */
export declare const getEmptyWrapper: (parent: Element, elementID: string, _paperElementId: string) => Element;
/**
  * Remove childs
  *
  * @param{DOMElement} parent
  */
export declare const removeChilds: (parent: HTMLElement) => void;
/**
   * Check circle collision between two objects
   *
    * @param {Object} circle1, {x:123, y:123, r:50}
    * @param {Object} circle2, {x:456, y:456, r:60}
    * @return {boolean}
   */
export declare const isCollision: (circle1: {
    x: number;
    y: number;
    r: number;
}, circle2: {
    x: number;
    y: number;
    r: number;
}) => boolean;
/**
   * Places a new point in the located list
   *
    * @param {Array<Object>} locatedPoints, [{name:"Mars", x:123, y:123, r:50, ephemeris:45.96}, {name:"Sun", x:1234, y:1234, r:50, ephemeris:100.96}]
    * @param {Object} point, {name:"Venus", x:78, y:56, r:50, angle:15.96}
    * @param {Object} universe - current universe
    * @return {Array<Object>} locatedPoints
   */
export declare const assemble: (locatedPoints: LocatedPoint[], point: LocatedPoint, universe: {
    cx: number;
    cy: number;
    r: number;
}, astrology: Settings) => LocatedPoint[];
/**
   * Sets the positions of two points that are in collision.
   *
   * @param {Object} p1, {..., pointer:123, angle:456}
   * @param {Object} p2, {..., pointer:23, angle:56}
   */
export declare const placePointsInCollision: (p1: LocatedPoint, p2: LocatedPoint) => void;
/**
   * Check collision between angle and object
   *
    * @param {double} angle
    * @param {Array<Object>} points, [{x:456, y:456, r:60, angle:123}, ...]
    * @return {boolean}
   */
export declare const isInCollision: (angle: number, points: string | any[], astrology: Settings) => boolean;
interface InitialEndPosition {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
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
export declare const getDashedLinesPositions: (centerX: number, centerY: number, angle: number, lineStartRadius: number, lineEndRadius: number, obstacleRadius: number, obstacles: LocatedPoint[], astrology: Settings) => InitialEndPosition[];
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
export declare const getRulerPositions: (centerX: number, centerY: number, startRadius: number, endRadius: number, startAngle: number, astrology: {
    SHIFT_IN_DEGREES: number;
}) => InitialEndPosition[];
/**
  * Compare two points
  *
  * @param {Object} pointA, {name:"Venus", x:78, y:56, r:50, angle:15.96}
  * @param {Object} pointB, {name:"Mercury", x:78, y:56, r:50, angle:20.26}
  * @return
  */
export declare const comparePoints: (pointA: {
    angle: number;
}, pointB: {
    angle: number;
}) => number;
export {};
