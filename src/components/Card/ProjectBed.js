import React from "react";
import BedCard from "./BedCard";
import { airprojects } from "../Data/BedData";

function ProjectBed() {
  return (
    <div
      id="projectcot"
      className="px-5 pb-10 scroll-mt-20 xl:px-0 font-Helvetica"
    >
      <div className="container py-10 pt-10 mx-auto ">
        <h1 className="flex justify-center text-xl font-semibold font-Poppins md:text-2xl text-sky-800">
          Air Beds
        </h1>
      </div>
      <div className="container mx-auto ">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:space-y-0">
          {airprojects.map((Bedproject, Data) => (
            <BedCard
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

export default ProjectBed;
