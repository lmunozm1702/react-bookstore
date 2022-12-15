/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { createAsyncThunk, isAsyncThunkAction } from '@reduxjs/toolkit';
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
