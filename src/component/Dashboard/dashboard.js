import React, { useState } from 'react';
import swal from 'sweetalert2';
import { employeeData } from '../../data/data';
import Header from '../Dashboard/Header';
import Add from '../Dashboard/Add';
import Edit from '../Dashboard/Edit';
import List from '../Dashboard/List';

const Dashboard = () => {

  const [employees, setEmployees] = useState(employeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    //
  }
  const handleDelete = () => {
    //
  }
  
  return (
    <div className='container'>
      {!isAdding && !isEditing && (
        <>
          <Header 
            setIsAdding={setIsAdding}
          />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* Add  */}
      {isAdding && (
        <Add 
          employees={employees}
          setEmployees={setEmployees}
          setIsAdding={setIsAdding}
        />
      )}
      {/* Edit  */}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  )
}

export default Dashboard