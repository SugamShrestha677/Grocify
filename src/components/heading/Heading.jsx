import React from "react";

const Heading = (props) => {
  return (
    <div className="w-fit mx-auto">
      <h2 className="text-zinc-800 md:text-5xl text-[2.5rem] font-bold">
        <span className="text-orange-500">{props.spans}</span> {props.remain}
      </h2>
      <div className="bg-orange-300 md:mt-6 mt-4 ml-auto h-1 w-34"></div>
    </div>
  );
};

export default Heading;
