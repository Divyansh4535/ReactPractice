// import React from "react";
import Home from "./Components/Home";
import { useLocation, Link, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";
import Create from "./Components/Create";
import Edit from "./Components/Edit";

const App = () => {
  const { search, pathname } = useLocation();
  console.log(search, pathname);
  return (
    <>
      <div className="h-screen w-screen bg-zinc-300 flex ">
        {(pathname != "/" || search.length > 0) && (
          <Link
            to="/"
            className="text-red-600 border-2 absolute border-red-600 px-3 py-1  text-xl font-bold hover:bg-red-600 hover:text-white  left-[22%] top-[2%] rounded-lg"
          >
            Home
          </Link>
        )}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
