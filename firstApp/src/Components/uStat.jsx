import React from "react";
import { useState } from "react";

function uStat() {
  const [banned, setBanned] = useState(false);
  const [one, two] = useState(1);
  const [val, setVal] = useState({ name: "Dk", isBanned: false });
  const [vals, setVals] = useState({ name: "Dk", IsBanned: false });
  const [valu, setValu] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [valu2, setValu2] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [valu3, setValu3] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [valu4, setValu4] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [val5,setVal5]=useState([
    {name:"Dk" ,age:22},
    {name:"tanvi" ,age:20},
    {name:"tani" ,age:21},
  ]);
  const [val2,setVal2] = useState (false);
  return (
    <>
      {/* useState state ko turant update nhu karta ,wo useState ko update karta apne hisaab se function completion ke baad to fix performance issues  */}
      {/* basic useState */}
      <div className="bg-red-100  p-3">
        <h1>{banned.toString()}</h1>
        <button
          onClick={() => setBanned(!banned)}
          className="px-3 mt-3 text-white py-2  bg-blue-500 rounded-md"
        >
          change
        </button>
      </div>

      {/* intermediate useState */}

      <div className="bg-green-100  p-3">
        <h1 className="text-black text-xl ">{one}</h1>
        <button
          className="bg-blue-300 py-2 px-3 rounded-md"
          onClick={() => two((prev) => prev + 1)}
        >
          {" "}
          change{" "}
        </button>
      </div>

      {/* advanced useState */}
      <div className="mt-2 p-5 bg-red-100">
        <h1> name : {val.name} </h1>
        <h1>banned : {val.isBanned.toString()}</h1>
        <button
          className="p-2 bg-sky-500 mt-2 rounded-md"
          onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        >
          change
        </button>
      </div>

      {/* mastering usestate */}
      <div className="p-4 bg-green-200 mt-2">
        <h1>name: {vals.name}</h1>
        <h1>Banned: {vals.IsBanned.toString()}</h1>
        <button
          onClick={() => setVals({ ...vals, IsBanned: !vals.IsBanned })}
          className={`${
            !vals.IsBanned ? "bg-blue-500" : "bg-red-600"
          } py-2 px-3 rounded-md mt-2`}
        >
          {" "}
          change
        </button>
      </div>

      {/* usestate array part - 1 */}
      <div className="bg-yellow-100 p-3 ">
        {valu.map((item) => (
          <h2>{item}</h2>
        ))}
        <button
          onClick={() =>
            setValu(() =>
              valu.filter((item, index) => index != valu.length - 1)
            )
          }
          className="px-3 mt-2 py-2 rounded-md bg-blue-700 "
        >
          click
        </button>
      </div>

      {/* usestate array part - 2 */}

          <div className="bg-pink200 p-2">
          {valu2.map(item=> <h1>{item}</h1> )}
          <button className="bg-blue-300 px-3 py-2 mt-2 rounded-md" onClick={()=>setValu2(()=>valu2.filter((item,index)=>index!=2))}>Click </button>
          </div>
          <div className="bg-pink-300 p-2 ">
            {valu3.map(item=> <h1>{item}</h1> )}
            <button onClick={()=>setValu3(()=>valu3.filter((item)=>item%2 !==0))} className="bg-blue-200 px-3 py-2 mt-2 rounded-md">click</button>
          </div>

          {/* usestate array addition  */}
          <div className="bg-emerald-400 p-2">
          {valu4.map(item=> <h1>{item}</h1> )}
          <button className="bg-blue-700 px-3 py-2" onClick={()=>setValu4([...valu4,8])}>
click
          </button>
          </div>

          {/* usestate array  addition 2 */}

          <div className="bg-emerald-400 p-2">
          {val5.map((item) =>(
          <div>
            <h1>name: {item.name} </h1> 
            <h1>age: {item.age} </h1> 
          </div>
           ))}
          <button className="bg-blue-700 px-3 py-2" onClick={()=>setVal5(()=>val5.map(item => item.name ==="tani" ? ({name:"tani" ,age:19}) : item ))}> click </button>
          </div>
          <div className="bg-red-400 p-2">
          <h1>{val2 ==false?"Bahar jao" : "Mat jao" } </h1>
          <button className='bg-blue-300 px-3 font-semibold py-1 mt-2 rounded-full ' onClick={()=>setVal(!val2)}>click</button>
          </div>
</>

  );
}

export default uStat;
