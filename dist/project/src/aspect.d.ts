import { Points } from './radix';
import { AspectData, Settings } from './settings';
export interface FormedAspect {
    point: {
        name: string;
        position: number;
    };
    toPoint: {
        name: string;
        position: number;
    };
    aspect: {
        name: string;
        degree: number;
        color: string;
        orbit: number;
    };
    precision: string;
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
declare class AspectCalculator {
    settings: Partial<Settings>;
    toPoints: Points;
    context: this;
    constructor(toPoints: Points, settings?: Settings);
    /**
     * Getter for this.toPoints
     * @see constructor
     *
     * @return {Object}
     */
    getToPoints(): Points;
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
    radix(points: Points): FormedAspect[];
    /**
     * Transit aspects
     *
     * @param {Object} points - transiting points; {"Sun":[0, 1], "Uranus":[90, -1], "NAME":[ANGLE, SPEED]};
     * @return {Array<Object>} [{"aspect":{"name":"conjunction", "degree":120}"", "point":{"name":"Sun", "position":123}, "toPoint":{"name":"Moon", "position":345}, "precision":0.5}]]
     */
    transit(points: Points): {
        aspect: {
            name: string;
            degree: number;
            orbit: number;
            color: string;
        };
        point: {
            name: string;
            position: number;
        };
        toPoint: {
            name: string;
            position: number;
        };
        precision: string;
    }[];
    hasAspect(point: number, toPoint: number, aspect: AspectData): boolean;
    calcPrecision(point: number, toPoint: number, aspect: number): number;
    isTransitPointApproachingToAspect(aspect: number, toPoint: number, point: number): boolean;
    compareAspectsByPrecision(a: FormedAspect, b: FormedAspect): number;
}
export default AspectCalculator;
