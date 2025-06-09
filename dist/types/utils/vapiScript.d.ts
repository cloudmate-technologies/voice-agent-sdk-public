declare global {
    interface Window {
        vapiSDK: {
            run: (config: {
                assistant: string;
                apiKey: string;
                config: any;
            }) => any;
        };
        vapiInstance: any;
    }
}
export declare let news: Node | null;
export declare const initVapiScript: (d: Document, t: string) => void;
