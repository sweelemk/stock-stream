import { Dashboard } from "pages/dashboard";
import { Routes } from "shared/types";

export const ROUTES: Routes[] = [{
  id: 'dashboard',
  component: Dashboard,
  path: '/dashboard',
  label: "Dashboard",
  icon: 'home'
}]