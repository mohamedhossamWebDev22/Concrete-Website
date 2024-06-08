import { useLayoutEffect } from "react";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import FooterC from "../components/FooterC";

import { names, projectImages } from "../components/projectsData";

const Projects = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  console.log(projectImages.length);
  return (
    <>
      <NavBar />

      <div className="projects">
        <h1 id="titlePro">Our Projects</h1>

        <div className="row">
          {names.map((item, i) => (
            <div key={i}>
              <Project
                title={item}
                src={`/src/assets/projects/${i + 1}/1.png`}
                one={`/src/assets/projects/${i + 1}/1.png`}
                two={`/src/assets/projects/${i + 1}/2.png`}
                three={`/src/assets/projects/${i + 1}/3.png`}
              />
              <br />
              <br />
            </div>
          ))}
        </div>
      </div>

      <FooterC />
    </>
  );
};

export default Projects;
