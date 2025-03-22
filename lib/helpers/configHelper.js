"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
class ConfigHelper {
    /**
     * Initial configuration data
     * @param serviceName The current service name
     * @returns The fully configuration object
     */
    static init(serviceName) {
        return __awaiter(this, void 0, void 0, function* () {
            let address = process.env.NODE_ENV === "development" ? "localhost" : "config-service";
            yield fetch(`http://${address}:31070/configs/${serviceName}`)
                .then(resp => resp.json())
                .then(json => {
                ConfigHelper.configs = json.data;
                console.info("Configurations is loaded");
            })
                .catch(error => console.error(error));
        });
    }
    /**
     * Reading the service configurations
     * @param path The path to sprcific configuration key
     * @returns The configuration value
     * @example
     * ConfigHelper.read("server.port");
     */
    static read(path) {
        if (!ConfigHelper.configs) {
            throw new Error("The configuration is not initialized");
        }
        return path.split('.').reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], ConfigHelper.configs);
    }
}
exports.default = ConfigHelper;
