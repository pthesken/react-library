import Bookshelf from "./Bookshelf";
import Form from "./Form";

export default function Home({
  bookList,
  setBookList,
  selectBook,
  selectedBook,
}) {
  return (
    <>
      <Form bookList={bookList} setBookList={setBookList} />

      <Bookshelf
        selectBook={selectBook}
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
