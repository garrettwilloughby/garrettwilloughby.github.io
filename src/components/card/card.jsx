import React from 'react';
import { IconGitHub, IconExternal} from '../../assets/icons/index';
import styles from "./card.module.css"

const CardComponent = ({ cards }) => {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card">
              <div className="card-body">
              <div className='d-flex flex-direction-row'>
                <p className={`${styles.svg}`}><IconGitHub /></p>
                  <p className={`${styles.svg}`}><IconExternal/></p>
                </div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;