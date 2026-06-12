import "./HeroSection.css";

function HeroSection({ actionCards }) {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="eyebrow">Citizen Workspace</p>
        <h1>Namaste, Citizen 👋</h1>
        <p>
          Manage your government-issued and personal documents — all in one secure place.
        </p>
      </div>

      <div className="hero-cards">
        {actionCards.map((card) => (
          <article key={card.title} className="action-card">
            <div className="action-icon">{card.icon}</div>

            <div>
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