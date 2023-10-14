import Router from "pages";
import { withProviders, ThemeProvider } from "app/providers";

const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <Router />
    </ThemeProvider>
  );
};

const AppWithProviders = withProviders(App);
export default AppWithProviders;
