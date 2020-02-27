import React, { useState } from 'react';
import './BoxList.css';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';


function BoxList() {

  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    let newBox = { ...box, id: uuid() }
    setBoxes(oldBoxes => [ ...oldBoxes, newBox ]);
  }

  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      <div>{
        boxes.map(b =>
          <div key={b.id}>
            <Box width={b.width} height={b.height} backgroundColor={b.backgroundColor} remove={evt => remove(b.id)}/>
          </div>
        )
      }
      </div>
    </div>
  );

}

export default BoxList;