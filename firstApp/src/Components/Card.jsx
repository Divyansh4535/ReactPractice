import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_1280.jpg",
      Name: "Amazon ",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      instock:true,
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_1280.jpg",
      Name: "Flipcard ",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      instock:false,
    },
    {
      image: "https://cdn.pixabay.com/photo/2024/03/06/09/32/liverworts-8616125_1280.jpg",
      Name: "Meeso",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      instock:true,
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-400">
      {data.map((elem, index) => (
        <div key={elem.Name} className="w-40 px-2 py-2 rounded-md bg-zinc-100">
          <div className="w-full h-44 bg-zinc-300 rounded-md">
            <img src={elem.image} className="w-full h-full object-cover" alt={elem.Name} />
          </div>
          <div className="w-full px-2 py-2">
            <h2 className="font-semibold">{elem.Name}</h2>
            <p className="text-xs mt-2">{elem.Description}</p>
            <button  className={`px-2 py-1 ${elem.instock ? "bg-sky-600" : "bg-red-600"} text-sm font-semibold mt-2 rounded-md  bg-blue-400 `} >{elem.instock ? "In Stock" : "Out of Stock" }</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
