import React from "react";
import DisposalCard from "./DisposalCard";
import { disposalprojects } from "../Data/DisposalData";

function ProjectDisposal() {
  return (
    <div
      id="projectcot"
      className=" scroll-mt-20 px-5 xl:px-0 bg-sky-100 pb-10 font-Helvetica"
    >
      <div className="container mx-auto pt-10 py-10 ">
        <h1 className=" flex justify-center text-xl  md:text-2xl font-semibold text-sky-800 ">
          Disposable products
        </h1>
      </div>
      <div className="container mx-auto  ">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-5 space-y-4 md:space-y-0">
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
