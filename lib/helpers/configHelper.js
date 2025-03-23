"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sync_request_1 = require("sync-request");
class ConfigHelper {
    /**
     * Reading the service configurations
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    static read(path) {
        if (!ConfigHelper.configs) {
            let configHost = process.env.NODE_ENV === "development" ? "localhost" : "config-service";
            let serviceName = process.env.SERVICE_NAME;
            let configUrl = `http://${configHost}:31070/configs/${serviceName}`;
            let resp = (0, sync_request_1.default)("GET", configUrl);
            if (resp.isError()) {
                throw new Error("The configuration cannot loaded");
            }
            return JSON.parse(resp.getBody("utf-8"));
        }
        return path.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], ConfigHelper.configs);
    }
}
exports.default = ConfigHelper;
