import React from 'react';

const Project = props => {
    const name = props.name;
    const description = props.description;
    const github = props.github;
    const url = props.url;
    const tech = props.tech.map((techName) => {
        return (
        <li>{techName}</li>
        );
    });
    return (
        <div className="project">
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={github}>GitHub</a>
            <a href={url}>Project demonstration</a>
            <p>This project uses the following technologies:</p>
            <ul>{tech}</ul>
            IT WORKED!!!!
        </div>
    )
}

export default Project;