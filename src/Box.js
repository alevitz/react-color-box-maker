import React from 'react';
import './Box.css';

function Box({ width, height, backgroundColor, remove, id}) {

  // handleRemove = box => {

  // }

  let style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor
  };

  return (
    <div className="Box" data-testid='box'>
    <div style={style}></div>
    <button className="Box-button" onClick={remove}>X</button>  
    </div>
  );

}

export default Box;