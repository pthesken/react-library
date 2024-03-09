import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//this sends out Bookshelf and the props used, which will be translated in App.jsx to another name/form
export default function Bookshelf({
  books,
  selectedBook,
  bookClickHandler,
  onDeleteClicked,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookshelfClick = () => {
    navigate("/bookshelf");
  };

  const handleBookClick = (e, index) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the bookshelf
    if (isBookshelfRoute) {
      bookClickHandler(index);
    }
  };

  const isBookshelfRoute = location.pathname === "/bookshelf";

  {
    return (
      <div
        className={`bookshelf ${isBookshelfRoute ? "bookshelf-mode" : ""}`}
        onClick={handleBookshelfClick}
        style={{ cursor: isBookshelfRoute ? "default" : "pointer" }}
      >
        {books.map((book, index) => (
          <div
            key={index}
            //this modification on the book class lets me do specific things just while in bookshelf mode
            className={`book ${selectedBook === index ? "selected" : ""} ${
              isBookshelfRoute ? "bookshelf-mode-book" : ""
            }`}
            onClick={(e) => handleBookClick(e, index)}
          >
            <Link to={`/book/${book.id}`}>
              <button
                onClick={() => {
                  onDeleteClicked(book.id);
                }}
              >
                Delete
              </button>
              <img
                src={book.image}
                alt={`Cover of the book ${book.title}`}
                style={{ cursor: isBookshelfRoute ? "default" : "pointer" }}
              />
              {selectedBook === index && isBookshelfRoute && (
                <div>
                  <h2>{book.title}</h2>
                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>
                  <p>
                    <strong>Genre:</strong> {book.genre}
                  </p>
                  <p>
                    <strong>Description:</strong> {book.description}
                  </p>
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

//difference between bookClickHandler and handleBookClick is handleBookClick suggests it's a function designed to handle click events specifically on a book.
//bookClickHandler implies a similar purpose—it's a handler for click events on a book.
