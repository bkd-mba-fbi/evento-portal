interface Window {
  eventoPortal: Readonly<{
    settings: Readonly<{
      apiServer: Readonly<string>;
      oAuthServer: Readonly<string>;
      oAuthClientId: Readonly<string>;
    }>;
  }>;
}
