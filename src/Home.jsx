import { useState } from "react";
import Bookshelf from "./Bookshelf";
import Form from "./Form";
import DefaultBooks from "./Books";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookList, setBookList] = useState([...DefaultBooks]);

  const selectBook = (index) => {
    if (selectedBook === index) {
      setSelectedBook(null);
    } else {
      setSelectedBook(index);
    }
  };
  return (
    <>
      <Form bookList={bookList} setBookList={setBookList} />

      <Bookshelf
        books={bookList}
        bookClickHandler={selectBook}
        selectedBook={selectedBook}
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
