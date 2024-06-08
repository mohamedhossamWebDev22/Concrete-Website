import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <h1>{props.name}</h1>
        <Link to={"/Projects"}>
          <button>See More</button>
        </Link>
      </div>
    </>
  );
};

export default Card;
