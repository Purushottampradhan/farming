
import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader"
const WebHomePage = lazy(() => import(/* webpackChunkName: "WebHomePage" */'./website/homePage/HomePage'))
const AboutUsPage = lazy(() => import(/* webpackChunkName: "WebAboutUsPage" */'./website/aboutPage/AboutUs'))
const override = {
  display: "block",
  position: "absolute",
  top: "44%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const routes = [
  { path: '/', element: <WebHomePage /> },
  { path: '/about', element: <AboutUsPage /> },
];

function App() {
  return (
    <Suspense fallback={<RingLoader color="#36d637" cssOverride={override} aria-label="Loading Spinner" data-testid="loader" />}>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}

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
