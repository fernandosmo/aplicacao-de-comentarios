import React from 'react';

import './Coments.css';
import userImage from './user.png';

const Coments = (props) => {
  return (
    <div className="coments">
      <img className="avatar" src={userImage} alt={props.name} />
      <div className="content">
        <h2 className="name">{props.name}:</h2>
        <p className="email">{props.email}</p>
        <p className="message">{props.children}</p>
        <p className="date">{props.date.toString()}</p>
        <button className="button" onClick={props.onRemove}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Coments;
