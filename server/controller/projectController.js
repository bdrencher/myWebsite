module.exports = {
    getProjects: getProjects,
}

const projectModel = require("../models/projectModel");

const database = require('../database/databaseHelper');

function getProjects(res) {
    packageProjects((data) => {
        if (data == null) {
            console.log("Could not get projects");
            res.status(400).json({success: false});
        }
        else {
            res.status(200).json({projects: data});
        }
    });
}

function getDetails(callback) {
    database.getDetails((err, result) => {
        let detailsList = [];
        if (err || result == null) {
            console.log("Could not get details from database helper.");
            callback(null);
        } else {
            for (row of result) {
                detailsList.push(row);
            }
            callback(detailsList);
        }
    });
}

function getTech(callback) {
    database.getTechData((err, result) => {
        let techList = [];
        if (err || result == null) {
            console.log("Could not get tech details from database helper.");
            callback(null);
        } else {
            let currentProject = result[0].project;
            let temporaryList = [];
            for (row of result) {
                if (row.project == currentProject) {
                    temporaryList.push(row.tech);
                } else {
                    techList.push(temporaryList);
                    temporaryList = [];
                    temporaryList.push(row.tech);
                    currentProject = row.project;
                }
            }
            techList.push(temporaryList); // get the final list into the array
            callback(techList);
        }
    });
}

function packageProjects(callback) {
    getDetails((details) => {
        let projects = [];
        if (details == null) {
            console.log("No details");
            callback(null);
        } else {
            for (row of details) {
                let project = new projectModel(row.name, row.description, row.github, row.url, null);
                projects.push(project);
            }
        }

        getTech((tech) => {
            if (tech == null) {
                console.log("No tech lists");
                callback(null);
            } else {
                for (let i = 0; i < tech.length; i++) {
                    projects[i].setTech(tech[i]); // should be same number of tech lists and projects
                }
                callback(projects);
            }
        });
    });
}