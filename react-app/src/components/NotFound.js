import React from 'react';

const NotFound = () => (
  <div className="content-container">
    <div className="content-title-group not-found">
      <i className="fas fa-exclamation-triangle" aria-hidden="true" />
      &nbsp;
      <span className="title">{`The page you're looking for wasn't found.`}</span>
    </div>
  </div>
);

export default NotFound;
