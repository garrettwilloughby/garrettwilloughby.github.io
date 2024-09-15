import React from "react";
import styles from "./vt-list.module.css";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
  };

  return (
    <div>
      {/* Visible on desktop (md and up) */}
      <li key={props.index} style={{ listStyle: "none", textAlign: "left" }} className="d-none d-md-block">
        <button
          className={`${styles.section__Jobs_buttonCompany}`}
          onClick={Clicked}
          style={
            props.activeTabId === props.index
              ? { color: "black" }
              : { color: "#8892b0" }
          }
        >
          {props.data.expData.company}
        </button>
      </li>

      {/* Visible on mobile (below md) */}
      <li key={props.index} style={{ listStyle: "none", textAlign: "left" }} className="d-md-none">
        <button
          className={`${styles.section__Jobs_buttonCompany}`}
          onClick={Clicked}
          style={
            props.activeTabId === props.index
              ? { color: "black" }
              : { color: "#8892b0" }
          }
        >
          {props.data.expData.company}
        </button>
      </li>
    </div>
  );
}

export default VTlist;
