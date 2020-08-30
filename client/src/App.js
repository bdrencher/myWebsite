import React from 'react';
import './App.css';
import Project from './Components/projects';

const testProject = new Project("Test project", "IDK, this is just a test",
"www.github.com", "www.heroku.com", ["Node.js", "React", "Alexa"]);

function App() {
  return (
    <div className="App">
      {testProject}
    </div>
  );
}

export default App;
