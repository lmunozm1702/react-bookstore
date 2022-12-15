import { createAsyncThunk } from '@reduxjs/toolkit';

const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const BOOKSTORE_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const BOOKSTORE_API_KEY = 'rG3tk4jmTx3onq2qu9dP';

const BOOKSTORE_END_POINT = `${BOOKSTORE_API_URL}/apps/${BOOKSTORE_API_KEY}/books`;

export const removeBookAPI = createAsyncThunk(REMOVE_BOOK, async (id) => {
  console.log(`${BOOKSTORE_END_POINT}/${id}`);
  await fetch(`${BOOKSTORE_END_POINT}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
export default removeBookAPI;
