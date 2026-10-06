const galleryItems = [
  {
    title: "Maquillage",
    category: "Makeup",
    image: "/image/05-maquillage.jpg",
  },
  {
    title: "Soins",
    category: "Beauty",
    image: "/image/06-soin-visage.jpg",
  },
  {
    title: "Notre espace",
    category: "Studio",
    image: "/image/09-salon-miroirs.jpg",
  },
];

function Gallery() {
  return (
    <section className="gallery" id="galerie"  data-aos="fade-up" >

      <div className="section-heading">
        <p>Notre galerie</p>

        <h2>Quelques instants chez ÉLORA</h2>

        <span>
          Découvrez notre univers, nos réalisations et
          quelques inspirations beauté.
        </span>
      </div>

      <div className="gallery-grid">

        {galleryItems.map((item) => (
          <div className="gallery-item" key={item.title}>

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="gallery-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Gallery;