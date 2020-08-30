class Project extends React.Component {
    constructor(iName, iDescription, iGithub, iURL, iTechnologies) {
        super();
        this.name = iName;
        this.description = iDescription;
        this.github = iGithub;
        this.url = iURL;
        this.tech = iTechnologies;
        this.techList = this.tech.map((tech) => <li>{tech}</li>);
    }

    render() {
        return (
            <div className="project">
                <h3>{this.name}</h3>
                <p>{this.description}</p>
                <a href={this.github}>GitHub</a>
                <a href={this.url}>Project demonstration</a>
                <p>This project uses the following technologies:</p>
                <ul>{this.techList}</ul>
                IT WORKED!!!!
            </div>
        )
    }
}