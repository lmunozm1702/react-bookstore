import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';

const Books = () => {
  const books = useSelector((state) => state.books.bookList);

  return (
    <div className="bookListContainer">
      <div className="books">
        <h3>Books List:</h3>
        {books.map((book) => (
          <div key={book.id}>
            <Book
              author={book.author}
              title={book.title}
              id={book.id}
            />
          </div>
        ))}

      </div>
      <div className="addBookForm">
        <AddBookForm />
      </div>
    </div>
  );
};

export default Books;
