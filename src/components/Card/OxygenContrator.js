import { oxgenprojects } from "../Data/OxygenCylinderData";
import OxygenCardMb from "./OxygenCardMb";

function OxygenContrator() {
  return (
    <div
      id="projectcot"
      className="block px-5 scroll-mt-20 xl:px-0 md:hidden"
    >
      <div className="container py-10 pt-10 mx-auto font-Helvetica ">
        <h1 className="flex justify-center text-xl font-semibold md:text-2xl text-sky-800">
          Oxygen Concentrator
        </h1>
      </div>
      <div className="container mx-auto ">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
          {oxgenprojects.map((Bedproject, CotData) => (
            <OxygenCardMb
              key={CotData}
              Bedproject={Bedproject}
              ltr={Bedproject % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OxygenContrator;
