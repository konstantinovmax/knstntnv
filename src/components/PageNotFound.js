import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
  return (
    <div className="section">
      <h1 className="section__title">404 - Страница не найдена</h1>
      <Link className="button button_type_to-main" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;