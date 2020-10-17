const express = require('express');
const path = require('path');
const projectController = require('./server/controller/projectController');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get("/projects", (req, res) => {
    projectController.getProjects(res)
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get("/repositoryNotAvailable", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get("/projectDemoNotAvailable", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("Listening on " + port);
});