import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBookForm from './AddBookForm';
import store from '../redux/configureStore';
import getBooks from '../redux/books/getBooks';

const Books = () => {
  const books = useSelector((state) => state.books);

  useEffect(() => {
    store.dispatch(getBooks());
  }, []);

  return (
    <div className="bookListContainer">
      <ul className="books">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <Book
                author={book.author}
                title={book.title}
                id={book.item_id}
                category={book.category}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="horizontal-divider" />
      <div>
        <AddBookForm />
      </div>
    </div>
  );
};

export default Books;
