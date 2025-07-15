import React from 'react';
import '../styles/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import ShinyText from '../components/ShinyText';


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <ShinyText text="N'hésite pas à me contacter pour échanger autour d'un projet ou d'une opportunité." disabled={false} speed={3} className='custom-class' />

      <div className="contact-methods">
        <a href="mailto:felix.douaud@epitech.eu" className="contact-item" title="Envoyer un email">
          <FaEnvelope className="icon" />
          <span>felix.douaud@epitech.eu</span>
        </a>
        <a href="https://github.com/processssss" className="contact-item" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          <span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/felixdouaud" className="contact-item" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
          <span>LinkedIn</span>
        </a>
        <a href="https://discord.com/users/321289289164128265" className="contact-item" title="Voir mon profil Discord" target="_blank" >
          <FaDiscord className="icon" />
          <span>Discord</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
