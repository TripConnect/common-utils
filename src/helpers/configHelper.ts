import "dotenv/config";

import request from "sync-request";

export default class ConfigHelper {

    private static configs: Record<string, any>;

    /**
     * Reading the service configurations
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    public static read(path: string): any {
        if (!ConfigHelper.configs) {
            let configHost = process.env.NODE_ENV === "development" ? "localhost" : "config-service";
            let serviceName = process.env.SERVICE_NAME;
            let configUrl = `http://${configHost}:31070/configs/${serviceName}`;
            let resp = request("GET", configUrl);
            if (resp.isError()) {
                throw new Error("The configuration cannot loaded");
            }
            return JSON.parse(resp.getBody("utf-8"));
        }

        return path.split('.').reduce((obj, key) => obj?.[key], ConfigHelper.configs);
    }
}
