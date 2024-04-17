import {  React , useEffect, useState } from "react";
import axios from "../../utils/Axio";

const show = () =>{
  const [product, setProduct] = useState([]);
  const getProduct = () => {
    // const api = "https://fakestoreapi.com/products";

    // npm install asios
    axios
      // .get(api)
      .get("/products")
      .then((product) => {
        console.log(product);
        setProduct(product.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="p-5">
        {/* <button onClick={getProduct} className="rounded px-5 text-xl font-semibold text-zinc-100 py-2 bg-red-600">
            Call Product Api
          </button> */}
        <div className="flex m-2   flex-wrap">
          {product.length > 0 ? (
            product.map((p) => (
              <div
                key={p.id}
                className="rounded w-52 flex flex-col  items-center justify-center gap-3 m-1 p-5 bg-zinc-100 "
              >
                <div>
                  <h2 className="font-bold">[{p.id}] Title : </h2> {p.category}
                </div>
                <div className="h-46 w-46  rounded-lg overflow-hidden  ">              
                  <img
                    className="h-full w-full object-center object-cover "
                    src={p.image}
                    alt=""
                  />
                </div>
                <div>
                  <h1>
                    <b> Price : </b> ${p.price}
                  </h1>
                </div>
              </div>
            ))
          ) : (
            <h1 className="m-5 text-3xl font-semibold  text-zinc-500 text-center">
              Loading...............
            </h1>
          )}
        </div>
      </div>
    </>
  );
}
export default show;
