declare global {
    interface Window {
        vapiSDK: any;
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
    private waitForSDK;
    private loadScript;
    private getElementConfig;
    init(): Promise<void>;
    destroy(): void;
}
export default VoiceAgent;
