import React from "react";
import { useLayoutEffect } from "react";

import NavBar from "../components/NavBar";
import FooterC from "../components/FooterC";

import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import logoBanner from "../assets/banner.png";
import AboutCard from "../components/AboutCard";

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <NavBar />

      <div id="About">
        <h1 id="titleAbout">About Us</h1>

        <div className="section1 center">
          <div id="aboutFirst" className="section1">
            <p>
              <img id="banner" src={logoBanner} alt="Logo Banner" />
              <br /> is a leading interior design & engineering company that
              brings innovation and inspiration to the crafts & visual art
              market. We are a squad of engineers, contractors, builders and
              interior designers providing premium space allocation and
              utilization solutions.
            </p>
          </div>
          <div className="flipR">
            <div className="img">
              <img src={img2} alt="img2" />
            </div>
            <div className="txt">
              <h1>Our Journey</h1>

              <p>
                We are a squad of engineers, contractors, builders, and interior
                desigers. Concrete has fully developed +100 enterprises all over
                Egypt in a brief period. To date, we carried out varying
                projects between mixed-use developments; restaurants, retail
                shops, clinics, corporates, and administrative offices
              </p>
            </div>
          </div>
          <div className="flipL">
            <div className="img">
              <img src={img3} alt="img3" />
            </div>
            <div className="txt">
              <h1>Our Mission</h1>

              <p>
                Every design has its own story where it all lies in the
                meticulous vivid details. At Concrete, we are looking forward to
                providing tailored & integrated solutions to our potentials
                customers. We are keen on professionally reshaping and
                redefining spaces empowered with dedication and passion. Our
                mission is not about the number of delivered projects; it is
                mainly about going the extra mile to meet each client’s
                perspective. We aim to deliver professional interiors, merging
                each clients aesthetic style and our professional holistic
                vision
              </p>
            </div>
          </div>
          <div className="flipR">
            <div className="img">
              <img src={img4} alt="img2" />
            </div>
            <div className="txt">
              <h1>Our Vision</h1>

              <p>
                We aspire to be the 1st leading ﬁrm in the Egyptian market. It
                is ourprime concern to emphasize our brand reputation and
                credibility;to make people believe in the competence and
                efﬁciency of ourlocal working force. Moreover, We intend to blot
                out the present-day misconception displaying international
                corporations as moretrustworthy and proﬁcient. At concrete, we
                give credence to ourlabors and show off our work as evidence of
                our beliefs
              </p>
            </div>
          </div>
          <div className="flipL">
            <div id="Core" className="txt">
              <h1>Our Core Values</h1>

              <div className="row">
                <AboutCard
                  title="Authenticity"
                  desc="Honesty and transparency"
                />
                <AboutCard title="Patience" desc="Well-calculated decisions" />
                <AboutCard title="Accuracy" desc="Project delivery on time" />
                <AboutCard
                  title="Accountability"
                  desc="Responsible for our actions"
                />
                <AboutCard
                  title="Value-centricity"
                  desc="Value-based pricing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterC />
    </>
  );
};

export default About;
