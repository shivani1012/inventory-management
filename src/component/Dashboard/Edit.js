import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ employees, selectedEmployee, setEmployees, setIsEditing}) => {

  const [allValues, setAllValues] = useState({
    id: selectedEmployee.id,
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName, 
    email: selectedEmployee.email,
    salary: selectedEmployee.salary,
    date: selectedEmployee.date
  })

  const changeHandler = (e) => {
    setAllValues( prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value}
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    if(!allValues.firstName || !allValues.lastName || !allValues.email || !allValues.salary || !allValues.date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are mandatory!',
        showConfirmButton: true
      })
    }

    const updateEmployees = {
      id: allValues.id,
      firstName: allValues.firstName,
      lastName: allValues.lastName,
      email: allValues.email,
      salary: allValues.salary,
      date: allValues.date
    }

    for (let i = 0; i < employees.length; i++) {
      if(employees[i].id === allValues.id) {
        employees.splice(i, 1, updateEmployees);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${employees.firstName} ${employees.lastName}'s data has been updated!`,
      showConfirmButton: false,
      timer: 2000
    })

  }

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleUpdate}>
        <div className='flex-row'>
          <div className='flex-small'>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              className='form-input'
              type='text'
              value={allValues.firstName}
              onChange={changeHandler}
            />
          </div>
          <div className='flex-small'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              name='lastName'
              className='form-input'
              type='text'
              value={allValues.lastName}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-small'>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              className='form-input'
              type='text'
              value={allValues.email}
              onChange={changeHandler}
            />
          </div>
          <div className='flex-small'>
            <label htmlFor='salary'>Salary ($)</label>
            <input
              id='salary'
              name='salary'
              className='form-input'
              type='number'
              value={allValues.salary}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='flex-row'>
          <div className='flex-large'>
            <label htmlFor='date'>Date</label>
            <input
              id='date'
              name='date'
              className='form-input'
              type='date'
              value={allValues.date}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className='flex-row' style={{marginTop: '30px'}}>
          <div className='flex-large'>
            <input type='submit' value='Update' />
            <input 
              style={{ marginLeft: '12px' }}
              type='button'
              className='muted-button'
              value='Cancel'
              onClick={() => setIsEditing(false)}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Edit
