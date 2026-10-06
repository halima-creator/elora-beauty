const services = [
  {
    title: "Coiffure",
    description: "Brushing, coupe, coiffure événement...",
    image: "/image/02-coiffure.jpg",
    position: "center center",
  },
  {
    title: "Coloration",
    description: "Coloration, balayage, mèches...",
    image: "/image/03-coloration.jpg",
    position: "center center",
  },
  {
    title: "Soins",
    description: "Soins visage, soins cheveux...",
    image: "/image/06-soin-visage.jpg",
    position: "center center",
  },
  {
    title: "Onglerie",
    description: "Manucure, pédicure, pose gel...",
    image: "/image/04-onglerie.jpg",
    position: "center center",
  },
  {
    title: "Maquillage",
    description: "Maquillage jour, soir, événement...",
    image: "/image/05-maquillage.jpg",
    position: "center center",
  },
];

function Services() {
  return (
    <section
      className="services"
      id="services"
      data-aos="fade-up"
    >
      <div className="section-heading">
        <p>Nos services</p>

        <h2>Des prestations sur mesure</h2>

        <span>
          Parce que chaque beauté est unique, nous vous proposons
          des soins adaptés à vos envies.
        </span>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
                style={{
                  objectPosition: service.position,
                }}
              />
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact">
                Découvrir <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;