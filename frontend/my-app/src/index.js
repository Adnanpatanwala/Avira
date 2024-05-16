import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductContex from "./Context/ProductContex";
import CartContex from "./Context/CartContext";
import Filter from "./Context/FilterContext"
import reportWebVitals from "./reportWebVitals";
import AuthenticationContext from "./Context/AuthContext"
import AddressContext from "./Context/AddressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthenticationContext>
  <ProductContex>
    <CartContex>
      <Filter>
        <AddressContext>
      <App />
        </AddressContext>
      </Filter>
    </CartContex>
  </ProductContex>
  </AuthenticationContext>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
