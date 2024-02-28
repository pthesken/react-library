import { useState } from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Books from "./Books";

function App() {
  //useState is a react hook. The null means selectedBook does not start off as anything
  //this is array destructuring
  //2 array items are returned by useState
  //selectedBook is current state value, setSelectedBook is a function to update the state value 
  const [selectedBook, setSelectedBook] = useState(null);

  const selectBook = (index) => {
    if (selectedBook === index) {
      setSelectedBook(null);
    } else {
      setSelectedBook(index);
    }
  };
  return (
    <>
      <Bookshelf
      //all stuff from Booshelf.jsx, bookClickHandler name changed on purpose
      // so I remember that it can since it's something new
      //it goes from js to html-like
        books={Books}
        bookClickHandler={selectBook}
        selectedBook={selectedBook}
      />
    </>
  );
}

export default App;
