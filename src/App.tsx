import "./App.css";

function App() {
  return (
    <main className="birthday-page">
      {/* Texture */}
      <div className="noise" />

      {/* Navigation */}
      <header className="header">
        <div className="header-mark">62</div>

        <div className="header-line" />

        <div className="header-date">1964 — 2026</div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">Ouais bahhhh !</div>

          <h1>
            Joyeux
            <span> anniversaire.</span>
          </h1>

          <p className="hero-text">
            Aujourd'hui, tu fêtes tes 62 ans.
            <br />
            Et comme promis, voici ton cadeau et j'espere qu'il te plaira !
          </p>

          <a
            href="/28092026_TICKETS_C582E2243475O43402.pdf"
            download="cadeau-anniversaire.pdf"
            className="discover-button"
          >
            <span>Télécharger ton cadeau</span>
            <span className="gift-arrow">↓</span>
          </a>
        </div>

        {/* Visuel */}
        <div className={`birthday-card`}>
          <div className="card-border" />

          <div className="card-top">POUR TOI</div>

          <div className="card-number">62</div>

          <div className="card-center">
            <div className="card-line" />
            <div>TU VAS VOIR JAMES</div>
            <div>BOND PAR TERRE</div>
            <div className="card-line" />
          </div>

          <div className="card-bottom">2026</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>Je t'aime</div>

        <div className="footer-dot">•</div>

        <div>Bon anniversaire ❤️</div>
      </footer>
    </main>
  );
}

export default App;
