import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, image, stack, github }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="stack">{stack.join(", ")}</p>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            Voir sur GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
