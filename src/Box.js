import React from 'react';
import './Box.css';

function Box({ width, height, backgroundColor, remove }) {

  let style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor
  };

  return (
    <div>
    <div style={style} className="Box"></div>
    <button className="Box-button" onClick={remove}>X</button>  
    </div>
  );

}

export default Box;