export const entry: string;
export namespace module {
    const rules: {
        test: RegExp;
        use: string;
        exclude: RegExp[];
    }[];
}
export namespace resolve {
    const extensions: string[];
}
export const mode: string;
export namespace output {
    const clean: boolean;
    const path: string;
    const filename: string;
    namespace library {
        const name: string;
        const type: string;
    }
}
