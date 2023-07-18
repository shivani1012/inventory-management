import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employees, setEmployees, setIsAdding}) => {

  const [allValues, setAllValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    salary: '',
    date: ''
  })

  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, [])

  const changeHandler = (e) => {
    setAllValues( prevValues => {
      return { ...prevValues, [e.target.name]: e.target.value}
    })
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if(!allValues.firstName || !allValues.lastName || !allValues.email || !allValues.salary || !allValues.date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are mandatory!',
        showConfirmButton: true
      })
    }

    const id = employees.length + 1;
    const newEmployees = {
      id: id,
      firstName: allValues.firstName,
      lastName: allValues.lastName,
      email: allValues.email,
      salary: allValues.salary,
      date: allValues.date
    }
    employees.push(newEmployees);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${allValues.firstName} ${allValues.lastName}'s data has been added!`,
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div>
      <h1>Add</h1>
      <form onSubmit={handleAdd}>
        <div className='flex-row'>
          <div className='flex-small'>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              name='firstName'
              className='form-input'
              type='text'
              ref={textInput}
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
            <input type='submit' value='Add' />
            <input 
              style={{ marginLeft: '12px' }}
              type='button'
              className='muted-button'
              value='Cancel'
              onClick={() => setIsAdding(false)}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add
