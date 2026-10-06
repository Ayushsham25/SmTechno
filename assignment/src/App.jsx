import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Form from './Form.jsx';
import List from './List.jsx';
import Edit from './Edit.jsx';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Fill Form</Link>
        
        <br></br>
        <br></br>
        <hr></hr>
        <Link to="/students"> View Students</Link>
        <br></br>
      
      </nav>
        
      <br></br>  
      <br></br> 

      <hr />

      <br></br>
      <br></br>

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/students" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Router>
  );
}

export default App;