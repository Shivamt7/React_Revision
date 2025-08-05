import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="w-52 h-80 bg-zinc-100 rounded-md overflow-hidden">
      <div className="w-full h-32 bg-zinc-300">
        <img
          className="w-full h-full object-cover"
          src={item.image}
          alt={item.title}
        />
      </div>
      <div className="w-full px-3 py-4">
        <h2 className="font-semibold">{item.title}</h2>
        <p className="text-xs mt-3">
          {`${item.description.substring(0, 200)}...`}
        </p>
      </div>
    </div>
  );
};

export default Cards;
