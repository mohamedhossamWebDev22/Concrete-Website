import React from "react";

const ServiceCard = (props) => {
  return (
    <>
      <div className="CardServ">
        <i className={props.icon}></i>

        <h1>{props.title}</h1>
        <p>{props.txt}</p>

        <ul className={props.ListShow}>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
        </ul>

        <div className={`TxtFl ${props.ListShow}`}>
          <p>{props.Txt1}</p>
          <p>{props.Txt2}</p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
