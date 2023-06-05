export type TokenPayload = {
  instanceId: string;
  scope: string;
  roles: ReadonlyArray<string>;
  issueTime: number;
  expirationTime: number;
};

export type RawTokenPayload = {
  instance_id: string;
  scope: string;
  // culture_info: string,
  // id_mandant: string,
  // id_person: string;
  // fullname: string;
  roles: string;
  // token_id: string
  nbf: number;
  exp: number;
};

export function getTokenPayload(token: string): TokenPayload {
  const {
    instance_id: instanceId,
    scope,
    roles,
    nbf: issueTime,
    exp: expirationTime,
  } = parseTokenPayload(token);
  return {
    instanceId,
    scope,
    roles: roles.split(";"),
    issueTime,
    expirationTime,
  };
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
