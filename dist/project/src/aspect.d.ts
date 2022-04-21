import { Settings } from './settings';
/**
 * Aspects calculator
 *
 * @class
 * @public
 * @constructor
 * @param {Object} points; {"Sun":[0], "Moon":[90], "Neptune":[120], "As":[30]}
 * @param {Object | null } settings
 */
declare class AspectCalculator {
    settings: Partial<Settings>;
    toPoints: any;
    context: this;
    constructor(toPoints: any, settings?: Settings);
    /**
     * Getter for this.toPoints
     * @see constructor
     *
     * @return {Object}
     */
    getToPoints: () => any;
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
    radix: (points: any) => {
        aspect: {
            name: string;
            degree: any;
            orbit: any;
            color: any;
        };
        point: {
            name: string;
            position: any;
        };
        toPoint: {
            name: string;
            position: any;
        };
        precision: any;
    }[];
    /**
     * Transit aspects
     *
     * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]};
     * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
     */
    transit: (points: any) => {
        aspect: {
            name: string;
            degree: any;
            orbit: any;
            color: any;
        };
        point: {
            name: string;
            position: any;
        };
        toPoint: {
            name: string;
            position: any;
        };
        precision: any;
    }[];
    hasAspect(point: number, toPoint: number, aspect: {
        [x: string]: number;
    }): boolean;
    calcPrecision(point: number, toPoint: number, aspect: number): number;
    isTransitPointApproachingToAspect(aspect: any, toPoint: number, point: number): boolean;
    compareAspectsByPrecision(a: {
        precision: number;
    }, b: {
        precision: number;
    }): number;
}
export default AspectCalculator;
