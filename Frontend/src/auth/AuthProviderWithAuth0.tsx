import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const AuthProviderWithAuth0: React.FC<Props> = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;

  if (!domain || !clientId) {
    throw new Error("Missing environment variables");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("User", user);
    window.history.replaceState({}, document.title, appState?.returnTo || redirectUri);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithAuth0;
