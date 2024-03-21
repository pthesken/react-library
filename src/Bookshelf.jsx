import React, { useState } from "react";

// This sends out Bookshelf and the props used, which will be translated in App.jsx to another name/form
export default function Bookshelf({
  books,
  bookClickHandler,
  onDeleteClicked,
  heading,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const displayedBooks = books.filter((book) => {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="bookshelf">
        <div className="header">
          <h1>{heading}</h1>
          <div className="searchbar">
            <input
              onChange={(event) => setSearchTerm(event.target.value)}
              type="text"
              placeholder="Search Library"
              value={searchTerm}
            />
          </div>
        </div>
        <div className="books-container">
          {displayedBooks.map((book, index) => (
            <div
              key={index}
              className="book"
              onClick={(e) => {
                bookClickHandler(book.id);
              }}
            >
              <img src={book.image} alt={`Cover of the book ${book.title}`} />
              <h3>{book.title}</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteClicked(book.id);
                }}
              >
                <strong>X</strong>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Note: The difference between bookClickHandler and handleBookClick is that handleBookClick suggests it's a function designed to handle click events specifically on a book.
// bookClickHandler implies a similar purpose—it's a handler for click events on a book.
