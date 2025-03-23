"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const configHelper_1 = require("./configHelper");
class TokenHelper {
    /**
     * Verify jwt token to get
     * @param token The jwt token
     * @returns The jwt body from given valid token, otherwise null returned
     */
    static verify(token) {
        try {
            return jwt.verify(token, TokenHelper.SECRET);
        }
        catch (ignored) {
            return null;
        }
    }
    /**
     * Sign jwt token
     * @param token The jwt token
     * @returns The jwt token
     */
    static sign(user) {
        let accessToken = jwt.sign(user, TokenHelper.SECRET);
        return accessToken;
    }
}
TokenHelper.SECRET = configHelper_1.default.read("jwt-secret-key");
exports.default = TokenHelper;
