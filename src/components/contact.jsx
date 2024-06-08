import React from "react";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="info">
          <i className="fa-solid fa-tty"></i>
          <a href="tel:+0225172099">+0225172099</a>
          <br />
          <i className="fa-solid fa-phone"></i>
          <a href="tel:01010438834">01010438834</a>
          <br />
          <i className="fa-solid fa-location-dot"></i>
          Ground ﬂoor, 5B Tiba Towers, ZahraaElmaadi St., next to CIB bank.
          <br />
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:info@concrete.com.co">info@concrete.com.co</a>
        </div>
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
    </>
  );
};

export default Contact;
