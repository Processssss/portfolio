// src/sections/Home.jsx
import ShinyText from '../components/ShinyText';

function Home() {
  return (
    <section id="home" className="home-section">
        <h1>Félix Douaud</h1>
        <h2>Étudiant EPITECH</h2>
        <ShinyText text="Développeur fullstack passionné par la création d'expériences web modernes." disabled={false} speed={3} className='custom-class' />
    </section>
  );
}

export default Home;
