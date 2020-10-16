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
                <Grid container className="projects" justify="flex-start" direction="column" alignItems="center" spacing={5}>
                    {projects.map((project) => (
                        <Grid item className="gridItem">
                            <Container className="project">
                                <div className="card">
                                    <div.Title>{project.name}</div.Title>
                                    <div.Text>{project.description}</div.Text>
                                    <a href={project.githubLink}>Github</a>
                                    <a href={project.projectLink}>Project demonstration</a>
                                    <div className="projectTechs">
                                        <ul>
                                            {project.technologies.map((tech) => (
                                                <li>{tech}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Container>
                        </Grid>  
                    ))}
                </Grid>
            );
        }
    }
}

export default Project;