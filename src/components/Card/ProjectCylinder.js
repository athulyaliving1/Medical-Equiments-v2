import { cylinderprojects } from "../Data/CylinderData";
import CylinderCard from "./CylinderCard";

function ProjectsCylinder() {
  return (
    <div
      id="projectcot"
      className="block px-5 scroll-mt-20 xl:px-0 md:hidden font-Helvetica"
    >
      <div className="container py-10 pt-10 mx-auto ">
        <h1 className="flex justify-center text-xl font-semibold md:text-2xl text-sky-800">
          Oxygen Cylinder
        </h1>
      </div>
      <div className="container mx-auto ">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
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
