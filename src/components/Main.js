import React from 'react';
import toolImage from '../images/tool.png';

function Main() {
  return (
    <section className="section">
      <p className="section__subtitle">Сайт в разработке</p>
      <img className="section__tool-image rotation" src={ toolImage } />
    </section>
  );
}

export default Main;