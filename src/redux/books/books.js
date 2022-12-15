const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const FETCH_BOOKS_FULFILLED = 'bookstore/books/FETCH_BOOKS/fulfilled';
const BOOKSTORE_END_POINT = `${process.env.REACT_APP_API_URL}/apps/${process.env.REACT_APP_BOOK_KEY}/books`;

// Action creators
export function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

export function removeBook(payload) {
  return {
    type: REMOVE_BOOK,
    payload,
  };
}

export function initialBooksList(payload) {
  return {
    type: FETCH_BOOKS,
    payload,
  };
}

// Reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      // return state.concat(action.payload);
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOKS_FULFILLED:
      return [...action.payload];
    default: return state;
  }
}

export {
  ADD_BOOK, REMOVE_BOOK, FETCH_BOOKS, FETCH_BOOKS_FULFILLED, BOOKSTORE_END_POINT,
};
