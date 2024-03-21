import Bookshelf from "./Bookshelf";
import { useNavigate } from "react-router";

export default function Fantasy({ books, setBookList }) {
  const navigate = useNavigate();

  const fantasyBooks = books.filter((books) => books.genre === "Fantasy");

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
        books={fantasyBooks}
        bookClickHandler={handleBookClick}
        onDeleteClicked={handleDelete}
        heading="Fantasy"
      />
    </div>
  );
}
