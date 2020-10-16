import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './Components/projects';

function App() {
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Ben Rencher</h1>
        <p>
          Welcome to my portfolio site! As you can see, 
          it is still under construction. If you would like
          to see more information about my projects, please
          visit my GitHub page: <a href="https://github.com/bdrencher">GitHub</a>. 
          More information about me can be found on LinkedIn: <a href="https://www.linkedin.com/in/ben-rencher-250114b3/">LinkedIn</a>.
        </p>
      </div>
      <Project />
    </div>
  );
}

export default App;
