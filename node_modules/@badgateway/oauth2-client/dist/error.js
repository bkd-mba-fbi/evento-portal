"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth2Error = void 0;
/**
 * An error class for any error the server emits.
 *
 * The 'code' property will have the oauth2 error type,
 * such as:
 * - invalid_request
 * - invalid_client
 * - invalid_grant
 * - unauthorized_client
 * - unsupported_grant_type
 * - invalid_scope
 */
class OAuth2Error extends Error {
    constructor(message, oauth2Code, httpCode) {
        super(message);
        this.oauth2Code = oauth2Code;
        this.httpCode = httpCode;
    }
}
exports.OAuth2Error = OAuth2Error;
//# sourceMappingURL=error.js.map