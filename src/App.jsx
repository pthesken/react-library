import DefaultBooks from "./Books";
import { useState } from "react";
import "normalize.css";
import "./App.css";
import Home from "./Home";
// import { Routes, Route } from "react-router";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import BookDetail from "./BookDetail";
import ScienceFiction from "./ScienceFiction";
import Fantasy from "./Fantasy";

function App() {
  const [bookList, setBookList] = useState([...DefaultBooks]);
  return (
    <>
      <nav className="navigation">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/ScienceFiction">Science Fiction</NavLink>
          </li>
          <li>
            <NavLink to="/fantasy">Fantasy</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home bookList={bookList} setBookList={setBookList} />}
        />
        <Route
          path="/sciencefiction"
          element={
            <ScienceFiction books={bookList} setBookList={setBookList} />
          }
        />
        <Route
          path="/fantasy"
          element={<Fantasy books={bookList} setBookList={setBookList} />}
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
