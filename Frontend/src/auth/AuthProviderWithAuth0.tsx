import React, { useEffect } from "react";
import { AppState, Auth0Provider , useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "../api/MyUserApi";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error("Unable to initialize Auth0. Missing required environment variables.");
  }

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || "/");
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <AuthUserSync>{children}</AuthUserSync>
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;

// Sync Auth0 user with backend
const AuthUserSync: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();
  const hasCreatedUser = React.useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
      });
      hasCreatedUser.current = true;
    }
  }, [createUser, user]);

  return <>{children}</>;
};
