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
    data: any;
    paper: any;
    cx: any;
    cy: any;
    toPoints: any;
    radius: any;
    settings: any;
    rulerRadius: number;
    pointRadius: any;
    shift: any;
    universe: HTMLElement;
    context: this;
    constructor(radix: {
        paper: any;
        cx: any;
        cy: any;
        toPoints: any;
        radius: any;
        shift: any;
    }, data: any, settings: any);
    /**
     * Draw background
     */
    drawBg: () => void;
    /**
         * Draw planets
         *
         * @param{undefined | Object} planetsData, posible data planets to draw
         */
    drawPoints: (planetsData?: any) => void;
    /**
     * Draw circles
     */
    drawCircles: () => void;
    /**
     * Draw cusps
     * @param{undefined | Object} cuspsData, posible data cusps to draw
     */
    drawCusps: (cuspsData?: any) => void;
    drawRuler: () => void;
    /**
     * Draw aspects
     * @param{Array<Object> | null} customAspects - posible custom aspects to draw;
     */
    aspects: (customAspects: any) => any;
    /**
     * Moves points to another position.
     *
        * @param {Object} data - planets target positions.
        * @param {Integer} duration - in seconds
        * @param {boolean} isReverse
        * @param {Function | undefined} callbck - the function executed at the end of animation
     */
    animate: (data: Object, duration: any, isReverse: boolean, callback: () => void) => any;
}
export default Transit;
