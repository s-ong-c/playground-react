import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "mobx-react";
import MarketStore from "./stores/market";
import * as serviceWorker from "./serviceWorker";
import DevTools from "mobx-react-devtools";
// const store = createStore(rootReducer, composeWithDevTools());

const market = new MarketStore();
ReactDOM.render(
  <Provider market={market}>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
