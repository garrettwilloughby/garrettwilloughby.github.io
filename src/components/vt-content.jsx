import React from "react";
import styles from "./vt-content.module.css";

function VTcontent(props) {
  let data = props.data.expData;

  return (
    <div
      key={props.index}
      className={`${styles.section__Jobs_styledContent}`}
      style={
        props.activeTabId === props.index
          ? { display: "block" }
          : { display: "none" }
      }
    >
      <h4>{data.position}</h4>
      <h5>{data.period}</h5>
      {data.details.map(detail => (
        <p className={`${styles.section__Jobs_detail}`}>{detail}</p>
      ))}
    </div>
  );
}

export default VTcontent;
