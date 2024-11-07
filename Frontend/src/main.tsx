
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import { QueryClient } from "react-query";

import { QueryClientProvider } from "react-query";

import { Auth0Provider } from "@auth0/auth0-react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <Router>
  <QueryClientProvider client={queryClient} >
  <Auth0Provider
    domain="webcodes.us.auth0.com"
    clientId="TycumvVaZDDKWuHlmOLaPEFlkQUgOsaj"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppRoutes />
  </Auth0Provider>
  </QueryClientProvider>
  </Router>
);
