import React from "react";
import Home from "../Components/Route/home";
import Contact from "../Components/Route/Contact";
import About from "../Components/Route/About";
import User from "../Components/Route/User";
import { Route, Routes } from "react-router-dom";
import UserDetails from "../Components/Route/UserDetails";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Routing;
