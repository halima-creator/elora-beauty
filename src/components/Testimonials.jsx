const testimonials = [
  {
    text: "Une magnifique expérience. L'équipe est adorable et très professionnelle.",
    name: "Sarah M.",
  },
  {
    text: "Le salon est magnifique et le résultat est exactement comme je le souhaitais.",
    name: "Nadia B.",
  },
  {
    text: "J'ai enfin trouvé mon salon préféré. Je recommande les yeux fermés !",
    name: "Imane K.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="temoignages" data-aos="fade-up">

      <div className="section-heading">
        <p>Vos avis</p>

        <h2>Ce que nos clientes disent</h2>

        <span>
          Des expériences qui parlent d'elles-mêmes.
        </span>
      </div>

      <div className="testimonials-grid">

        {testimonials.map((testimonial) => (
          <article
            className="testimonial-card"
            key={testimonial.name}
          >

            <div className="stars">
              ★★★★★
            </div>

            <p>
              “{testimonial.text}”
            </p>

            <div className="testimonial-author">
              <span>
                {testimonial.name.charAt(0)}
              </span>

              <strong>
                {testimonial.name}
              </strong>
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;