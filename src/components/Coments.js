import React from 'react';

import './Coments.css';

const Coments = (props) => {
  return (
    <div className="coments">
      <h2>{props.name}:</h2>
      <p>{props.email}</p>
      <p>{props.children}</p>
      <p>{props.date.toString()}</p>
      <button onClick={props.onRemove}>&times;</button>
    </div>
  );
};

export default Coments;
