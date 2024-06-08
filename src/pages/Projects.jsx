import { useLayoutEffect } from "react";

import NavBar from "../components/NavBar";
import Project from "../components/Project";
import FooterC from "../components/FooterC";

// import projects Picturs

import P11 from "../assets/projects/1/1.png"
import P12 from "../assets/projects/1/2.png"
import P13 from "../assets/projects/2/3.png"
import P21 from "../assets/projects/2/1.png"
import P22 from "../assets/projects/2/2.png"
import P23 from "../assets/projects/3/3.png"
import P31 from "../assets/projects/3/1.png"
import P32 from "../assets/projects/3/2.png"
import P33 from "../assets/projects/4/3.png"
import P41 from "../assets/projects/4/1.png"
import P42 from "../assets/projects/4/2.png"
import P43 from "../assets/projects/5/3.png"
import P51 from "../assets/projects/5/1.png"
import P52 from "../assets/projects/5/2.png"
import P53 from "../assets/projects/6/3.png"
import P61 from "../assets/projects/6/1.png"
import P62 from "../assets/projects/6/2.png"
import P63 from "../assets/projects/7/3.png"
import P71 from "../assets/projects/7/1.png"
import P72 from "../assets/projects/7/2.png"
import P73 from "../assets/projects/8/3.png"
import P81 from "../assets/projects/8/1.png"
import P82 from "../assets/projects/8/2.png"
import P83 from "../assets/projects/9/3.png"
import P91 from "../assets/projects/9/1.png"
import P92 from "../assets/projects/9/2.png"
import P93 from "../assets/projects/10/3.png"
import P101 from "../assets/projects/10/1.png"
import P102 from "../assets/projects/10/2.png"
import P103 from "../assets/projects/11/3.png"
import P111 from "../assets/projects/11/1.png"
import P112 from "../assets/projects/11/2.png"
import P113 from "../assets/projects/12/3.png"
import P121 from "../assets/projects/12/1.png"
import P122 from "../assets/projects/12/2.png"
import P123 from "../assets/projects/13/3.png"
import P131 from "../assets/projects/13/1.png"
import P132 from "../assets/projects/13/2.png"
import P133 from "../assets/projects/14/3.png"
import P141 from "../assets/projects/14/1.png"
import P142 from "../assets/projects/14/2.png"
import P143 from "../assets/projects/15/3.png"
import P151 from "../assets/projects/15/1.png"
import P152 from "../assets/projects/15/2.png"
import P153 from "../assets/projects/16/3.png"
import P161 from "../assets/projects/16/1.png"
import P162 from "../assets/projects/16/2.png"
import P163 from "../assets/projects/16/3.png"



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
                src={eval(`P${i + 1}1`)}
                one={eval(`P${i + 1}1`)}
                two={eval(`P${i + 1}2`)}
                three={eval(`P${i + 1}3`)}
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
