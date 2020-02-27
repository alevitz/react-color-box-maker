import React, { useState } from 'react';
import './BoxList.css';
import uuid from "uuid/v4";
import NewBoxForm from './NewBoxForm';
import Box from './Box';


function BoxList() {

  const [boxes, setBoxes] = useState([]);

  console.log(boxes);
  const addBox = box => {
    let newBox = { ...box, id: uuid() }
    setBoxes(oldBoxes => {
      return [ ...oldBoxes, newBox ];
    });
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <div>{
        boxes.map(b =>
          <div key={b.id}>
            <Box width={b.width} height={b.height} backgroundColor={b.backgroundColor} />
          </div>
        )
      }
      </div>
    </div>
  );

}

export default BoxList;