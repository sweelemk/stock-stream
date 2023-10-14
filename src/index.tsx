import ReactDOM from "react-dom/client";
import { AppWithProviders } from "app";
import "app/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppWithProviders />
);
