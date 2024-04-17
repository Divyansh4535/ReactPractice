import { useState } from "react";
// import NavBar from "./Components/Route/NavBar";
// import Routing from "./utils/Routing";
// import axios from "axios";
// import Show from "./Components/FApi/show";
// import Home from "./Components/FApi/Home";
// import Service from "./Components/FApi/service";
import { Link, Route, Routes } from "react-router-dom";
import HomeC from "./Components/ContextApi/home";
import User from "./Components/ContextApi/user";
import About from "./Components/ContextApi/About";
import UserDetails from "./Components/ContextApi/userdetails"
import Routing from "./utils/Routing";


function App() {
  // const AddProduct = () => {
  //   const api = "https://fakestoreapi.com/products";
  //   axios
  //     .post(api, {
  //       title: "test product",
  //       price: 13.5,
  //       description: "lorem ipsum set",
  //       image: "https://i.pravatar.cc",
  //       category: "electronic",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };
  
  return (
    <>
      {/* <NavBar />
        <Routing/> */}
      <div className="pt-[1%] px-[3%]">
        {/* <Show /> */}
        {/* <div className="p-5">
        <br />
         <br />
        <button onClick={AddProduct} className="rounded px-5 py-2 bg-red-400">
          Save Product Api
        </button>
        <hr className="my-10 font-bold" />
      </div>  */}
        {/* <nav className=" flex h-16 text-2xl items-center  justify-center gap-20 font-bold   ">
          <Link to="/ ">Home </Link>
          <Link to="/show ">Show </Link>
          <Link to="/service ">Service </Link>
        </nav>
        <hr /> */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<Show />} />
          <Route path="/service" element={<Service />} />
        </Routes> */}
      </div>

      <div>
            <nav className="mt-3 flex items-center justify-center gap-20 font-bold text-2xl"> 
              <Link to="/">Home</Link>
              <Link to="/user">User</Link>
              <Link to="/about"> About</Link>
            </nav>
            {/* <Routes>
            <Route path="/" element={<HomeC />} />
            <Route path="/user" element={<User />} /> 
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/about" element={<About />} />
            </Routes> */}


            {/* <NavBar /> */}
            <Routing />
      </div>
    </>
  );
}

export default App;
