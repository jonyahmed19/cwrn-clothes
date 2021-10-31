import React from "react";
import ReactDOM from "react-dom";
import { store, persiststore} from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persiststore}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
