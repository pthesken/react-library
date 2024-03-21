import Bookshelf from "./Bookshelf";
import { useNavigate } from "react-router-dom";

// needs {books} in curly braces to destructure, books.filter won't work without it
export default function ScienceFiction({ books, setBookList }) {
  const navigate = useNavigate();

  const scienceFictionBooks = books.filter(
    (books) => books.genre === "Science Fiction"
  );

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  const handleDelete = (id) => {
    const updatedBookList = books.filter((book) => book.id !== id);
    setBookList(updatedBookList);
  };
  return (
    <div>
      <Bookshelf
        books={scienceFictionBooks}
        bookClickHandler={handleBookClick}
        onDeleteClicked={handleDelete}
        heading="Science Fiction"
      />
    </div>
  );
}
