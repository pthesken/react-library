import DefaultBooks from "./Books";
import { useState } from "react";
import "normalize.css";
import "./App.css";
import Home from "./Home";
// import { Routes, Route } from "react-router";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Bookshelf from "./Bookshelf";
import BookDetail from "./BookDetail";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageRoutes = ["/", "/bookshelf"];

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
          element={
            <Home
              bookList={bookList}
              setBookList={setBookList}
              selectBook={selectBook}
              selectedBook={selectedBook}
            />
          }
        />
        <Route
          path="/bookshelf"
          element={
            <Bookshelf
              selectBook={selectBook}
              books={bookList}
              bookClickHandler={selectBook}
              selectedBook={selectedBook}
              setSelectedBook={setSelectedBook}
              setBookList={setBookList}
              onDeleteClicked={(id) => {
                const updatedBookList = bookList.filter((book) => {
                  return book.id !== id;
                });
                setBookList(updatedBookList);
              }}
            />
          }
        />

        <Route path="/book/:bookId" element={<BookDetail books={bookList} />} />
      </Routes>
    </>
  );
}
export default App;
