interface Window {
  eventoPortal: Readonly<{
    settings: Readonly<{
      apiServer: Readonly<string>;
      oAuthServer: Readonly<string>;
      oAuthPrefix: Readonly<string>;
      oAuthClientId: Readonly<string>;
      notificationRefreshTime: Readonly<number>;
    }>;
  }>;
}
