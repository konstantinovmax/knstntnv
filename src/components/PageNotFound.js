import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
  return (
    <div className="section">
      <p className="section__subtitle">404 - Страница не найдена</p>
      <Link className="button button_type_to-main" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;