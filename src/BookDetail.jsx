import React from "react";
import { useParams } from "react-router-dom";

function BookDetail({ books }) {
  const { bookId } = useParams();
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <img src={book.image} alt="" />
      <h1>{book.title}</h1>
      <h1>{book.author}</h1>
      <h2>{book.description}</h2>
    </div>
  );
}

export default BookDetail;
