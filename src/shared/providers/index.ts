import { compose } from "@reduxjs/toolkit";
import { RouterProvider } from "./route-provider";
export * from "./theme-provider";

export const withProviders = (component: () => React.ReactNode) =>
  compose(RouterProvider)(component);