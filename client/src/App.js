import React from 'react';
import './App.css';
import Project from './Components/projects';

const testProject = <Project name={"name"} description={"description"}
github={"www.github.com"} url={"www.heroku.com"} tech={["React", "Nodejs"]}/>
function App() {
  return (
    <div className="App">
      {testProject}
    </div>
  );
}

export default App;
