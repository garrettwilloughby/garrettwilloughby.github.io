import React from "react";

import styles from "./vt-list.module.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
  
  
    <li key={props.index} style={{ listStyle: "none", textAlign: "left"}}>
      <button
        className={`${styles.section__Jobs_buttonCompany}`}
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "black"}
            : { color: "#8892b0" }
        }
      >
        {props.data.expData.company}
      </button>
    </li>
  

      // horizontal tab list for mobile
  );

}

export default VTlist;
