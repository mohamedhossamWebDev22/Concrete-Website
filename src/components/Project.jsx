import React from "react";
import { useState } from "react";

const Project = (props) => {
  const [showPanel, setshowPanel] = useState("hide");

  return (
    <>
      <div className={`projPanel ${showPanel}`}>
        <div className="con">
          <div className="bar">
            <h1>{props.title}</h1>
            <i
              onClick={() => {
                setshowPanel("hide");
              }}
              className="fa-solid fa-xmark"
            ></i>
          </div>

          <div className="row">
            <img src={props.one} alt="project pictures" />
            <img src={props.two} alt="project pictures" />
            <img src={props.three} alt="project pictures" />
          </div>
        </div>
      </div>

      <div className="projectCard">
        <img src={props.src} alt="Project's Img" />
        <h1>{props.title}</h1>
        <button
          onClick={() => {
            setshowPanel("show");
          }}
        >
          See More
        </button>
      </div>
    </>
  );
};

export default Project;
