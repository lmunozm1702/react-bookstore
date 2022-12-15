import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';

const BOOKSTORE_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const BOOKSTORE_API_KEY = 'rG3tk4jmTx3onq2qu9dP';

const BOOKSTORE_END_POINT = `${BOOKSTORE_API_URL}/apps/${BOOKSTORE_API_KEY}/books`;

const addBookAPI = createAsyncThunk(ADD_BOOK, async (book) => {
  console.log('addBook', book);
  await fetch(BOOKSTORE_END_POINT, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export default addBookAPI;
