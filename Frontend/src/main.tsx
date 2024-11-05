
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";

import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Router>
  
  <Auth0Provider
    domain="webcodes.us.auth0.com"
    clientId="TycumvVaZDDKWuHlmOLaPEFlkQUgOsaj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppRoutes />
  </Auth0Provider>
  </Router>
);
