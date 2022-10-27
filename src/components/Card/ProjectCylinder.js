import { cylinderprojects } from "../Data/CylinderData";
import CylinderCard from "./CylinderCard";

function ProjectsCylinder() {
  return (
    <div
      id="projectcot"
      className=" scroll-mt-20 px-5 xl:px-0 bg-sky-100  block md:hidden font-Helvetica"
    >
      <div className="container mx-auto pt-10 py-10 ">
        <h1 className=" flex justify-center text-xl   md:text-2xl font-semibold text-sky-800 ">
          Oxygen Cylinder
        </h1>
      </div>
      <div className="container mx-auto  ">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
          {cylinderprojects.map((Bedproject, Data) => (
            <CylinderCard
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

export default ProjectsCylinder;
