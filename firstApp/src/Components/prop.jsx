// humare data acturally main app component mein hoga aur hum use props ke through pass karege prop.jsx mein , har card par ek add friend button hoga and hume add friend button par click hone par alert dena

import React from "react";

function prop({ values, index, handleClick }) {
  const { Image, name, Profession, friend } = values;
  return (
    <>
      <div className="bg-white w-52 rounded-md overflow-hidden">
        <div className="w-full h-44   bg-blue-200">
          <img
            className="w-full h-full object-cover object-center "
            src={Image}
            alt=""
          />
        </div>
        <div className="w-full p-2 ">
          <h3 className="text-xl font-semibold"> {name}</h3>
          <h5 className="text-xs text-zinc-800">{Profession}</h5>
          <button
            onClick={() => handleClick(index)}
            className={`px-2 py-1 mt-3 text-sm ${
              friend ? "bg-green-600" : "bg-blue-600"
            } rounded-md text-white`}
          >
            {friend === true ? "Friend" : "Add Friend"}
          </button>
        </div>
      </div>
    </>
  );
}

export default prop;
