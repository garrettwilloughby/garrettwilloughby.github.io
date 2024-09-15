import React from 'react';
import { IconGitHub, IconExternal} from '../../assets/icons/index';
import styles from "./card.module.css"
import Tag from '../tag/tag';

const CardComponent = ({ cards }) => {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100 w-100">
              <div className="card-body d-flex flex-column">
                <div className='d-flex flex-direction-row justify-content-between'>
                  <p className={`${styles.svg}`} onClick={() => window.open(card.link, '_blank')}>
                    <IconGitHub />
                  </p>
                </div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>

                <div className='d-flex flex-direction-row align-items-end mt-auto'>
                  {card.tech.map((techItem, techIndex) => (
                    <Tag key={techIndex} text={techItem} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;