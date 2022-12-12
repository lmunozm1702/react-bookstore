const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// Action creators
export function addBook() {
  return { type: ADD_BOOK };
}

export function removeBook() {
  return { type: REMOVE_BOOK };
}

// Reducer
export default function reducer(state = { bookList: [] }, action = {}) {
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
