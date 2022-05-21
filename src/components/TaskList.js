import React from 'react'
import Taskltem from './Taskltem'

function TaskList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
  return (
      <>
    <ul className="task-list">
    {tasks.filter(task => showIncomplete ? task.status!== 1 : true).map(task =>(
    <Taskltem key={task.id} task = {task} setTaskStatus = {setTaskStatus} removeTask = {removeTask} /> ))}
  </ul>
    <div className="filter-wrapper">
    <label htmlFor="filter" className="filter-label">show incompleted tasks only</label>
    <input type="checkbox" id="filter" checked={showIncomplete} onChange = {(e) => setShowIncomplete(e.target.checked)} />
  </div>
  </>
  )
}

export default TaskList
