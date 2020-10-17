import React from 'react';
import './projects.css';
import Container from 'react-bootstrap/Container';
import Grid from '@material-ui/core/Grid';

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
                            <div className="card">
                                <div className="cardContent">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <div className="projectTechs">
                                        <p>{project.name} is being developed with:</p>
                                        <ul>
                                            {project.technologies.map((tech) => (
                                                <li>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="projectLinks">
                                        <p>
                                            Visit the <a href={project.githubLink}>GitHub</a> repository for this project,
                                            or take a look at the <a href={project.projectLink}>project demonstration</a>.
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </Container>
                    ))}
                </Container>
            );
        }
    }
}

export default Project;