import { createAsyncThunk } from '@reduxjs/toolkit';
import { REMOVE_BOOK, BOOKSTORE_END_POINT } from './books';

export const removeBookAPI = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${BOOKSTORE_END_POINT}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
export default removeBookAPI;
