import "dotenv/config";
export default class ConfigHelper {
    private static _CONFIGS;
    /**
     * Reading the service configuration by key
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    static read(path: string): any;
    /**
     * Reading the service configuration by key, return default value if not found
     * @param path The path to sprcific configuration key
     * @param defaultValue The default value will be returned if the configuration not found
     * @returns The configuration value
     * @example
     * ConfigHelper.readWithDefault("server.port", 3107);
     */
    static readWithDefault(path: string, defaultValue: any): any;
}
//# sourceMappingURL=configHelper.d.ts.map