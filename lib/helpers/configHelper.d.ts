import "dotenv/config";
export default class ConfigHelper {
    private static configs;
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