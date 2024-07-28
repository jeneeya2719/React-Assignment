// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TaskManager from './TaskManager';

ReactDOM.render(
  <React.StrictMode>
    <TaskManager />
  </React.StrictMode>,
  document.getElementById('root')
);
