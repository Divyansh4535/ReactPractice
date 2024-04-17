import { useContext, useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
// import axios  from "../utils/axios";
import { ProductContext } from "../utils/Context";


const Details = () => {

  const [Product, setProduct] = useContext(ProductContext);
  const [Products, setProducts] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     console.log(data);
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
      if(!Products){
        setProducts(Product.filter((p)=>p.id ==id)[0]);
      }
  },[]);

  const ProductDeleteHandler = (id) =>{
     const FilteredProduct = Product.filter((p)=> p.id !== id);
     setProduct(FilteredProduct )
     localStorage.setItem("Product",JSON.stringify(FilteredProduct));
     navigate("/")
  }

  return Products ? (
    <div className="flex items-center  justify-center w-full h-screen">
      <div className=" flex gap-8 rounded-2xl items-center justify-center bg-white h-fit w-[60vw] p-5 ">
        <div className="w-[50%] overflow-hidden rounded-2xl  h-[80%]  ">
          <img
            src={`${Products.image}`}
            className="w-[95%] object-center h-[95%] object-contain object-no-repeat m-5 "
            alt=""
          />
        </div>
        <div className="w-[80%]">
          <h1 className="text-2xl  font-bold ">{Products.title}</h1>
          <h5 className="text-gray-500 font-normal  ">{Products.category}</h5>
          <h5 className="font-semibold mt-2 text-green-600 text-xl">
            ${Products.price}
          </h5>
          <h4 className=" text-xs mt-2 ">{Products.description}</h4>

          <div className="flex w-[60%] mt-5 font-bold text-lg gap-5">
            <Link to={`/edit/${Product.id}`} className="rounded-md text-blue-400 border-2 border-blue-400 px-4 py-1 hover:bg-blue-400 hover:text-white  ">
              Edit
            </Link>
            <button onClick={()=> ProductDeleteHandler(Products.id)} className="rounded-md text-red-400 border-2 border-red-400 px-3 py-1 hover:bg-red-400 hover:text-white  ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
