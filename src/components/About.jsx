function About() {
  return (
    <section className="about" id="apropos"  data-aos="fade-up">

      <div className="about-image">
        <img
          src="/image/07-espace-soin.jpg"
          alt="Espace beauté ÉLORA"
        />
      </div>

      <div className="about-content">

        <p className="about-label">
          À propos de nous
        </p>

        <h2>
          Un moment pour vous,
          <br />
          une beauté qui vous ressemble.
        </h2>

        <p className="about-text">
          Chez ÉLORA BEAUTY STUDIO, nous croyons que la beauté
          commence par un moment de bien-être.
        </p>

        <p className="about-text">
          Notre équipe vous accompagne avec attention et
          professionnalisme pour vous offrir une expérience
          personnalisée, dans un espace élégant et apaisant.
        </p>

        <div className="about-stats">

          <div>
            <strong>5+</strong>
            <span>Années d'expérience</span>
          </div>

          <div>
            <strong>1000+</strong>
            <span>Clientes satisfaites</span>
          </div>

          <div>
            <strong>5</strong>
            <span>Prestations beauté</span>
          </div>

        </div>

        <a href="#contact" className="primary-button">
          Découvrir notre univers
        </a>

      </div>

    </section>
  );
}

export default About;