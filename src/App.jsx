import React, { useEffect, useContext } from "react";
import ProductsContext from "./context/Products/ProductsContext";
import "./App.css";
import Header from "./Layout/Header";
import ProductsStore from "./components/ProductsStore";


function App() {
  const { getProducts, productsList } = useContext(ProductsContext);



  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <Header />
      <div className="app-container py-1 px-3 ">
        <h1 className="font-weight-medium font-size-big">Almacén</h1>
        <ProductsStore productsList={productsList} />
      </div>
    </>
  );
}

export default App;
