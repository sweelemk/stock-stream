import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { SignInPage, RegisterationPage } from "./auth";
import { PrivateRoute } from "components/private-route";
import AppLayout from "shared/layouts/app-layout";
import AuthLayout from "shared/layouts/auth-layout";
import { useStateSelector } from "store/hooks";
import { isAppLoading } from "store/models";

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
              <Route path="/" element={<Dashboard />} />
            </Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<RegisterationPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default Router;
