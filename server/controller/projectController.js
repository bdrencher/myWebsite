module.exports = {
    getProjects: getProjects
}

import { projectModel } from "../models/projectModel";

const database = require('../database/databaseHelper');

function getProjects(callback) {
    packageProjects((data) => {
        if (data == null) {
            console.log("Could not get projects");
        }
        else {
            callback(data);
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
            let tempList = [];
            for (row of result) {
                if (row.project == currentProject) {
                    tempList.push(row.tech);
                } else {
                    techList.push(tempList);
                    tempList = [];
                    tempList.push(row.tech);
                    currentProject = row.project;
                }
            }
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
            for (row in details) {
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