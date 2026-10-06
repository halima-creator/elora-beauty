const pricingItems = [
  {
    name: "Brushing",
    description: "Mise en beauté et coiffage",
    price: "120 DH",
  },
  {
    name: "Coupe & Brushing",
    description: "Coupe personnalisée + brushing",
    price: "180 DH",
  },
  {
    name: "Coloration",
    description: "Coloration complète",
    price: "350 DH",
  },
  {
    name: "Soin visage",
    description: "Soin relaxant et personnalisé",
    price: "250 DH",
  },
  {
    name: "Manucure",
    description: "Manucure complète",
    price: "150 DH",
  },
  {
    name: "Maquillage",
    description: "Maquillage événement",
    price: "300 DH",
  },
];

function Pricing() {
  return (
    <section className="pricing" id="tarifs" data-aos="fade-up">

      <div className="section-heading">
        <p>Nos tarifs</p>

        <h2>Des prestations pensées pour vous</h2>

        <span>
          Découvrez une sélection de nos prestations beauté.
        </span>
      </div>

      <div className="pricing-list">

        {pricingItems.map((item) => (
          <div className="pricing-item" key={item.name}>

            <div className="pricing-info">
              <h3>{item.name}</h3>

              <p>{item.description}</p>
            </div>

            <div className="pricing-line"></div>

            <strong>{item.price}</strong>

          </div>
        ))}

      </div>

      <div className="pricing-button">
        <a href="#contact" className="primary-button">
          Prendre rendez-vous
        </a>
      </div>

    </section>
  );
}

export default Pricing;