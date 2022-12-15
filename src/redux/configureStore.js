import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import categories from './categories/categories';
import getBooks from './books/getBooks';

const store = configureStore({
  reducer: {
    books,
    categories,
    getBooks,
  },
});
export default store;
