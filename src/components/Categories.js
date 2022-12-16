import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const statusText = useSelector((state) => state.categories.text);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(checkStatus());
  };

  return (
    <div className="categories">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="categories">
          <div>
            <button
              type="submit"
              className="primary-button-big"
            >
              Check status
            </button>
          </div>
          <div>
            <h2>
              {statusText}
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Categories;
