import React, { useState } from "react";
import "./BookFinder.css";

function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      setBooks(data.docs.slice(0, 12));
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div className="book-finder">
      <h2>📖 Explore Your Next Read</h2>
      <form onSubmit={searchBooks}>
        <input
          type="text"
          placeholder="Enter book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="book-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            {book.cover_i ? (
              <img
                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                alt={book.title}
              />
            ) : (
              <div className="no-cover"></div>
            )}
            <h4>{book.title}</h4>
            <p className="author">
              {book.author_name
                ? book.author_name.join(", ")
                : "Unknown Author"}
            </p>
            <p className="year">
              {book.first_publish_year ? `📅 ${book.first_publish_year}` : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookFinder;
