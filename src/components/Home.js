import React, { useRef } from "react";

// import OxygenContrator from "./Card/OxygenContrator";
import ProjectBed from "./Card/ProjectBed";
// import ProjectsCylinder from "./Card/ProjectCylinder";
import ProjectDisposal from "./Card/ProjectDisposal";
// import ProjectsCylinder from "./Card/ProjectCylinder";
import Banner from "./Banner";
import ProjectsConcentrator from "./Card/ProjectsConcentrator";
import ProjectsCot from "./Card/ProjectsCot";
import ProjectsWheelchair from "./Card/ProjectsWheelchair";
// import Testimonal from "./Card/Testimonal";
import { useInView } from "framer-motion";
import Title from "./Title";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Home() {
  return (
    <div>
      <div>
        <Section>
          <Banner />
        </Section>
        <Section>
          <Title />
        </Section>
      </div>
      <div className="rounded-3xl bg-matisse-200">
        <Section>
          <ProjectsCot />
        </Section>
        <Section>
          <ProjectBed />
        </Section>
        <Section>
          <ProjectsWheelchair />
        </Section>
        <Section>
          <ProjectsConcentrator />
        </Section>
        <Section>
          <ProjectDisposal />
        </Section>
      </div>
    </div>
  );
}

export default Home;
