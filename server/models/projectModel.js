export class projectModel {
    constructor(iName, iDescription, iGithubLink, iProjectLink, iTechnologies) {
        this.name = iName;
        this.description = iDescription;
        this.githubLink = iGithubLink;
        this.projectLink = iProjectLink;
        this.technologies = iTechnologies;
    }

    packageAsJSON() {
        let projectOBJ = {
            name: this.name, 
            description: this.description,
            github: this.githubLink,
            url: this.projectLink,
            tech: this.technologies
        }

        return JSON.stringify(projectOBJ);
    }
}