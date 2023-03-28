import React from 'react'

const TodoAppComponent = ({id, taskName, isCompleted, deleteFunction, completeFunction}) => {
  return (
    <div style={{backgroundColor: isCompleted && 'green'}}>
        <h1>{taskName}</h1>
        <button onClick={() => deleteFunction(id)}>Delete</button>
        <button onClick={() => completeFunction(id)}>Completed</button>
    </div>
  )
}

export default TodoAppComponent