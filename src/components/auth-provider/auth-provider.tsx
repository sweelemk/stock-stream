import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useActionCreators, useAppDispatch } from "store/hooks";
import { appActions, getUser } from "store/models";
import { authActions } from "./model";
import { supabase } from "shared/api";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const auth = useActionCreators(authActions);
  const app = useActionCreators(appActions);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        auth.setUser({
          id: session.user.id,
          email: session.user.email!,
        });

        navigate("/dashboard");

        dispatch(getUser(session.user.id))
          .unwrap()
          .finally(() => {
            app.changeLoadingStatus(false);
          });
      } else {
        app.changeLoadingStatus(false);
      }
    });

    const {data: { subscription }} = supabase.auth.onAuthStateChange(() => {
      // console.log(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  return children;
};

export default AuthProvider;
