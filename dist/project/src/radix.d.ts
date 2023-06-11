import { type FormedAspect } from './aspect';
import Transit from './transit';
import type SVG from './svg';
import { type Settings } from './settings';
export type Points = Record<string, number[]>;
export interface LocatedPoint {
    name: string;
    x: number;
    y: number;
    r: number;
    angle: number;
    pointer?: number;
    index?: number;
}
export interface AstroData {
    planets: Points;
    cusps: number[];
}
/**
   * Radix charts.
   *
   * @class
   * @public
   * @constructor
    * @param {this.settings.SVG} paper
   * @param {int} cx
   * @param {int} cy
   * @param {int} radius
   * @param {Object} data
   */
declare class Radix {
    settings: Settings;
    data: AstroData;
    paper: SVG;
    cx: number;
    cy: number;
    radius: number;
    locatedPoints: LocatedPoint[];
    rulerRadius: number;
    pointRadius: number;
    toPoints: Points;
    shift: number;
    universe: Element;
    context: this;
    constructor(paper: SVG, cx: number, cy: number, radius: number, data: AstroData, settings: Settings);
    /**
     * Draw background
     */
    drawBg(): void;
    /**
     * Draw universe.
     */
    drawUniverse(): void;
    /**
     * Draw points
     */
    drawPoints(): void;
    drawAxis(): void;
    /**
     * Draw cusps
     */
    drawCusps(): void;
    /**
     * Draw aspects
     * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
     */
    aspects(customAspects?: FormedAspect[] | null): Radix;
    /**
     * Add points of interest for aspects calculation
     * @param {Obect} points, {"As":[0],"Ic":[90],"Ds":[180],"Mc":[270]}
     * @see (this.settings.AspectCalculator( toPoints) )
     */
    addPointsOfInterest(points: Points): Radix;
    drawRuler(): void;
    /**
     * Draw circles
     */
    drawCircles(): void;
    /**
     * Display transit horoscope
     *
     * @param {Object} data
     * @example
     *  {
     *    "planets":{"Moon":[0], "Sun":[30],  ... },
     *    "cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],  *
     *  }
     *
     * @return {Transit} transit
     */
    transit(data: AstroData): Transit;
}
export default Radix;
