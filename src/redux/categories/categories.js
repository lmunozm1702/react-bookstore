const CHECK_STATUS = 'CHECK_STATUS';

export function checkStatus() {
  return { type: CHECK_STATUS };
}

export default function reducer(state = { categories: [] }, action = {}) {
  switch (action.type) {
    case CHECK_STATUS: {
      return 'Under Construction';
    }
    default: return state;
  }
}
