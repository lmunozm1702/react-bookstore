import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const STATICK_BOOKS = [
  {
    author: 'Frank Herbert',
    title: 'Dune',
    id: uuidv4(),
  },
  {
    author: 'Suzanne Collins',
    title: 'Capital in the Twenty-First Century',
    id: uuidv4(),
  },
];

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

// Reducer
export default function reducer(state = { bookList: [...STATICK_BOOKS] }, action = {}) {
  switch (action.type) {
    case ADD_BOOK: return {
      ...state, bookList: [...state.bookList, action.payload],
    };
    case REMOVE_BOOK: return {
      ...state,
      bookList: state.bookList.filter((book) => book.id !== action.payload),
    };
    default: return state;
  }
}
