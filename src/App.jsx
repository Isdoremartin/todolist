import { useEffect, useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  
  
  const [todo, setTodo] = useState([])
  const [value, setValue] = useState('')
  const [edit, setEdit] = useState(null)
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos:newList}))
  }

  function handleTodo(newtodo){
    if(newtodo != " "){

      const newList = [...todo, newtodo]
      persistData(newList)
      setTodo(newList)
  
      if(edit != null){
        setEdit(null)
      }
    }
    
  }
  function handleDelete(id){
    const newList = todo.filter((todo, index) => {
      return index !== id
    })
    persistData(newList)
    setTodo(newList)
  }
  function handleEdit(index){
    const updatetodo = todo[index]
    setValue(updatetodo)
    handleDelete(index)
    setEdit(index)
  }

  
  function handleClear(){
    const newList = []
    persistData(newList)
    setTodo(newList)
  }

  useEffect(() =>{
    if(!localStorage){
      return
    }
     let localTodos = localStorage.getItem('todos')
     if(!localTodos){
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodo(localTodos)
  }, [])

  return (
    <>
      <TodoInput handleTodo={handleTodo} value={value} setValue={setValue} edit={edit} />
      <TodoList todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleClear={handleClear} />
    </>
  )
}

export default App
