import "dotenv/config";

import request from "sync-request";

export default class ConfigHelper {

    private static _CONFIGS: Record<string, any>;

    static {
        let configHost = process.env.NODE_ENV === "local" ? "localhost" : "config-service";
        let serviceName = process.env.SERVICE_NAME || "unknown";
        let configUrl = `http://${configHost}:31070/configs/${serviceName}`;
        let resp = request("GET", configUrl);
        if (resp.isError()) {
            throw new Error("Cannot load the configurations for " + serviceName);
        }
        ConfigHelper._CONFIGS = JSON.parse(resp.getBody("utf-8")).data;
    }

    /**
     * Read all configurations
     * @returns All of configurations
     */
    public static readAll(): Record<string, any> {
        return ConfigHelper._CONFIGS;
    }

    /**
     * Reading the service configuration by key
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    public static read(path: string): any {
        let configValue = path.split('.').reduce((obj, key) => obj?.[key], ConfigHelper._CONFIGS);
        if (!configValue) throw new Error("Config not found: " + path);
        return configValue;
    }

    /**
     * Reading the service configuration by key, return default value if not found
     * @param path The path to sprcific configuration key
     * @param defaultValue The default value will be returned if the configuration not found
     * @returns The configuration value
     * @example
     * ConfigHelper.readWithDefault("server.port", 3107);
     */
    public static readWithDefault(path: string, defaultValue: any): any {
        let configValue = path.split('.').reduce((obj, key) => obj?.[key], ConfigHelper._CONFIGS).data;
        return configValue ?? defaultValue;
    }
}
