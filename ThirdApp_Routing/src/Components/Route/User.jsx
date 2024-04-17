import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <>
      <div className="m-auto mt-10 w-1/2 ">
        <div className="flex flex-col mt-5 ">
          <Link
            to="/user/Divyansh"
            className=" p-2 bg-red-200 text-2xl mb-3 hover:bg-red-500 "
          >
            Divyansh
          </Link>
          <Link
            to="/user/Sumit "
            className=" p-2 bg-red-200 text-2xl mb-3 hover:bg-red-500 "
          >
            Sumit{" "}
          </Link>
          <Link
            to="/user/Aman "
            className=" p-2 bg-red-200 text-2xl mb-3 hover:bg-red-500 "
          >
            Aman
          </Link>
        </div>
        <hr />

        <Outlet />
      </div>
    </>
  );
}

export default User;
