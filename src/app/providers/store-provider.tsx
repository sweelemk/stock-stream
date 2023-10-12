import { Provider } from "react-redux";
import { store } from "store";

export const StoreProvider = (component: () => React.ReactNode) => () => {
  return (
    <Provider store={store}>
      {component()}
    </Provider>
  );
};