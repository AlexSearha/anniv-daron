import { useState } from "react";
import "./App.css";

function App() {
  const [revealed, setRevealed] = useState(false);

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

          {!revealed && (
            <button
              className="discover-button"
              onClick={() => setRevealed(true)}
            >
              <span className="discover-circle">→</span>

              <span>Découvrir ton cadeau</span>
            </button>
          )}
        </div>

        {/* Visuel */}
        <div className={`birthday-card ${revealed ? "revealed" : ""}`}>
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

      {/* REVELATION */}
      <section className={`reveal-section ${revealed ? "visible" : ""}`}>
        <div className="reveal-inner">
          <div className="reveal-label">TON CADEAU</div>

          <h2>
            Une expérience
            <br />
            <em>rien que pour toi.</em>
          </h2>

          <p>
            Parce qu'un bon cadeau ne se résume pas à ce qu'on reçoit, mais
            surtout au souvenir qu'on en garde.
          </p>

          <a
            href="/cadeau.pdf"
            download="cadeau-anniversaire.pdf"
            className="gift-button"
          >
            <span>Télécharger ton cadeau</span>
            <span className="gift-arrow">↓</span>
          </a>
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
