import { FormedAspect } from './aspect';
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
declare class Transit {
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
    locatedPoints: LocatedPoint[];
    constructor(radix: Radix, data: AstroData, settings: Settings);
    /**
     * Draw background
     */
    drawBg(): void;
    /**
         * Draw planets
         *
         * @param{undefined | Object} planetsData, posible data planets to draw
         */
    drawPoints(planetsData?: Points): void;
    /**
     * Draw circles
     */
    drawCircles(): void;
    /**
     * Draw cusps
     * @param{undefined | Object} cuspsData, posible data cusps to draw
     */
    drawCusps(cuspsData?: number[]): void;
    drawRuler(): void;
    /**
     * Draw aspects
     * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
     */
    aspects(customAspects: FormedAspect[]): this;
    /**
     * Moves points to another position.
     *
        * @param {Object} data - planets target positions.
        * @param {Integer} duration - in seconds
        * @param {boolean} isReverse
        * @param {Function | undefined} callbck - the function executed at the end of animation
     */
    animate(data: AstroData, duration: number, isReverse: boolean, callback: () => void): this;
}
export default Transit;
