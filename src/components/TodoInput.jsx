import React, { useState } from 'react'

const TodoInput = (props) => {
  const {handleTodo, value, setValue, edit, handleUpdate} = props
  
  return (
    <div className='main-input'>
      <div className='input-group'>
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
