import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { persist, store } from "./redux/store";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist}>
      <App />
    </PersistGate>
  </Provider>
);
