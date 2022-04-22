import { Dignity, Settings } from './settings';
/**
 * Zodiac
 *
 * Gives the position of points in the zodiac.
 * Position of point in the zodiac.
 * Position of point in houses.
 * Dignities of planets.
 *
 * @class
 * @public
 * @constructor
 * @param {Array} cusps - cusprs in zodiac; [296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]
 * @param {Object | null } settings
 */
declare class Zodiac {
    cusps: number[];
    settings: Partial<Settings>;
    constructor(cusps: number[], settings?: Settings);
    /**
     * Get astrological sign
     * 1 - Arise, ... , 12 - Pisces
     *
     * @param {double} point - angle of point in circle
     * @return { \[1-9] | 1[0-2]\ }
     */
    getSign(point: number): number;
    /**
     * Is retrograde
     *
     * @param {double} speed
     * @return {boolean}
     */
    isRetrograde(speed: number): boolean;
    /**
     * Get house number
     * 1 - 12
     *
     * @param {double} point - angle of point in circle
     * @return { \[1-9] | 1[0-2]\ }
     */
    getHouseNumber(point: number): number;
    /**
         * Calculate dignities of planet
         *
         * r - Rulership
         * d - Detriment
         * e - Exaltation
         * E - Exalatation - Exact exaltation
         * f - Fall
         *
         * @param {Object} planet, { name:"Sun", position:60.2 }
         * @param {Array<Object> | null } exactExaltation - list of named angles, [{ name:"Sun", position:278, orbit:2 }, { name:"Moon", position:3, , orbit:2 }]
         * @return {Array<String>}
         */
    getDignities(planet: {
        name: string;
        position: number;
    }, exactExaltation: Dignity[], astrology: Settings): string[];
    toDMS(d: number): string;
    hasConjunction(planetPosition: number, pointPosition: number, orbit: number): boolean;
}
export default Zodiac;
