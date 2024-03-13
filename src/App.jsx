import DefaultBooks from "./Books";
import { useState } from "react";
import "normalize.css";
import "./App.css";
import Home from "./Home";
// import { Routes, Route } from "react-router";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import BookDetail from "./BookDetail";

function App() {
  const navigate = useNavigate();

  const selectBook = (index) => {
    if (selectedBook === index) {
      setSelectedBook(null);
    } else {
      setSelectedBook(index);
    }
  };
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookList, setBookList] = useState([...DefaultBooks]);
  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/bookshelf">Bookshelf</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home bookList={bookList} setBookList={setBookList} />}
        />

        <Route
          path="/books/:bookId"
          element={<BookDetail books={bookList} />}
        />
      </Routes>
    </>
  );
}
export default App;
