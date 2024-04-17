import React from "react";
import NavBar from "./Components/NavBar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marqess from "./Components/Marqess";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    // <>
      <div className="w-full h-screen bg-zinc-900 text-white
       font-['satoshi'] ">
        <NavBar />
        <Work />
        <Stripes />
        <Products />
        <Marqess />
        <Cards />
        <Footer />
      </div>
    // </>
  );
};

export default App;
