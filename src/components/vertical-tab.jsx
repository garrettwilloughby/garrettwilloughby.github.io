import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import VTlist from "./vt-list";
import VTcontent from "./vt-content";

import styles from "./vertical-tab.module.css";

function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);

  function btnClick(id) {
    setActiveTabId(id);
  }

  return (
    <Container className={`${styles.section__Jobs}`}>
      <Row>
        <Col sm="3">
          <div className={`${styles.section__Jobs_styledTab}`}>
            <ul className={`${styles.section__Jobs_styledTabList}`}>
              {props.data.map((job, index) => (
                <VTlist
                  key={index}
                  onClick={btnClick}
                  data={job}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
        </Col>
        <Col sm="9">
          {props.data.map((job, index) => (
            <VTcontent
              data={job}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </Col>
      </Row>
      <span
        className={
          activeTabId === 0
            ? styles.index1
            : activeTabId === 1
            ? styles.index2
            : activeTabId === 2
            ? styles.index3
            : styles.index4  // Add a fourth class for the fourth index
        }
      >
        &nbsp;
      </span>
    </Container>
  );
}

export default VerticalTab;
