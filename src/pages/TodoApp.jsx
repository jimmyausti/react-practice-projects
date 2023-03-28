import React, {useState} from 'react'
import TodoAppComponent from '../components/TodoAppComponent'

const TodoApp = () => {

  const [todoList, setTodolist] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleTasks = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false
    }
    setTodolist([...todoList, task])
  }

  const deleteFunction = (id) => {
    setTodolist(todoList.filter((task) => task.id !== id ))
  }

  const completeFunction = (id) => {
    setTodolist(todoList.map((task) => task.id === id ? {...task, isCompleted: true} : task))
  }

  return (
    <div>
        <h1>Todo App</h1>
        <input onChange={(event) => setNewTask(event.target.value)} placeholder='enter a task'type="text" />
        <button onClick={handleTasks}>Add</button>
        {todoList.map((task) => (
          <TodoAppComponent 
            {...task}
            deleteFunction={deleteFunction}
            completeFunction={completeFunction}
          />
        ))}

    </div>
  )
}

export default TodoApp