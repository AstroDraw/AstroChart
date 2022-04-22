declare class Timer {
    debug: boolean;
    callback: (delta: number) => void;
    boundTick_: FrameRequestCallback;
    lastGameLoopFrame: number;
    requestID_: number;
    constructor(callback: (delta: number) => void, debug: boolean);
    start(): void;
    stop(): void;
    isRunning(): boolean;
    tick(): void;
}
export default Timer;
