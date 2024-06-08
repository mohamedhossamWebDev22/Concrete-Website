import NavBar from "./components/NavBar";
import Partner from "./components/partner";
import images from "./components/images";
import Contact from "./components/contact";
import FooterC from "./components/FooterC";

import { Link } from "react-router-dom";

import { useLayoutEffect } from "react";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

import logoBanner from "./assets/banner.png";
import Card from "./components/Card";


function App() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <div className="landing">
        <a href="#scroll">↓</a>
      </div>
      <NavBar />
      <hr id="scroll" className="bgColor" />

      <div className="content">
        <div id="first" className="section1">
          <p>
            <img id="banner" src={logoBanner} alt="Logo Banner" />
            <br /> is a leading interior design & engineering company that
            brings innovation and inspiration to the crafts & visual art market.
            We are a squad of engineers, contractors, builders and interior
            designers providing premium space allocation and utilization
            solutions.
          </p>
        </div>

        <img src={img1} className="Image" />

        <div className="section2">
          <h1>Our Vision:</h1>
          <p>
            We aspire to be the 1st leading firm in the Egyptian market. It is
            our prime concern to emphasize our brand reputation and credibility;
            to make people believe in the competence and efficiency of our local
            working force. Moreover, We intend to blot out the present-day
            misconception displaying international corporations as more
            trustworthy and proficient. At concrete, we give credence to our
            labors and show off our work as evidence of our beliefs
          </p>
        </div>
      </div>
      <div className="section1 absolute c2">
        <h1>Our Services:</h1>
        <ul>
          <li>Project Management</li>
          <li>contracting & construction</li>
          <li>interior & exterior design</li>
          <li>Landscape design & execution</li>
          <li>Furniture design and execution</li>
        </ul>
        <img src={img2} alt="" className="rel" />

        <button>
          <Link to="/services">Read More</Link>
        </button>
      </div>
      <div id="proB" className="section1">
        <div className="con">
          <h1>Our Projects</h1>

          <div className="row">
            <Card name="Restaurants"/>
            <Card name="Marts"/>
            <Card name="Cafe"/>
            <Card name="Residential"/>
          </div>
        </div>
      </div>

      <div className="section2">
        <h1>Our Partenrs</h1>
        <div className="prts">
          {images.map((item, i) => (
            <div key={i}>
              <Partner src={item}/>
            </div>
          ))}
        </div>
      </div>

      <div className="section1">
        <Contact/>
      </div>

      <FooterC/>
    </>
  );
}

export default App;
