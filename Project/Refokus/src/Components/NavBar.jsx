import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="max-w-screen-xl w-2/3 m-auto bg-zinc-900 p-3  flex gap-20 items-center justify-between border-b border-zinc-600">
      <div className="nleft flex gap-10">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt=""
        />
        <div className="flex gap-14 ml-10 ">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span className="w-[2px] h-6 bg-zinc-700 " key={index}>
                {" "}
              </span>
            ) : (
              <a
                key={index}
                href="#"
                className="font-regular text-sm flex items-center gap-1"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div >
  );
};

export default NavBar;
