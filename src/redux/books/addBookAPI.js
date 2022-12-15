import { createAsyncThunk } from '@reduxjs/toolkit';
import { ADD_BOOK, BOOKSTORE_END_POINT } from './books';

const addBookAPI = createAsyncThunk(ADD_BOOK, async (book) => {
  await fetch(BOOKSTORE_END_POINT, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export default addBookAPI;
