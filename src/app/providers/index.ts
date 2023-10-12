import { compose } from "@reduxjs/toolkit";
import { RouterProvider } from "./route-provider";
import { StoreProvider } from "./store-provider";
export * from "./theme-provider";

export const withProviders = (component: () => React.ReactNode) =>
  compose(RouterProvider, StoreProvider)(component);