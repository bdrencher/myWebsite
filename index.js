const express = require('express');
const path = require('path');
const projectController = require('./server/controller/projectController');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get("/projects", (req, res) => {
    projectController.getProjects(res)
});

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.listen(process.env.PORT);