export default class ConfigHelper {
    private static configs;
    /**
     * Initial configuration data
     * @param serviceName The current service name
     * @returns The fully configuration object
     */
    static init(serviceName: string): Promise<void>;
    /**
     * Reading the service configurations
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    static read(path: string): any;
}
//# sourceMappingURL=configHelper.d.ts.map