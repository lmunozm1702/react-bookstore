import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, author, deleteBookProps,
  } = props;
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
          onClick={() => deleteBookProps(id)}
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
  deleteBookProps: PropTypes.func.isRequired,
};

export default Book;
