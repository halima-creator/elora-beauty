function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">

        <p className="hero-label">
          ÉLORA BEAUTY STUDIO
        </p>

        <h1>
          Votre beauté,
          <br />
          notre signature.
        </h1>

        <p className="hero-description">
          Une expérience beauté pensée pour vous,
          dans un cadre élégant et apaisant.
          Coiffure, soins, onglerie et bien plus...
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-button">
            Prendre rendez-vous
          </a>

          <a href="#services" className="secondary-button">
            Découvrir nos services
          </a>
        </div>

        <div className="hero-features">
          <span>✦ Produits de qualité</span>
          <span>♡ Équipe professionnelle</span>
          <span>⌖ En plein centre de Casablanca</span>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/image/01-salon-interieur.jpg"
          alt="Élora Beauty Studio"
        />
      </div>
    </section>
  );
}

export default Hero;