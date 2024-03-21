import React from "react";
import { useParams } from "react-router-dom";

function BookDetail({ books }) {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} className="book-detail-image" />

      <div className="book-details">
        <h1 className="book-detail-title">{book.title}</h1>
        <h2 className="book-detail-author">{book.author}</h2>
        <h3 className="book-detail-description">{book.description}</h3>
      </div>
    </div>
  );
}

export default BookDetail;
