import React from 'react';
import '../styles/About.css';
import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaLinux
} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiVite,
  SiExpress,
  SiNixos
} from 'react-icons/si';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">{/* <img ... /> */}</div>
        <div className="about-text">
          <h2>About Me</h2>
          <h3>Étudiant développeur fullstack à EPITECH</h3>
          <p>
            Passionné par la programmation, les systèmes et les projets concrets, je suis actuellement en deuxième année à <strong>EPITECH Nancy</strong>. Curieux et rigoureux, je développe principalement en <strong>C++, JavaScript/React</strong> et m’intéresse aux environnements Linux, au web moderne et à l’intelligence artificielle.
          </p>
          <p>
            De nature <strong>introvertie</strong>, <strong>analytique</strong> et <strong>autonome</strong>, j’aime comprendre les choses en profondeur et concevoir des solutions efficaces. Mon ancien parcours sportif m’a appris la discipline et l’adaptation – des qualités que je retrouve aujourd’hui dans le développement.
          </p>

          <div className="skills">
            <h4>Compétences principales</h4>

            <div className="skill-group">
              <span className="skill-label">Langages :</span>
              <div className="skill-buttons">
                <a className="skill-button" href="https://en.cppreference.com/w/c" target="_blank" rel="noopener noreferrer"><SiC /> C</a>
                <a className="skill-button" href="https://en.cppreference.com/" target="_blank" rel="noopener noreferrer"><SiCplusplus /> C++</a>
                <a className="skill-button" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer"><FaJs /> JavaScript</a>
                <a className="skill-button" href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer"><FaHtml5 /> HTML</a>
                <a className="skill-button" href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer"><FaCss3Alt /> CSS</a>
                <a className="skill-button" href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer"><FaPython /> Python</a>
              </div>
            </div>

            <div className="skill-group">
              <span className="skill-label">Frontend :</span>
              <div className="skill-buttons">
                <a className="skill-button" href="https://reactjs.dev/" target="_blank" rel="noopener noreferrer"><FaReact /> React</a>
                <a className="skill-button" href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><SiVite /> Vite</a>
              </div>
            </div>

            <div className="skill-group">
              <span className="skill-label">Backend :</span>
              <div className="skill-buttons">
                <a className="skill-button" href="https://nodejs.org/en/docs" target="_blank" rel="noopener noreferrer"><FaNodeJs /> Node.js</a>
                <a className="skill-button" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer"><SiExpress /> Express</a>
              </div>
            </div>

            <div className="skill-group">
              <span className="skill-label">Outils :</span>
              <div className="skill-buttons">
                <a className="skill-button" href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer"><FaGitAlt /> Git</a>
                <a className="skill-button" href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer"><FaDocker /> Docker</a>
                <a className="skill-button" href="https://wiki.archlinux.org/title/Linux" target="_blank" rel="noopener noreferrer"><FaLinux /> Linux</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
