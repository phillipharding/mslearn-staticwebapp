import React from 'react';
import { NavLink } from 'react-router-dom';

const ListHeader = ({ title, handleRefresh, routePath }) => {
  return (
    <div className="content-title-group">
      <NavLink to={routePath}>
        <h2 className="title">{title}</h2>
      </NavLink>
      {(handleRefresh) && (
        <button
          className="button refresh-button"
          onClick={handleRefresh}
          aria-label="refresh"
        >
          <i className="fas fa-sync" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ListHeader;
