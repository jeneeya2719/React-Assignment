// src/TaskManager.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import './TaskManager.css';

const TaskManager = () => {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTaskList([...taskList, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    setTaskList(taskList.filter((task, i) => i !== index));
  };

  const toggleTask = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTasks);
  };

  const initiateEditTask = (index) => {
    setEditIndex(index);
    setEditTask(taskList[index].text);
  };

  const saveTask = (index) => {
    const updatedTasks = taskList.map((task, i) =>
      i === index ? { ...task, text: editTask } : task
    );
    setTaskList(updatedTasks);
    setEditIndex(null);
    setEditTask('');
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="task-input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {taskList.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            removeTask={removeTask}
            toggleTask={toggleTask}
            initiateEditTask={initiateEditTask}
            saveTask={saveTask}
            isEditing={editIndex === index}
            editTask={editTask}
            setEditTask={setEditTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
