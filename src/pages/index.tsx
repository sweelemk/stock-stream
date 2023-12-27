import { Navigate, Route, Routes } from "react-router-dom";
import { SignInPage, RegisterationPage } from "./auth";
import { PrivateRoute } from "components/private-route";
import AppLayout from "shared/layouts/app-layout";
import AuthLayout from "shared/layouts/auth-layout";
import { useStateSelector } from "store/hooks";
import { isAppLoading } from "store/models";
import { ROUTES } from "shared/constants/routes";

const Router = () => {
  const appLoading = useStateSelector(isAppLoading);
  return (
    <>
      {appLoading ? (
        <div>Loading....</div>
      ) : (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<AppLayout />}>
              {ROUTES.map((route) => {
                const Component = route.component;
                return (
                  <Route
                    key={route.id}
                    path={route.path}
                    element={<Component />}
                  />
                );
              })}
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<RegisterationPage />} />
          </Route>
          <Route path='*' element={<Navigate to='/dashboard' />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
