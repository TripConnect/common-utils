export default class ConfigHelper {

    private static configs: Record<string, any>;

    /**
     * Initial configuration data
     * @param serviceName The current service name
     * @returns The fully configuration object
     */
    public static async init(serviceName: string) {
        let address = process.env.NODE_ENV === "development" ? "localhost" : "config-service:31070";
        let confis = await fetch(`${address}/${serviceName}`)
            .then(resp => resp.json());
        ConfigHelper.configs = confis;
    }

    /**
     * Reading the service configurations
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    public static read(path: string): any {
        if (!ConfigHelper.configs) {
            throw new Error("The configuration is not initialized");
        }

        return path.split('.').reduce((obj, key) => obj?.[key], ConfigHelper.configs);
    }
}
