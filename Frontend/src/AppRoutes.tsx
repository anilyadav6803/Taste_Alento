
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/layout'
import Homepage from './components/pages/Homepage'
import AuthCallbackPage from './components/pages/AuthCallback'
import UserProfile from './components/pages/UserPofile'
const AppRoutes = () => {
  return (
    <Routes>

        <Route path="/*" element={<Layout><Homepage/></Layout>} />
        <Route path = "/auth-callback" element={<AuthCallbackPage/> }></Route>
        <Route path="/user-profile" element={<Layout showHero><UserProfile/></Layout>} />
        <Route path="*" element={<Navigate to='/'/>} />

    </Routes>
  )
}

export default AppRoutes