import React from "react";
import { AppState, Auth0Provider } from "@auth0/auth0-react";



type Props = {
  children: React.ReactNode;
};

const AuthProviderWith: React.FC<Props> = ({ children }) => {
  // Add authentication logic here if needed
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;
  if (!domain || !clientId || !audience) {
    throw new Error("Missing environment variables");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
   console.log('User', user); 
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback = {onRedirectCallback}
    >
      {children}
    
    </Auth0Provider>
  );
};

export default AuthProviderWith;
