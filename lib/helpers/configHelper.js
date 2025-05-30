"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sync_request_1 = require("sync-request");
class ConfigHelper {
    /**
     * Read all configurations
     * @returns All of configurations
     */
    static readAll() {
        return ConfigHelper._CONFIGS;
    }
    /**
     * Reading the service configuration by key
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    static read(path) {
        let configValue = path.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], ConfigHelper._CONFIGS);
        if (!configValue)
            throw new Error("Config not found: " + path);
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
    static readWithDefault(path, defaultValue) {
        let configValue = path.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], ConfigHelper._CONFIGS).data;
        return configValue !== null && configValue !== void 0 ? configValue : defaultValue;
    }
}
(() => {
    let configHost = process.env.NODE_ENV === "local" ? "localhost" : "config-service";
    let serviceName = process.env.SERVICE_NAME || "unknown";
    let configUrl = `http://${configHost}:31070/configs/${serviceName}`;
    let resp = (0, sync_request_1.default)("GET", configUrl);
    if (resp.statusCode < 200 || resp.statusCode >= 300) {
        throw new Error("Cannot load the configurations for " + serviceName);
    }
    ConfigHelper._CONFIGS = JSON.parse(resp.getBody("utf-8")).data;
})();
exports.default = ConfigHelper;
