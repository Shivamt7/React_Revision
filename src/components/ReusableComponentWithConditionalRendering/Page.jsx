import React, { useState } from "react";
import Cards from "./Cards";
import { data } from "./Data";

const Page = () => {

  const [card, setCard] = useState(data)

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-center">
      <div className="flex justify-around gap-10 items-center px-10">
        {card.map((item) => (
        <Cards key={item.title} item={item} />
      ))}
      </div>

      
      <div className="flex justify-center items-center mt-10">
        <button onClick={() => setCard(() => card.filter((items, index) => index != card.length - 1))} className="mb-3 py-2 px-5 text-center bg-red-600 rounded-full">{card.length === 0 ? "Refresh" : "Remove"}</button>
      </div>
    </div>
  );
};

export default Page;
