function WhatsAppButton() {
  const message = encodeURIComponent(
    "Bonjour, je souhaite prendre rendez-vous chez ÉLORA BEAUTY STUDIO."
  );

  return (
    <a
      href={`https://wa.me/212600000000?text=${message}`}
      className="whatsapp-floating"
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter ÉLORA BEAUTY sur WhatsApp"
    >
      <span className="whatsapp-icon">☏</span>
      <span className="whatsapp-text">
        Réserver sur WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;