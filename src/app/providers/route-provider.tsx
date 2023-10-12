import { BrowserRouter } from "react-router-dom";

export const RouterProvider = (component: () => React.ReactNode) => () => {
  return (
    <BrowserRouter>
      {component()}
    </BrowserRouter>
  );
};
