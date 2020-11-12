import React from 'react';
import toolImage from '../images/gear2.png';

function AboutMe() {
  return (
    <div className="section">
        <h1 className="section__title">ВЕБ-РАЗРАБОТЧИК</h1>
        <h2 className="section__title">ВЕБ-РАЗРАБОТЧИК</h2>
        <h3 className="section__title">ВЕБ-РАЗРАБОТЧИК</h3>
        <h4 className="section__title">ВЕБ-РАЗРАБОТЧИК</h4>
        <h5 className="section__title">ВЕБ-РАЗРАБОТЧИК</h5>
        <h6 className="section__title">ВЕБ-РАЗРАБОТЧИК</h6>
        <p className="section__title">ВЕБ-РАЗРАБОТЧИК</p>
        <img className="section__tool-image rotation" src={ toolImage } />
    </div>
  );
}

export default AboutMe;