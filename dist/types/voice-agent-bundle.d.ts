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
        VoiceAgent: typeof VoiceAgent;
    }
}
declare class VoiceAgent {
    private static instance;
    private scriptLoaded;
    private scriptElement;
    private readonly SCRIPT_URL;
    private constructor();
    static getInstance(): VoiceAgent;
    private loadScript;
    private getElementConfig;
    init(): Promise<void>;
    destroy(): void;
}
export default VoiceAgent;
