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

  const handleRemoveButton = (event) => {
    event.preventDefault();
    dispatch(removeBookAPI(id));
    dispatch(removeBook(id));
  };

  return (
    <div key={id} className="book-content">
      <div className="book-info">
        <h4 className="book-category">
          {category}
        </h4>
        <h2 className="book-title">
          {title}
        </h2>
        <h6 className="book-author">
          {author}
        </h6>
        <div className="action-buttons">
          <button
            className="button-outline"
            type="button"
          >
            Comments
          </button>
          <div className="vertical-divider" />
          <button
            className="button-outline"
            type="button"
            name={id}
            onClick={handleRemoveButton}
          >
            Remove
          </button>
          <div className="vertical-divider" />
          <button
            className="button-outline"
            type="button"
          >
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div>
            <button className="primary-button" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
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
