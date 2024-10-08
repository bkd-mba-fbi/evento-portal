type RawTokenPayload = {
  instance_id: string;
  scope: string;
  culture_info: string;
  // id_mandant: string,
  // id_person: string;
  // fullname: string;
  // token_id: string
  nbf: number;
  exp: number;
  substitution_id?: string;
  holder_roles?: string;
};

export type TokenPayload = {
  instanceId: string;
  scope: string;
  locale: string;
  issueTime: number;
  expirationTime: number;
  substitutionId?: number;
  substitutionRoles?: ReadonlyArray<string>;
};

export function getTokenPayload(token: string): TokenPayload {
  const {
    instance_id: instanceId,
    scope,
    culture_info: locale,
    nbf: issueTime,
    exp: expirationTime,
    substitution_id: substitutionId,
    holder_roles: holderRoles,
  } = parseTokenPayload(token);
  return {
    instanceId,
    scope,
    locale,
    issueTime,
    expirationTime,
    substitutionId: substitutionId ? parseInt(substitutionId, 10) : undefined,
    substitutionRoles: holderRoles ? holderRoles.split(";") : undefined,
  };
}

export const TOKEN_ALMOST_EXPIRY_MS = 10 * 1000;

/**
 * Returns true if the given token matches the given scope/locale & is
 * not expired to decide whether or not an access token can be used or
 * should be refreshed.
 */
export function isValidToken(
  token: string | null,
  scope: string,
  locale: string,
): token is string {
  if (!token) return false;

  const payload = getTokenPayload(token);
  return (
    payload.scope === scope &&
    payload.locale === locale &&
    !isTokenExpired(payload)
  );
}

export function isTokenExpired(token: TokenPayload | null): boolean {
  if (!token) return true;

  const { expirationTime } = token;
  return expirationTime * 1000 < Date.now();
}

/**
 * Returns false if the given token is expired or expires within the next 10
 * seconds.
 */
export function isTokenAlmostExpired(token: TokenPayload | null): boolean {
  if (!token) return true;

  const { expirationTime } = token;
  return expirationTime * 1000 - TOKEN_ALMOST_EXPIRY_MS < Date.now();
}

/**
 * Returns the time (in milliseconds) the token will expire from now (0
 * if already expired).
 */
export function getTokenExpireIn(token: TokenPayload): number {
  const { expirationTime } = token;
  return Math.max(expirationTime * 1000 - Date.now(), 0);
}

function parseTokenPayload(token: string): RawTokenPayload {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
}
