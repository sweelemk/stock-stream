import { AuthProvider as AuthProviderComponent } from "components/auth-provider";

export const AuthProvider = (component: () => React.ReactNode) => () => {
  return (
    <AuthProviderComponent>
      {component()}
    </AuthProviderComponent>
  );
};