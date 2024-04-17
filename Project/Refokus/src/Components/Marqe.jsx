import React from "react";

const Marqe = ({imgurls}) => {
  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap items-center bg-zinc-900 gap-10 ">
      {imgurls.map((url,index) => (
        <img src={url}  key={index}alt="" className="w-[7vw] flex-shrink-0" />
      ))}
      {imgurls.map((url,index) => (
        <img src={url} key={index} alt="" className="w-[7 vw] flex-shrink-0" />
      ))}
    </div>
  );
};

export default Marqe;
