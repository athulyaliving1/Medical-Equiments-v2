import React from "react";
import { wheelchairprojects } from "../Data/WheelChairData";
import WheelchairCard from "./WheelchairCard";

function ProjectsWheelchair() {
  return (
    <div id="projectcot" className="px-5 scroll-mt-20 xl:px-0 font-Helvetica">
      <div className="container py-10 pt-10 mx-auto ">
        <h1 className="flex justify-center text-xl font-semibold md:text-2xl text-sky-800 font-Poppins">
          Wheel Chair
        </h1>
      </div>
      <div className="container mx-auto ">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
          {wheelchairprojects.map((Bedproject, Data) => (
            <WheelchairCard
              key={Data}
              Bedproject={Bedproject}
              ltr={Bedproject % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsWheelchair;
