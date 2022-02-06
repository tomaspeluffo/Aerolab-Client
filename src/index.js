import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./font/SFProText-Regular.ttf";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsState from "./context/Products/ProductsState";
import CartState from "./context/Cart/CartState";

ReactDOM.render(
  <React.StrictMode>
    <ProductsState>
      <CartState>
        <App />
      </CartState>
    </ProductsState>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
