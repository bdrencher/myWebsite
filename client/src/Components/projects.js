import React from 'react';
import './projects.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
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
                <Grid className="projects" justify="flex-start" direction="column" alignItems="center" spacing={5}>
                    {projects.map((project) => (
                        <Container className="project">
                            <Card className="card">
                                <Card.Title>{project.name}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <a href={project.githubLink}>Github</a>
                                <a href={project.projectLink}>Project demonstration</a>
                                <div className="projectTechs">
                                    <ul>
                                        {project.technologies.map((tech) => (
                                            <li>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </Container>  
                    ))}
                </Grid>
            );
        }
    }
}

export default Project;