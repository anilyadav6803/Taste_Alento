import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./components/pages/Homepage";
import AuthCallbackPage from "./components/pages/AuthCallback";
import UserProfile from "./components/pages/UserPofile";
import ProtectedRoute from "./auth/ProtectedRoute";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <Homepage />
          </Layout>
        }
      />
      <Route
       path="/auth-callback" 
       element={<AuthCallbackPage />}
        />

      <Route
        path="/*"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />

      <Route element={<ProtectedRoute/>} >
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfile />
          </Layout>
        }
      />
      </Route>

     
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
