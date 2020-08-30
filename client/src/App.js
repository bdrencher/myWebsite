import React from 'react';
import './App.css';
import Project from './Components/projects';

const testProject = <Project name={"name"}/>
function App() {
  return (
    <div className="App">
      {testProject}
    </div>
  );
}

export default App;
