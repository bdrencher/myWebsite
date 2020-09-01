import React from 'react';
import Container from 'react-bootstrap/Container';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("/projects")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    projects: result.projects
                });
                console.log(result.projects);
            },
            (error) => {
                console.log("An error occured getting project data");
                this.setState({
                    projects: null
                });
            }
        )
    }

    render() {
        const { projects } = this.state;
        if (projects == null) {
            return (
                <div>
                    An error occurred fetching project data
                </div>
            );
        } else {
            return (
                <Container className="projects">
                    {projects.map((project) => (
                        <Container className="project">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.githubLink}>Github</a>
                            <a href={project.projectLink}>Project demonstration</a>
                            <div className="projectTechs">
                                <ul>
                                    {project.technologies.map((tech) => (
                                        <li>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </Container>  
                    ))}
                </Container>
            );
        }
    }
}

// const Project = props => {
//     const name = props.name;
//     const description = props.description;
//     const github = props.github;
//     const url = props.url;
//     const tech = props.tech.map((techName) => {
//         return (
//         <li>{techName}</li>
//         );
//     });
//     return (
//         <div className="project">
//             <h3>{name}</h3>
//             <p>{description}</p>
//             <a href={github}>GitHub</a>
//             <a href={url}>Project demonstration</a>
//             <p>This project uses the following technologies:</p>
//             <ul>{tech}</ul>
//             IT WORKED!!!!
//         </div>
//     )
// }

export default Project;