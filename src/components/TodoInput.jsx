import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleTodo, value, setValue, edit, handleUpdate} = props
  
  return (
    <div className='main-input mb-4'>
      <span className='my-4'>A smart and intuitive Todo app designed to enhance your lottery experience. Our app helps you stay ahead in the game.</span>
      <div className='input-group mt-5'>
        <input className='form-control py-2'  value={value} onChange={e =>{setValue(e.target.value)}} placeholder='Enter your task' />
        
        <button className='btn btn-primary' onClick={() =>{
          handleTodo(value)
          setValue('')
        }}>
          {edit === null? "Add task" : "Update task"}</button>
          
        
      </div>
    </div>
  )
}

export default TodoInput
