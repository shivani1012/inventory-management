import React, { useState } from 'react';
import { employeeData } from '../../data/data';
import Header from '../Dashboard/Header';
import Add from '../Dashboard/Add';
import Edit from '../Dashboard/Edit';
import List from '../Dashboard/List';
import Swal from 'sweetalert2';

const Dashboard = () => {

  const [employees, setEmployees] = useState(employeeData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (id) => {
    const [employee] = employees.filter(employee => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true)
  }
  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert it",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!'
    }).then(result => {
      if(result.value) {
        const [employee] = employees.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted!`,
          showConfirmButton: false,
          timer: 2000,
        })

        setEmployees(employees.filter(employee => employee.id !== id))
      }
    })
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