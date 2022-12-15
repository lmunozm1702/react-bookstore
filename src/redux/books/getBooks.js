import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialBooksList } from './books';

const BOOKSTORE_API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const BOOKSTORE_API_KEY = 'rG3tk4jmTx3onq2qu9dP';

const BOOKSTORE_END_POINT = `${BOOKSTORE_API_URL}/apps/${BOOKSTORE_API_KEY}/books`;

const getBooks = createAsyncThunk('bookstore/books/FETCH_BOOKS', async (_, thunkAPI) => {
  const response = await fetch(BOOKSTORE_END_POINT, {
    method: 'GET',
  });

  const responseJSON = await response.json();
  await thunkAPI.dispatch(initialBooksList(responseJSON));
  return responseJSON;
});

export default getBooks;
