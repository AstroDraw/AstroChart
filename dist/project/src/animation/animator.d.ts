import { Settings } from '../settings';
import Timer from './timer';
/**
 * Transit chart animator
 *
 * Animates the object on a circle.
 *
 * @class
 * @public
 * @constructor
 * @param {Object} from, {"Sun":[12], "Moon":[60]}
 * @param {Object} to, {"Sun":[30], "Moon":[180]}
 * @param {Object} settings, {cx:100, cy:100, radius:200, prefix:"astro-chart-"}
 */
declare class Animator {
    transit: any;
    isReverse: boolean;
    rotation: number;
    settings: Settings;
    actualPlanetPos: any;
    timer: Timer;
    timeSinceLoopStart: number;
    context: this;
    cuspsElement: any;
    data: any;
    constructor(transit: any, settings: Settings);
    /**
* Animate objects

* @param {Object} data, targetPositions
* @param {Integer} duration - seconds
* @param {boolean} isReverse
* @param {Function} callbck - start et the end of animation
*/
    animate: (data: Object, duration: number, isReverse: boolean, callback: any) => void;
    update: (deltaTime: number) => void;
    updateCusps(expectedNumberOfLoops: number): void;
    updatePlanets(expectedNumberOfLoops: number): void;
}
export default Animator;
