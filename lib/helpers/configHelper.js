"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sync_request_1 = require("sync-request");
class ConfigHelper {
    static load() {
        let configHost = process.env.NODE_ENV === "development" ? "localhost" : "config-service";
        let serviceName = process.env.SERVICE_NAME || "unknown";
        let configUrl = `http://${configHost}:31070/configs/${serviceName}`;
        let resp = (0, sync_request_1.default)("GET", configUrl);
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
    static read(path) {
        if (!ConfigHelper.configs) {
            throw new Error("ConfigHelper is not loaded already");
        }
        let configValue = path.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], ConfigHelper.configs);
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
        if (!ConfigHelper.configs) {
            throw new Error("ConfigHelper is not loaded already");
        }
        let configValue = path.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], ConfigHelper.configs).data;
        return configValue !== null && configValue !== void 0 ? configValue : defaultValue;
    }
}
exports.default = ConfigHelper;
