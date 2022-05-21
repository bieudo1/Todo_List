import React from 'react'

function AddTaskFrom({handleSubmit, newTask, handleInputChange}) {
  return (
    <form onSubmit={handleSubmit}  className="form">
    <label htmlFor="newitem">Add to the todo list</label>
    <input type="text" id="newitem" value={newTask} onChange={handleInputChange} />
    <button type="sumbumit">Add Item</button>
  </form>
  )
}

export default AddTaskFrom
