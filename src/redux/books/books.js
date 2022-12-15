const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';
const FETCH_BOOKS_FULFILLED = 'bookstore/books/FETCH_BOOKS/fulfilled';

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
  console.log('*1*', action);
  switch (action.type) {
    case ADD_BOOK: return {
      ...state, bookList: [...state.bookList, action.payload],
    };
    case REMOVE_BOOK: return {
      ...state,
      bookList: state.bookList.filter((book) => book.id !== action.payload),
    };
    case FETCH_BOOKS_FULFILLED:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          id: key,
          title,
          author,
          category,
        };
      });
    default: return state;
  }
}
