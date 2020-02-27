import React from 'react';
import './Box.css';

function Box({ width, height, backgroundColor, remove }) {

  let style = {
    width,
    height,
    backgroundColor
  };

  return (
    <div style={style} >
    <button className="Box-button" onClick={remove}>X</button>  
    </div>
  );

}

export default Box;