export type TokenPayload = {
  instanceId: string;
  scope: string;
  locale: string;
  issueTime: number;
  expirationTime: number;
};

export type RawTokenPayload = {
  instance_id: string;
  scope: string;
  culture_info: string;
  // id_mandant: string,
  // id_person: string;
  // fullname: string;
  // token_id: string
  nbf: number;
  exp: number;
};

export function getTokenPayload(token: string): TokenPayload {
  const {
    instance_id: instanceId,
    scope,
    culture_info: locale,
    nbf: issueTime,
    exp: expirationTime,
  } = parseTokenPayload(token);
  return {
    instanceId,
    scope,
    locale,
    issueTime,
    expirationTime,
  };
}

/**
 * Returns true if the given token matches the given scope/locale & is
 * not half expired to decide wheter or not an access token can be
 * used or should be refreshed.
 */
export function isValidToken(
  token: string | null,
  scope: string,
  locale: string
): token is string {
  if (!token) return false;

  const payload = getTokenPayload(token);
  return (
    payload.scope === scope &&
    payload.locale === locale &&
    !isTokenHalfExpired(payload)
  );
}

export function isTokenExpired(token: string | null): boolean {
  if (!token) return true;

  const { expirationTime } = getTokenPayload(token);
  const now = Math.floor(Date.now() / 1000);
  return expirationTime < now;
}

export function isTokenHalfExpired(token: string | null): boolean;
export function isTokenHalfExpired(payload: TokenPayload | null): boolean;
export function isTokenHalfExpired(
  tokenOrPayload: string | TokenPayload | null
): boolean {
  if (!tokenOrPayload) return true;

  const { issueTime, expirationTime } =
    typeof tokenOrPayload === "string"
      ? getTokenPayload(tokenOrPayload)
      : tokenOrPayload;
  const validFor = expirationTime - issueTime;
  const now = Math.floor(Date.now() / 1000);

  return expirationTime <= now + validFor / 2;
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
      .join("")
  );

  return JSON.parse(jsonPayload);
}
