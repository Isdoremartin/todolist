import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
  const {todo} = props
  return (
    <>
    <ul className='main'>
       {todo.map((todo, index) =>{
        return (
          <TodoCard {...props} key={index} index={index}>
             <p>{todo}</p>
          </TodoCard>

        )
       })}
    </ul>
    <div className='main-input'>
      <button className='btn btn-danger'
        onClick={props.handleClear}
        > 
        Clear all
      </button>

    </div>
    </>
  )
}

export default TodoList
