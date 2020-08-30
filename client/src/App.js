import React from 'react';
import './App.css';
import Project from './Components/projects';

const name = "name";
const description = "description";
const github = "www.github.com";
const url = "www.heroku.com";
const tech = ["React", "Nodejs"];

const testProject = <Project name={"name"} description={"description"}
github={"www.github.com"} url={"www.heroku.com"} tech={["React", "Nodejs"]}/>
function App() {
  return (
    <div className="App">
      <Project name={name} description={description} github={github} url={url} tech={tech}/>
    </div>
  );
}

export default App;
