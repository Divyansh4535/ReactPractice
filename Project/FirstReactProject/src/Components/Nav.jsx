import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [Product]=useContext(ProductContext);
  let distinct_Category = Product && Product.reduce((acc,cv) => [...acc,cv.category],[]);
    distinct_Category = [...new Set(distinct_Category)] //set of uniqe chaarectors
  console.log(distinct_Category);
  
  const color = ()=>{
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},1)`;
  }
  return (
    <>
      <nav className="bg-zinc-600 text-white text-2xl font-semibold w-[20%] h-full flex flex-col items-center p-1 ">
        <a
          href="/create"
          className="font-bold border-2 border-blue-300 text-sky-300 p-2 m-2 rounded-md hover:bg-blue-300 hover:text-white"
        >
          Add New Product
        </a>
        <hr className="my-2  " />
        <h1 className="text-xl m1-2 mb-3 font-bold w-[80%] ">Category Filter</h1>
        <div className="w-[80%]">
          {distinct_Category.map((c,i)=>(
            <Link key={i} to={`/?category=${c}`} className="mb-1 text-lg flex items-center  font-semibold hover:text-blue-200">
            <span style={{backgroundColor:color()}} className="rounded-full  p-2  mr-2 "></span>{c}
          </Link>
        ))} 
        </div>
      </nav>
    </>
  );
};

export default Nav;
