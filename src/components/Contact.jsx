function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous chez ÉLORA BEAUTY STUDIO."
  );

  return (
    <section className="contact" id="contact" data-aos="fade-up">

      <div className="contact-content">

        <p className="contact-label">
          Contact
        </p>

        <h2>
          Prête à prendre
          <br />
          soin de vous ?
        </h2>

        <p className="contact-text">
          Réservez votre moment beauté chez ÉLORA BEAUTY STUDIO.
          Notre équipe sera ravie de vous accueillir dans un
          espace pensé pour votre bien-être.
        </p>

        <div className="contact-details">

          <div className="contact-detail">
            <span>Adresse</span>
            <strong>Casablanca, Maroc</strong>
          </div>

          <div className="contact-detail">
            <span>Téléphone</span>
            <strong>+212 6 00 00 00 00</strong>
          </div>

          <div className="contact-detail">
            <span>Horaires</span>
            <strong>Lun - Sam : 09h00 - 19h00</strong>
          </div>

        </div>

        <div className="contact-buttons">

          <a
            href="tel:+212600000000"
            className="primary-button"
          >
            Appeler
            <span>→</span>
          </a>

          <a
            href={`https://wa.me/212600000000?text=${whatsappMessage}`}
            className="secondary-button"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
            <span>↗</span>
          </a>

        </div>

      </div>

      <div className="contact-visual">

        <div className="contact-card">

          <span className="contact-card-label">
            VISITEZ-NOUS
          </span>

          <h3>
            ÉLORA
            <br />
            BEAUTY STUDIO
          </h3>

          <div className="contact-card-line"></div>

          <p>
            Casablanca
            <br />
            Maroc
          </p>

          <span className="contact-card-icon">
            ✦
          </span>

        </div>

      </div>

    </section>
  );
}

export default Contact;