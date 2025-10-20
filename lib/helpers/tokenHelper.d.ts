export type JwtBody = {
    userId: string;
};
export default class TokenHelper {
    private static get SECRET();
    /**
     * Verify jwt token to get
     * @param token The jwt token
     * @returns The jwt body from given valid token, otherwise null returned
     */
    static verify(token: string): JwtBody | null;
    /**
     * Sign jwt token
     * @param user The jwt token body
     * @returns The jwt token
     */
    static sign(user: JwtBody): string;
}
//# sourceMappingURL=tokenHelper.d.ts.map