import React from "react";

function PopUp({ desc, desc1, desc2 }) {
  return (
    <div className="min-w-fit max-w-max">
      <div className="grid font-semibold text-left capitalize text-sky-800 md:first:p-5 lg:text-xl">
        <div className="md:text-xl xl:text-2xl ">{desc}</div>
        <div className="md:text-xl xl:text-2xl ">{desc1}</div>
        <div className="md:text-xl xl:text-2xl ">{desc2}</div>
      </div>
    </div>
  );
}

export default PopUp;
