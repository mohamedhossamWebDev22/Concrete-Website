import React from "react";

import logoBanner from "../assets/banner.png";

const FooterC = () => {
  return (
    <>
      <footer>
        <img src={logoBanner} alt="Logo Banner" />
        <h6>
          Interior design consultancy firm that brings sensitivity to the
          design top restaurants, hotels, offices & homes around the world, the
          prestigious luxury is. We do all types of interior designing.
        </h6>
        <hr />
        <div className="ff">
          <h6>
            Copyright © {new Date().getFullYear} Concrete. All rights reserved.
          </h6>
          <div className="links">
            <a
              target="_blank"
              href="https://www.facebook.com/Concrete.Construction.interior/"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/concrete.construction.interior/"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/concrete-construction-interior/"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterC;
