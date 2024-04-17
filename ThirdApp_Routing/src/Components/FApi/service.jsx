// notes - react component
// component mount   - creation
// component update  - when usestate is changed or changes in view
// component unmount - deletion

import axios from "../../utils/Axio";
import { React, useEffect, useState } from "react";

function service() {
  const [First, setFirst] = useState("this is normal data ");
  const [second, setSecond] = useState("this is very large data ");

  const getusers = () => {
    // const api = "'https://fakestoreapi.com/users";
    axios
      .get("/users")
      .then((users) => {
        console.log(users);
        // setProduct(product.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getusers();
    //callback function
    console.log(" create service");
    return () => {
      console.log("delete service");
    };
  }, []); // importent =>  ",[]" isko lgane se components re-rendering nhi hoga ab only compoends updation honga

  return (
    <>
      <div>
        <h1>{First}</h1>
        <button
          onClick={() => setFirst("normal data has been changed")}
          className="mb-5 bg-red-300 p-2 rounded-lg font-semibold"
        >
          change data
        </button>
        <h1>{second}</h1>
        <button
          onClick={() => setSecond("very long data has been changed")}
          className="mb-5 bg-blue-300 p-2 rounded-lg font-semibold"
        >
          change data
        </button>
      </div>
    </>
  );
}

export default service;
