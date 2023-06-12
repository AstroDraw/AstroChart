import type { Settings } from './settings';
import Radix, type { AstroData } from './radix';
import SVG from './svg';
/**
 * Displays astrology charts.
 *
 * @class
 * @public
 * @constructor
 * @param {String} elementId - root DOMElement
 * @param {int} width
 * @param {int} height
 * @param {Object} settings
 */
declare class Chart {
    paper: SVG;
    cx: number;
    cy: number;
    radius: number;
    settings: Settings;
    constructor(elementId: string, width: number, height: number, settings?: Partial<Settings>);
    /**
   * Display radix horoscope
   *
   * @param {Object} data
   * @example
   *  {
   *    "points":{"Moon":[0], "Sun":[30],  ... },
   *    "cusps":[300, 340, 30, 60, 75, 90, 116, 172, 210, 236, 250, 274]
   *  }
   *
   * @return {Radix} radix
   */
    radix(data: AstroData): Radix;
    /**
     * Scale chart
     *
     * @param {int} factor
     */
    scale(factor: number): void;
    /**
     * Draw the symbol on the axis.
     * For debug only.
     *
     */
    calibrate(): Chart;
}
export default Chart;
