import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Card = ({ width, start, para, button,hover }) => {
  return (
    <div
      className={`w-full flex gap-5 bg-zinc-700 p-5 flex-col rounded-xl ${width} justify-between hover:${hover} `}
    >
      <div className="w-full flex items-center justify-between  ">
        <h4>one heading</h4>
        <MdOutlineArrowRightAlt className="text-2xl" />
      </div>
      <div className="w-full  ">
        <h2 className="text-xl font-semibold">Whatever heading</h2>
        {start  && (
            <h1 className="text-8xl mt-32
             mb-4 font-medium ">
              Start a Project
            </h1>
          ) }
          {button && (
            <button className="rounded-full border py-1 px-3 ">
              Contact us
            </button>
            )}
            {para && (
              <p className="text-sm mt-64 text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            )}
      </div>
    </div>
  );
};

export default Card;
