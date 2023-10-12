
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "./model";
import { useStateSelector } from "store/hooks";

const PrivateRoute: React.FC = () => {
  const location = useLocation();
  const auth = useStateSelector(isAuthenticated);

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" replace state={{ from: location  }} />
  );
};

export default PrivateRoute;
