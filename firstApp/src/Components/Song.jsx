import React  from "react";
    var data = [
        {name:"mahiya Ve", description:" adipisicing elit. Laborum perferendis ipsa neque fugit iure numquam alias"   },
        {name:"vaste", description:" adipisicing elit. Laborum perferendis ipsa neque fugit iure numquam alias"   },
        {name:"mahiya Ve", description:" adipisicing elit. Laborum perferendis ipsa neque fugit iure numquam alias"   }
    ]
function Song(){
            return (
                <div className="w-full h-screen flex bg-zinc-200 gap-10 items-center justify-center ">
                    {data.map((item,index)=>(
                        <div className="song py-1 px-3 justify-center items-center rounded-md bg-zinc-50 w-60 " key={index} >
                        <h1 className=" text-xl font-semibold "> {item.name} </h1>
                        <p className="text-xs mt-3" >{item.description}</p>
                        <button className="bg-sky-500 rounded-md py-1 mt-2 px-2 font-  " onClick={()=>{alert("hy")}}>Click</button>
                        </div>
                    ))}
                </div>
            )
}

export default Song;