import React from "react";
import DisposalCard from "./DisposalCard";
import { disposalprojects } from "../Data/DisposalData";

function ProjectDisposal() {
  return (
    <div
      id="projectcot"
      className="px-5 pb-10 font-sans scroll-mt-20 xl:px-0"
    >
      <div className="container py-10 pt-10 mx-auto ">
        <h1 className="flex justify-center text-xl font-semibold md:text-2xl text-sky-800 font-Poppins">
          Disposable Products
        </h1>
      </div>
      <div className="container mx-auto ">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:space-y-0">
          {disposalprojects.map((Bedproject, Data) => (
            <DisposalCard
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

export default ProjectDisposal;
