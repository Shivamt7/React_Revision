import React from "react";
import Cards from "./Cards";
import { data } from "./Data";

const Page = () => {
  return (
    <div className="flex w-full h-screen justify-around gap-10 items-center bg-zinc-200 flex-wrap px-10">
      {data.map((item) => (
        <Cards key={item.title} item={item} />
      ))}
    </div>
  );
};

export default Page;
