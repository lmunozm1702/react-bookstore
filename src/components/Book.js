import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import { removeBookAPI } from '../redux/books/removeBookAPI';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  // const [removeId, setRemoveId] = useState({ id: '' });

  const handleRemoveButton = (event) => {
    event.preventDefault();
    dispatch(removeBookAPI(id));
    dispatch(removeBook(id));
  };

  return (
    <div key={id}>
      <div>
        Author:
        {' '}
        {author}
      </div>
      <div>
        Title:
        {' '}
        {title}
      </div>
      <div>
        Id:
        {' '}
        {id}
      </div>
      <div>
        Category:
        {' '}
        {category}
      </div>
      <div>
        <button
          type="button"
          name={id}
          onClick={handleRemoveButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
