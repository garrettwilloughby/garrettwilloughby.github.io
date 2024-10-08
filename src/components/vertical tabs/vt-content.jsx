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
      <div className="d-flex flex-wrap align-items-center">
        <h4>{data.position}</h4>
        <h4 className="fancycompany ms-2">@ {data.company}</h4>
      </div>
      <h5>{data.period}</h5>
      {data.details.map(detail => (
        <p className={`${styles.section__Jobs_detail}`}>{detail}</p>
      ))}
    </div>
  );
}

export default VTcontent;
