import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './EmployeeList.css';
import Employees from '../Employees';

function EmployeeList() {
  const [editableEmployee, setEditableEmployee] = useState(null);
  const [editedEmployee, setEditedEmployee] = useState({});
  const navigate = useNavigate();

  const handleEdit = (employee) => {
    setEditableEmployee(employee);
    setEditedEmployee({ ...employee });
  };

  const handleDelete = (employee) => {
    // Filter out the deleted employee from the Employees array
    const updatedEmployees = Employees.filter((emp) => emp.id !== employee.id);

    // Update the local storage data with the filtered employee list
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    // Clear the editable employee
    setEditableEmployee(null);
  };

  const handleSave = (employee) => {
    // Find the index of the edited employee in the Employees array
    const index = Employees.findIndex((emp) => emp.id === employee.id);

    if (index !== -1) {
      // Update the employee in the Employees array
      Employees[index] = editedEmployee;

      // Update the local storage data
      localStorage.setItem('employees', JSON.stringify(Employees));

      setEditableEmployee(null);
    }
  };

  const handleLogout = () => {
    // Perform logout actions if needed
    // For example, clear user authentication, session, or token

    // Navigate to the login page
    navigate('/');
  };
  

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {Employees.map((employee) => (
          <li key={employee.id} className="employee-card">
            {editableEmployee && editableEmployee.id === employee.id ? (
              <div>
                <strong>Name:</strong> <input type="text" value={editedEmployee.name} onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })} /><br />
                <strong>Surname:</strong> <input type="text" value={editedEmployee.surname} onChange={(e) => setEditedEmployee({ ...editedEmployee, surname: e.target.value })} /><br />
                <strong>Position:</strong> <input type="text" value={editedEmployee.position} onChange={(e) => setEditedEmployee({ ...editedEmployee, position: e.target.value })} /><br />
                <strong>Email:</strong> <input type="text" value={editedEmployee.email} onChange={(e) => setEditedEmployee({ ...editedEmployee, email: e.target.value })} /><br />
                <strong>Phone Number:</strong> <input type="text" value={editedEmployee.phoneNumber} onChange={(e) => setEditedEmployee({ ...editedEmployee, phoneNumber: e.target.value })} /><br />
                <button className="save-button" onClick={() => handleSave(editedEmployee)}>Save</button>
<button className="delete-button" onClick={() => handleDelete(employee)}>Delete</button>

              </div>
            ) : (
              <div>
                <strong>Name:</strong> {employee.name}<br />
                <strong>Surname:</strong> {employee.surname}<br />
                <strong>Position:</strong> {employee.position}<br />
                <strong>Email:</strong> {employee.email}<br />
                <strong>Phone Number:</strong> {employee.phoneNumber}<br />
              </div>
            )}
            <img src={employee.image} alt={`${employee.name} ${employee.surname}`} />
            <br/>
            <div className="button-container">
    <button className="button edit-button" onClick={() => handleEdit(employee)}>
      Edit
    </button>
    <button className="button delete-button" onClick={() => handleDelete(employee.id)}>
      Delete
    </button>
  </div>
          </li>
        ))}
      </ul>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  
  );
}

export default EmployeeList;

