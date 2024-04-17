import { UserContext } from "./Context";
import { useContext } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const Navigate = useNavigate();
  const { user } = useContext(UserContext);
  console.log(user[id]);
  return (
    <div className=" font-bold m-4 ">
      <h1 >{user[id].name}</h1>
      <h3> {user[id].email}</h3>
      <button onClick={()=>Navigate(-1) } className="bg-red-100 p-2 mt-2 rounded-md">go back</button>
    </div>
  );
};

export default UserDetails;
