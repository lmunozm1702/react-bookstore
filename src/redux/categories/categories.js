const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

export default function reducer(state = { categories: [], text: '' }, action = {}) {
  switch (action.type) {
    case CHECK_STATUS: return {
      ...state, text: action.payload,
    };
    default: return state;
  }
}

export function checkStatus() {
  return {
    type: CHECK_STATUS,
    payload: 'Under Construction',
  };
}
