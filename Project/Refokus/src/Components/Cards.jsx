import React from "react";
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full bg-zinc-900">
      <div className="flex gap-2 max-w-screen-xl w-full px-5  py-32">
        <Card width={"basis-1/3"} start={false} para={true} button={false} hover={"bg-red-200"} />
        <Card width={"basis-2/3"} start={true} para={false} button={true}  hover={"bg-[#7443FF]"} />
      </div>
    </div>
  );
};

export default Cards;
