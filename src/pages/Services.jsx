import React from "react";

import { useLayoutEffect } from "react";

import NavBar from "../components/NavBar";
import FooterC from "../components/FooterC";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />

      <div className="Services">
        <div id="titleServ">Our Services</div>

        <div className="section1">
          <ServiceCard
            title="Project Management"
            txt="At Concrete, we communicate the “all-in-one-place” 
                approach. It is a complete expedition 
                from conceptualization to completion through 
                an entire careful examination and application of 
                various high-performance designs by creating 
                spaces that invigorate the senses. Moreover, we 
                provide elements
                and components conforming to the clients’ 
                needs and desires, starting with the installation of 
                strategic planning, consultation, cost estimates, 
                design development, and ending with the final 
                production & execution in a reliable time frame"
            icon="fa-solid fa-briefcase"
            ListShow="hide"
          />
          <ServiceCard
            icon="fa-solid fa-helmet-safety"
            title="contracting & construction"
            txt="Contracting and construction are phases where we oversee every project aspect; 
            arrange and manage the workers, raw materials, equipment, and services needed to 
            launch. We plan, lead, supervise, inspect, execute. There are three notches aligned 
            together in harmony:"
            ListShow="show"
            list1="Civil works"
            list2="Architecture, MEP"
            Txt1=""
            Txt2=""
          />
          <ServiceCard
            icon="fa-solid fa-paint-roller"
            title="Interior & Exterior design"
            txt=""
            ListShow="hide"
            list1=""
            list2=""
            Txt1="Interior design: 
            is a multifaceted profession. It starts with conceptual development, 
            schematic design, site inspections ending upon our client’s request 
            with 2D or 3D renders and a budgetary plan, determining the cost & 
            requirements of the project."
            Txt2="Exterior design: 
            is the outermost magnificence of the place, such as facades, entrances, 
            landscape, outdoor, and parking areas. It is the stage where everything 
            is coinciding in harmony, and our clients’ expectations are finally met and 
            exceedingly fulfilled"
          />
          <ServiceCard
            icon="fa-solid fa-mountain-sun"
            title="Landscape Design & Execution"
            txt={`Landscape architecture includes green infrastructure planning and functional outdoor spaces. At Concrete,
            we proudly offer you expert landscapers and a variety of materials that will easily fit in the look of your landscape,
            creating harmony between hardscape and softscape`}
            ListShow="hide"
            list1=""
            list2=""
            Txt1=""
            Txt2=""
          />
          <ServiceCard
            icon="fa-solid fa-couch"
            title="Furniture Design Snd Execution"
            txt="Our golden touch is executing impeccable & functional
            designs communicating a luxurious sense of authenticity
            and elegance. Both hard furnishings such as beds,
            tables, cupboards, etc. & soft furnishings like curtains,
            carpets decorations are of utmost importance.
            It gives an unparalleled definition to your place. Therefore, We
            save you from all the hassle and help you furnish your commercial
            space effortlessly!! Concrete offers you third-party logistics service
            providers, enabling you to choose between a variety of high quality,
            sophisticated and unique manufactured furniture & ornament
            collections"
            ListShow="hide"
            list1=""
            list2=""
            Txt1=""
            Txt2=""
          />
        </div>
      </div>

      <FooterC />
    </>
  );
};

export default Services;
