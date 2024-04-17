import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const {name} = useParams()
  const Navigate = useNavigate()
  console.log(name);
  const goback=()=>{
    Navigate(-1);
  }

  return (
    <div>
      <div className="mt-10 ">
        <h1 className="text-5xl text-red-400 mb-5">USER DETAILS</h1>
        <h1 className="text-3xl ">hlo !! 👋🏻 {name}</h1>
        <button onClick={goback} className="bg-red-300 p-2 m-2"> Go back</button>
      </div>
    </div>
  );
};

export default UserDetails;
