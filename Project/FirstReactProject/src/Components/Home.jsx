import { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";

const Home = () => {
  const [Product] = useContext(ProductContext);
  console.log(Product);

  const { search } = useLocation();
  console.log(search);
  const categorys = decodeURIComponent(search.split("=")[1]);
  console.log(categorys);

  const [FilterProduct, setFilterProduct] = useState(null);

  const getProductCatagory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${categorys}`);
      console.log(data);
      setFilterProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(categorys);
    if (!FilterProduct || categorys == "undefined") setFilterProduct(Product);
    if (categorys != "undefined"){
      // getProductCatagory();
      setFilterProduct(Product.filter(p=>p.category == categorys))
      }
  }, [categorys, Product]);
  console.log(FilterProduct);

  return Product ? (
    <>
      <Nav />
      <div className="bg-blue-500   flex flex-wrap gap-2 w-[80%] h-full p-5 overflow-x-hidden overflow-y-auto">
        {FilterProduct &&
          FilterProduct.map((p, i) => (
            <Link
              to={`/details/${p.id}`}
              key={i}
              className="card h-[50vh] mt-10 w-[19%] p-5 bg-gray-50 border shadow flex flex-col items-center rounded-lg justify-center "
            >
              <div
                className="w-full  bg-center h-[80%] bg-contain bg-no-repeat m-5 hover:scale-110"
                style={{
                  backgroundImage: `url(${p.image})`,
                }}
              ></div>
              <h2 className="text-sm hover:text-blue-500 ">{p.title}</h2>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
