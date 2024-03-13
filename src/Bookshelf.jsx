import React from "react";

//this sends out Bookshelf and the props used, which will be translated in App.jsx to another name/form
export default function Bookshelf({
  books,
  showDetails,
  selectedBook,
  bookClickHandler,
  onDeleteClicked,
}) {
  {
    return (
      <>
        <div
          className={`bookshelf ${showDetails ? "bookshelf-mode" : ""}`}
          style={{ cursor: showDetails ? "default" : "pointer" }}
        >
          <h1> Bookshelf </h1>
          <div className="books-container">
            {books.map((book, index) => (
              <div
                key={index}
                //this modification on the book class lets me do specific things just while in bookshelf mode
                className={`book ${selectedBook === index ? "selected" : ""} ${
                  showDetails ? "bookshelf-mode-book" : ""
                }`}
                onClick={(e) => {
                  bookClickHandler(book.id);
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClicked(book.id);
                  }}
                >
                  Delete
                </button>
                <img
                  src={book.image}
                  alt={`Cover of the book ${book.title}`}
                  style={{ cursor: showDetails ? "default" : "pointer" }}
                />

                {showDetails && ( // Always show the title on the bookshelf route
                  <div>
                    <h2>{book.title}</h2>
                    <p>
                      <strong>Author:</strong> {book.author}
                    </p>
                    <p>
                      <strong>Genre:</strong> {book.genre}
                    </p>

                    {/* below is shown when selected */}
                    {selectedBook === index && (
                      <>
                        <p>
                          <strong>Description:</strong> {book.description}
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

//difference between bookClickHandler and handleBookClick is handleBookClick suggests it's a function designed to handle click events specifically on a book.
//bookClickHandler implies a similar purpose—it's a handler for click events on a book.
