import React from "react";
import "./Sidebaroption.css";

function Sidebaroption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon"></Icon>}
      {Icon ? <h2>{title}</h2> : <p>{title}</p>}
    </div>
  );
}

export default Sidebaroption;
