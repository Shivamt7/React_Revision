import React, { useState } from "react";

const UpdatationUseState = () => {
  const [val, setVal] = useState([
    {
      name: "Shivam",
      age: 25,
      gender: "male",
    },
    {
      name: "Dev Don",
      age: 15,
      gender: "male",
    },
    {
      name: "satyam",
      age: 24,
      gender: "male",
    },
  ]);

  return (
    <div>
      {val.map((item) => (
        <>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
          <h1>{item.gender}</h1>
        </>
      ))}

      <button className="bg-red-600 py-2 px-5 rounded-full text-cyan-50" onClick={() => setVal(() => val.map(item => item.name === "Dev Don" ? {name : "Dev Mafia", age : 15, gender : "male"} : item))}>Click</button>
    </div> 
    
  );
};

export default UpdatationUseState;
