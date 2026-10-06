import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <a href="#accueil" className="navbar-logo" onClick={closeMenu}>
        <span>ÉLORA</span>
        <small>BEAUTY STUDIO</small>
      </a>

      <nav className={menuOpen ? "navbar-menu active" : "navbar-menu"}>

        <a href="#accueil" onClick={closeMenu}>
          Accueil
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#galerie" onClick={closeMenu}>
          Galerie
        </a>

        <a href="#apropos" onClick={closeMenu}>
          À propos
        </a>

        <a href="#temoignages" onClick={closeMenu}>
          Témoignages
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      <a
        href="#contact"
        className="nav-button"
        onClick={closeMenu}
      >
        Prendre rendez-vous
      </a>

      <button
        className={menuOpen ? "menu-toggle active" : "menu-toggle"}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </header>
  );
}

export default Navbar;