import { AuthProvider } from "components/auth-provider";

export const RouterProvider = (component: () => React.ReactNode) => () => {
  return (
    <AuthProvider>
      {component()}
    </AuthProvider>
  );
};