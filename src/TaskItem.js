// src/TaskItem.js
import React from 'react';
import './TaskItem.css';

const TaskItem = ({
  task,
  index,
  removeTask,
  toggleTask,
  initiateEditTask,
  saveTask,
  isEditing,
  editTask,
  setEditTask
}) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTask}
            onChange={(e) => setEditTask(e.target.value)}
          />
          <button onClick={() => saveTask(index)}>Save</button>
        </>
      ) : (
        <>
          <span onClick={() => toggleTask(index)}>{task.text}</span>
          <div className="button-group">
            <button onClick={() => initiateEditTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TaskItem;
