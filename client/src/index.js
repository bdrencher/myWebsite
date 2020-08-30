import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Project from './Components/projects';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);