import Transit from './transit';
import SVG from './svg';
import { Settings } from './settings';
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
    data: any;
    paper: SVG;
    cx: number;
    cy: number;
    radius: number;
    locatedPoints: any[];
    rulerRadius: number;
    pointRadius: number;
    toPoints: any;
    shift: number;
    universe: Element;
    context: this;
    constructor(paper: SVG, cx: number, cy: number, radius: number, data: Object, settings: Settings);
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
    drawPoints: () => void;
    drawAxis: () => void;
    /**
     * Draw cusps
     */
    drawCusps: () => void;
    /**
     * Draw aspects
     * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
     */
    aspects: (customAspects: any) => any;
    /**
     * Add points of interest for aspects calculation
     * @param {Obect} points, {"As":[0],"Ic":[90],"Ds":[180],"Mc":[270]}
     * @see (this.settings.AspectCalculator( toPoints) )
     */
    addPointsOfInterest: (points: {
        [x: string]: any;
    }) => any;
    drawRuler: () => void;
    /**
     * Draw circles
     */
    drawCircles: () => void;
    /**
     * Display transit horoscope
     *
     * @param {Object} data
     * @example
     *	{
     *		"planets":{"Moon":[0], "Sun":[30],  ... },
     *		"cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274],	*
     *	}
     *
     * @return {this.settings.Transit} transit
     */
    transit: (data: any) => Transit;
}
export default Radix;
