import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <div>
      <header>
        <h1>Employee Management Software</h1>
        <button 
          onClick={() => setIsAdding(true)} 
          className='round-button'>
            Add Employee
        </button>
      </header>
    </div>
  )
}

export default Header
