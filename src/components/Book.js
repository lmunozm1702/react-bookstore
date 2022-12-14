import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author,
  } = props;

  const dispatch = useDispatch();

  // const [removeId, setRemoveId] = useState({ id: '' });

  const handleRemoveButton = (event) => {
    event.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div>
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
};

export default Book;
