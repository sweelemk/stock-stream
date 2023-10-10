import Router from "pages";
import { withProviders, ThemeProvider } from "shared/providers";

const App = () => {
  return (
    <ThemeProvider storageKey="theme">
      <Router />
    </ThemeProvider>
  );
};

const AppWithProviders = withProviders(App);
export default AppWithProviders;
