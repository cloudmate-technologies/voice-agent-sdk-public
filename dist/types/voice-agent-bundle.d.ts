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
