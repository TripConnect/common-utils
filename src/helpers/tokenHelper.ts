import * as jwt from 'jsonwebtoken';

export type JwtBody = {
    userId: string
}

export default class TokenHelper {

    private static SECRET = process.env.JWT_SECRET_KEY || "";

    /**
     * Verify jwt token to get
     * @param token The jwt token
     * @returns The jwt body from given valid token, otherwise null returned
     */
    public static verify(token: string): JwtBody | null {
        try {
            return jwt.verify(token, TokenHelper.SECRET) as JwtBody;
        } catch (ignored) {
            return null;
        }

    }

    /**
     * Sign jwt token
     * @param token The jwt token
     * @returns The jwt token
     */
    public static sign(user: JwtBody): string {
        let accessToken = jwt.sign(user, TokenHelper.SECRET);
        return accessToken;
    }

}
