import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import AuthProviderWithAuth0 from "./auth/AuthProviderWithAuth0.tsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_REDIRECT_URI;


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProviderWithAuth0
        domain={domain}
        clientId={clientId} 
        redirectUri= {redirectUri}
      >
        <AppRoutes />
      </AuthProviderWithAuth0>
    </Router>
  </StrictMode>
);
