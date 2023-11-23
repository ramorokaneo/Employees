import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import RegistrationForm from './Components/Register/RegistrationForm';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dshboard';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import AddEmployeeForm from './Components/Add/AddEmployeeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view" element={<EmployeeList />} />
          <Route path="/add" element={<AddEmployeeForm />} />       
        </Routes>
      </div>
    </Router>
  );
}

export default App;
