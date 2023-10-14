import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { SignIn } from "./auth";
import { PrivateRoute } from "components/private-route";

const Router = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
      <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Router;
