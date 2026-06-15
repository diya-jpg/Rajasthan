import "./HeroSection.css";

function HeroSection({ actionCards }) {
  return (
    <section className="hero-section">

      <div className="hero-header">

        <h1>
          Namaste, Riya 👋
        </h1>

        <p>
          Manage your government issued and personal
          documents — all in one secure place.
        </p>

      </div>

      <div className="hero-cards">

        {actionCards.map((card) => (
          <article
            key={card.title}
            className="action-card"
          >

            <div className="card-top">

              <div className="action-icon">
                {card.icon}
              </div>

              <span className="card-action-btn">
                →
              </span>

            </div>

            <div className="card-content">

              <h2>{card.title}</h2>

              <p>{card.subtitle}</p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default HeroSection;