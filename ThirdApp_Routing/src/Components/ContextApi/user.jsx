import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context";

const user = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return ( 
    <div>
      <h1 className="my-3 text-2xl "> User list</h1>
      <div className=" flex flex-col  w-1/2">
        {user.map((u) => (
          <Link
            key={u.id}
            to={`/user/${u.id}`}
            className="mb-1 p-2  bg-blue-200"
          >
            name: {u.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default user;
