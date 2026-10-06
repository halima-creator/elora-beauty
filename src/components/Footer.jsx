function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <div className="footer-logo">
            <span>ÉLORA</span>
            <small>BEAUTY STUDIO</small>
          </div>

          <p>
            Votre beauté, notre signature.
            <br />
            Un moment pensé rien que pour vous.
          </p>

        </div>

        <div className="footer-column">

          <h4>Navigation</h4>

          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#galerie">Galerie</a>
          <a href="#apropos">À propos</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column">

          <h4>Nous trouver</h4>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Casablanca+Maroc"
            target="_blank"
            rel="noreferrer"
          >
            Casablanca
            <br />
            Maroc
          </a>

          <p>
            Lun - Sam
            <br />
            09h00 - 19h00
          </p>

        </div>

        <div className="footer-column">

          <h4>Suivez-nous</h4>

          <div className="footer-socials">

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>

            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
            >
              TikTok ↗
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 ÉLORA BEAUTY STUDIO
        </span>

        <span>
          Tous droits réservés
        </span>

      </div>
     
    </footer>
  );
}

export default Footer;