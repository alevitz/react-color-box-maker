import React, { useState } from 'react';

function NewBoxForm({ addBox }) {

  const initialData = {
    width: "",
    height: "",
    backgroundColor: ""
  }

  const [formData, setFormData] = useState(initialData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(initialData);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width"> Width: </label>
      <input name="width" id="width" value={formData.width} onChange={handleChange} />
      <label htmlFor="height"> Height: </label>
      <input name="height" id="height" value={formData.height} onChange={handleChange} />
      <label htmlFor="backgroundColor"> Background Color: </label>
      <input name="backgroundColor" id="backgroundColor" value={formData.backgroundColor} onChange={handleChange} />
      <button>Submit</button>
    </form>
  )
}




export default NewBoxForm;