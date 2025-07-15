import React from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    title: "Raytracer",
    description: "Moteur 3D temps réel avec rendu de scènes et lumières.",
    image: "/src/assets/raytracer.png",
    stack: ["C++", "SFML"],
  },
  {
    title: "Arcade",
    description: "Plateforme de jeux rétro en C++ avec bibliothèques dynamiques.",
    image: "/src/assets/arcade.png",
    stack: ["C++", "SDL2", "SFML", "ncurses"],
  },
  {
    title: "Bot Discord",
    description: "Bot Discord",
    image: "/src/assets/discord_bot.svg",
    stack: ["C++", "D++"],
    github: "https://github.com/processssss/Discord_Bot"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Mes projets</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
