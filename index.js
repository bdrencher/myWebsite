const express = require('express');
const path = require('path');
const projectController = require('./server/controller/projectController');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get("/projects", (res) => {
    projectController.getProjects(res)
});

app.listen(9000);