import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    birthdate: '',
    age: '',
    userimage: ''
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await fetch('http://localhost:5070/api/students', {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, age: Number(formData.age) })

    });

    alert('Submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>

      <input name="name" placeholder="Name" onChange={handleChange} required />
      <br></br>
      <br></br>

      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <br></br>
      <br></br>

      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <br></br>
      <br></br>

      <input name="course" placeholder="Course" onChange={handleChange} required />
      <br></br>
      <br></br>

      <input name="birthdate" placeholder="Birthdate" onChange={handleChange} required />
      <br></br>
      <br></br>

      <input name="age" type="number" placeholder="Age" onChange={handleChange} required />

      <br></br>
      <br></br>

      <input name="userimage" placeholder="Image URL" onChange={handleChange} />

      <br></br>
      <br></br>

      <button type="submit">Submit</button>

    </form>
  );
};

export default Form;