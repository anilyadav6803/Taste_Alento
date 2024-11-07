import { Auth0Provider, AppState, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useCreateMyUser } from "../api/MyUserApi";

type AuthProviderWithAuth0Props = {
  children: React.ReactNode;
};

const AuthProviderWithAuth0 = ({ children }: AuthProviderWithAuth0Props) => {
  const navigate = useNavigate();

  // Load Auth0 environment variables
  const { createUser } = useCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI || window.location.origin; // Fallback to current origin if undefined
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE; // Optional

  // Ensure required variables are set, otherwise throw an error
  if (!domain || !clientId) {
    throw new Error("Missing required Auth0 environment variables.");
  }

  // Redirect callback function
  const onRedirectCallback = async (appState?: AppState, user?: User) => {
    // Check if user object has the required properties
    if (user?.sub && user?.email) {
      // Call createUser mutation asynchronously
      await createUser({
        auth0Id: user.sub,
        email: user.email,
      });
    }

    // Redirect to the target URL after login, if specified
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience: audience || undefined, // Include audience only if defined
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthProviderWithAuth0;
