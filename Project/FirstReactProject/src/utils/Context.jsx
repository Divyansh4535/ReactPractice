import { createContext, useEffect, useState } from "react";
import axios from "../utils/axios";

export const ProductContext = createContext();

const Context = (props) => {
  const [Product, setProduct] = useState(
    JSON.parse(localStorage.getItem("Product")) || null
  );

  // const getProduct = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     console.log(data);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getProduct();
  // }, []);

  return (
    <ProductContext.Provider value={[Product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
