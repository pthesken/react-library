import { useState } from "react";
import Bookshelf from "./Bookshelf";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

export default function Home({ bookList, setBookList }) {
  const navigate = useNavigate();
  const [searchBook, setSearchBook] = useState("");
  const displayedBooks = bookList.filter((book) => {
    const lowerCaseBookTitle = book.title.toLowerCase();
    return lowerCaseBookTitle.includes(searchBook.toLowerCase());
  });

  return (
    <>
      <Form bookList={bookList} setBookList={setBookList} />

      <div className="searchbar">
        <input
          onChange={(event) => {
            setSearchBook(event.target.value);
          }}
          type="text"
          placeholder="Search Library"
        />
      </div>

      <Bookshelf
        books={displayedBooks}
        showDetails={false}
        bookClickHandler={(bookId) => {
          navigate(`books/${bookId}`);
        }}
        onDeleteClicked={(id) => {
          const updatedBookList = bookList.filter((book) => {
            return book.id !== id;
          });
          setBookList(updatedBookList);
        }}
      />
    </>
  );
}

//all stuff from Bookshelf.jsx, bookClickHandler name changed on purpose
// so I remember that it can since it's something new
//it goes from js to html-like (jsx)

//useState is a react hook. The null means selectedBook does not start off as anything
//this is array destructuring
//2 array items are returned by useState
//selectedBook is current state value, setSelectedBook (setter function) is a function to update the state value
