import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1>About Book Finder</h1>
        <p>
          Welcome to <span>Book Finder</span> — your digital gateway to millions
          of stories, authors, and ideas. Powered by the Open Library API, we
          make book discovery effortless and enjoyable for everyone.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          We believe that every reader deserves an easy way to explore the world
          of books. From timeless classics to modern bestsellers, our goal is to
          bring the library to your fingertips — simple, fast, and free.
        </p>
      </section>

      <section className="features-section">
        <h2>What You Can Do</h2>
        <ul>
          <li>🔍 Search books instantly by title</li>
          <li>📖 Discover author details and publication years</li>
          <li>🎨 Browse cover art and book previews</li>
          <li>⚡ Experience smooth and fast navigation</li>
        </ul>
      </section>

      <section className="future-section">
        <h2>Coming Soon</h2>
        <p>
          We’re working on exciting new updates like personalized reading lists,
          genre filters, and user reviews — so you can not only find books, but
          also connect with stories that truly inspire you.
        </p>
      </section>

      <footer className="about-footer">
        <p>📚 Made with passion for book lovers everywhere.</p>
      </footer>
    </div>
  );
}

export default About;
