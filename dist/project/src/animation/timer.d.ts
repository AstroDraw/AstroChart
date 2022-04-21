declare class Timer {
    debug: boolean;
    callback: any;
    boundTick_: any;
    constructor(callback: any, debug: boolean);
    start: () => void;
    stop: () => void;
    isRunning: () => boolean;
    tick: () => void;
}
export default Timer;
