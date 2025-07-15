import ThemeToggle from './ThemeToggle';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <nav className="nav-glass">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
