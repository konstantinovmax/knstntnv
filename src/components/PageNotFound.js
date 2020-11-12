import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
  return (
    <div className="section">
      <h1 className="section__title">404 - СТРАНИЦА НЕ НАЙДЕНА</h1>
      <Link className="button button_type_to-main" to="/">НАЗАД</Link>
    </div>
  )
}

export default PageNotFound;