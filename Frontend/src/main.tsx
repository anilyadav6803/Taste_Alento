import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes.tsx";
import AuthProviderWithAuth0 from "./auth/AuthProviderWithAuth0.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <AuthProviderWithAuth0>
        <AppRoutes />
      </AuthProviderWithAuth0>
    </Router>
  </StrictMode>
);
