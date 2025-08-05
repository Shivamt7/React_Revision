import React, { useState } from "react";

const Cards = ({ item }) => {

  const [readmore, setReadMore] = useState(false)

  return (
    <div className="w-52 bg-zinc-100 rounded-md overflow-hidden">
      <div className="w-full h-32 bg-zinc-300">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="w-full px-3 py-4">
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-xs mt-3 text-justify">
          {readmore === false ? `${item.description.substring(0, 190)}...` : `${item.description}`}
          <span className={`${readmore ? "text-blue-600" : "text-red-600"} cursor-pointer`} onClick={() => setReadMore(() => !readmore)}>{readmore ? "Show Less" : "Read More"}</span>
        </p>
      </div>
    </div>
  );
};

export default Cards;
