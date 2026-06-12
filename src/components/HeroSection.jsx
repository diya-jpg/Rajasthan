// import "./HeroSection.css";

// function HeroSection({ actionCards }) {
//   return (
//     <section className="hero-section">

//       <div className="hero-banner">
//         <div className="hero-text">
//           <span className="eyebrow">RAJ eVAULT</span>

//           <h1>Welcome Back 👋</h1>

//           <p>
//             Securely manage your government-issued documents,
//             certificates and personal records from one place.
//           </p>

//           <div className="hero-stats">
//             <div className="stat-box">
//               <h3>24</h3>
//               <span>Documents</span>
//             </div>

//             <div className="stat-box">
//               <h3>18</h3>
//               <span>Verified</span>
//             </div>

//             <div className="stat-box">
//               <h3>6</h3>
//               <span>Shared</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hero-cards">
//         {actionCards.map((card) => (
//           <article key={card.title} className="action-card">
//             <div className="action-icon">{card.icon}</div>

//             <div>
//               <h2>{card.title}</h2>
//               <p>{card.subtitle}</p>
//             </div>
//           </article>
//         ))}
//       </div>

//     </section>
//   );
// }

// export default HeroSection;
import "./HeroSection.css";

function HeroSection({ actionCards }) {
  return (
    <section className="hero-section">

      <div className="hero-banner">
        <div className="hero-text">
          <span className="eyebrow">RAJ eVAULT</span>

          <h1>Welcome Back 👋</h1>

          <p>
            Securely manage your government-issued documents,
            certificates and personal records from one place.
          </p>
        </div>
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