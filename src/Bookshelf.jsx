//this sends out Bookshelf and the props used, which will be translated in App.jsx to another name/form
export default function Bookshelf({ books, selectedBook, bookClickHandler }) {
  return (
    <div className="bookshelf">
      {books.map((book, index) => (
        <div
          key={index}
          className={`book ${selectedBook === index ? "selected" : ""}`}
          onClick={() => bookClickHandler(index)}
        >
          <img
            src={book.image}
            alt={`Cover of the book ${book.title}`}
            style={{ cursor: "pointer" }}
          />
          {selectedBook === index && (
            <div>
              <h2>{book.title}</h2>
              {/* <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Genre:</strong> {book.genre}
              </p>
              <p>
                <strong>Description:</strong> {book.description}
              </p> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
