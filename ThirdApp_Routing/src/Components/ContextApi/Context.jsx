import React, { createContext, useState } from "react";

export const UserContext = createContext();

const Context = (prop) => {
  console.log(prop)
  const [user, setUser] = useState([
    {
      id:0,
      name:"Divyashu kumar",
      age: 22,
      email: "divyanshkumar@gmail.com",
      password: "Divyansh45",
    },
    {
      id:1,
      name: "Tanni",
      age: 21,
      email: "Tanni143@gmail.com",
      password: "Tanni143",
    },
  ]);

  //   console.log(prop);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        {prop.children}
      </UserContext.Provider>
    </div>
  );
};

export default Context;
