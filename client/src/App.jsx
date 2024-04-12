
import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const WebHomePage = lazy(() => import(/* webpackChunkName: "WebHomePage" */'./website/homePage/HomePage'))
const AboutUsPage = lazy(() => import(/* webpackChunkName: "WebAboutUsPage" */'./website/aboutPage/AboutUs'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<WebHomePage />} />
        <Route path="/about" element={<AboutUsPage />} />

        {/* <Route path="account-setup/*">
          <PrivateRoute allowedRoles={[ACCESSTYPE.Admin]}>
            <Route path="user-setup" element={<UserSetup />} />
            <Route path="client-setup" element={<ClientSetupNew />} />
          </PrivateRoute>
        </Route> */}
      </Routes>
    </Suspense>
  );
}

// function PrivateRoute({ allowedRoles, children, ...rest }) {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const userRole = useSelector(state => state.auth.role);

//   if (!isAuthenticated || !allowedRoles.includes(userRole)) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Route {...rest}>{children}</Route>;
// }

export default App;
