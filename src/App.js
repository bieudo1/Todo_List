import React, {useState} from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';
import AddTaskFrom from './components/AddTaskFrom';


function App() {
  const [tasks, setTasks] =useState([
    {id : "task_1", title: "Learn JS", status: 0},
    {id : "task_2",title: "code a todo list", status: 0},
  ]);

  const [showIncomplete, setShowIncomplete] =useState(false);

  const [newTask, setNewTask] =useState("");

  const setTaskStatus = (taskId, status) => {
    setTasks(tasks.map((task) => {
      if (task.id === taskId) {
        return {...task,status : status ? 1 : 0};
      }
      return task;
    })
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask){
      const task= {
        id : Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
<div id="container">
  <Header title="Todo List" subTitle = "Get things done"/>

  <TaskList
   tasks={tasks} 
   showIncomplete={showIncomplete} 
   setTaskStatus={setTaskStatus} 
   removeTask={removeTask}
   setShowIncomplete = {setShowIncomplete}
   />
   <AddTaskFrom handleSubmit = {handleSubmit} newTask = {newTask} handleInputChange = {handleInputChange} />
</div>
  );
}

export default App;
