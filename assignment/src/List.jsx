import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const List = () => {
  const [students, setStudents] = useState([]);
  const [email, setEmail] = useState('');

  // fetch student detail
  useEffect(() => {
    fetch('http://localhost:5070/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);


  // search by email
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5070/api/students?search=${email}`)
      .then((res) => res.json())
      .then((data) => setStudents(data));
  };

  // show all student detail
  const handleShowAll = () => {
    setEmail('');
    fetch('http://localhost:5070/api/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  };

  return (
    <div>
      <h2>Student List</h2>

      <form onSubmit={handleSearch}>
        <input
          type="email"
          placeholder="Enter email to search"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleShowAll}>Show All</button>
      </form>

      {students.map((student) => (
        <div key={student._id}>
          <h3>{student.name}</h3>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Phone:</b> {student.phone}</p>
          <p><b>Course:</b> {student.course}</p>
          <p><b>Birthdate:</b> {student.birthdate}</p>
          <p><b>Age:</b> {student.age}</p>
          <Link to={`/edit/${student._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default List;