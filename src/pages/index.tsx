import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./dashboard";
import { SignIn } from "./auth";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Router;
