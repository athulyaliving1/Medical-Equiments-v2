import { concentratorprojects } from "../Data/ConcentratorData";
import { concentratorprojectslg } from "../Data/ConcentratorData";
import { concentratorprojectslg2 } from "../Data/ConcentratorData";
import ConcentratorCard from "./ConcentratorCard";

function ProjectsConcentrator() {
  return (
    <div>
      <div className="hidden md:hidden xl:hidden 2xl:block font-Helvetica ">
        <div
          id="projectconcentrator"
          className="px-5 pb-20 scroll-mt-20 xl:px-0 "
        >
          <div className="container py-10 pt-10 mx-auto font-Poppins">
            <div className="flex justify-evenly">
              <div className="flex justify-start font-semibold md:text-2xl text-sky-800">
                Oxygen Concentrator
              </div>
              <div className="flex justify-start font-semibold md:text-2xl text-sky-800 ">
                Oxygen Cylinder
              </div>
            </div>
          </div>
          <div className="container mx-auto ">
            <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-y-0">
              {concentratorprojects.map((Bedproject, Data) => (
                <ConcentratorCard
                  key={Data}
                  Bedproject={Bedproject}
                  ltr={Bedproject % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id="projectconcentrator"
          className="block px-5 pb-20 scroll-mt-20 xl:px-0 xl:block 2xl:hidden"
        >
          <div className="container py-10 pt-10 mx-auto ">
            <div className="flex justify-evenly">
              <div className="flex justify-start text-xl font-semibold md:text-2xl text-sky-800">
                Oxygen Concentrator
              </div>
            </div>
          </div>
          <div className="container mx-auto ">
            <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
              {concentratorprojectslg.map((Bedproject, Data) => (
                <ConcentratorCard
                  key={Data}
                  Bedproject={Bedproject}
                  ltr={Bedproject % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          id="projectconcentrator"
          className="block px-5 pb-20 scroll-mt-20 xl:px-0 xl:block 2xl:hidden"
        >
          <div className="container py-10 pt-10 mx-auto ">
            <div className="flex justify-evenly">
              <div className="flex justify-start text-xl font-semibold md:text-2xl text-sky-800">
                Oxygen Cylinder
              </div>
            </div>
          </div>
          <div className="container mx-auto">
            <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
              {concentratorprojectslg2.map((Bedproject, Data) => (
                <ConcentratorCard
                  key={Data}
                  Bedproject={Bedproject}
                  ltr={Bedproject % 2 === 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsConcentrator;
