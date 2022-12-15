import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialBooksList, BOOKSTORE_END_POINT } from './books';

const getBooks = createAsyncThunk('bookstore/books/FETCH_BOOKS', async (_, thunkAPI) => {
  const response = await fetch(BOOKSTORE_END_POINT, {
    method: 'GET',
  });
  const responseJSON = await response.json();
  await thunkAPI.dispatch(initialBooksList(responseJSON));

  const parsedData = Object.keys(responseJSON).map((key) => {
    const { title, author, category } = responseJSON[key][0];
    return {
      item_id: key,
      title,
      author,
      category,
    };
  });
  return parsedData;
});

export default getBooks;
