import "dotenv/config";

import request from "sync-request";

export default class ConfigHelper {

    private static configs: Record<string, any>;

    public static load(): any {
        let configHost = process.env.NODE_ENV === "local" ? "localhost" : "config-service";
        let serviceName = process.env.SERVICE_NAME || "unknown";
        let configUrl = `http://${configHost}:31070/configs/${serviceName}`;
        let resp = request("GET", configUrl);
        if (resp.isError()) {
            throw new Error("Cannot load the configurations for " + serviceName);
        }
        ConfigHelper.configs = JSON.parse(resp.getBody("utf-8")).data;
    }

    /**
     * Reading the service configuration by key
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    public static read(path: string): any {
        if (!ConfigHelper.configs) {
            throw new Error("ConfigHelper is not loaded already");
        }

        let configValue = path.split('.').reduce((obj, key) => obj?.[key], ConfigHelper.configs);
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
        if (!ConfigHelper.configs) {
            throw new Error("ConfigHelper is not loaded already");
        }

        let configValue = path.split('.').reduce((obj, key) => obj?.[key], ConfigHelper.configs).data;
        return configValue ?? defaultValue;
    }
}
