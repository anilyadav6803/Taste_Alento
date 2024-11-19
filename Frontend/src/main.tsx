
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import { QueryClient } from "react-query";

import { QueryClientProvider } from "react-query";

import { Auth0Provider } from "@auth0/auth0-react";
import { Toaster } from "sonner";
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
      scope: "25ioan016@rkgit.edu.in",
      audience: "https://webcodes.us.auth0.com/api/v2/",
      response_type: "code",
      grant_type: "authorization_code",
     
    }}
  >
    <AppRoutes />
    < Toaster visibleToasts={1} position="bottom-right" richColors/>
  </Auth0Provider>
  </QueryClientProvider>
  </Router>
);
