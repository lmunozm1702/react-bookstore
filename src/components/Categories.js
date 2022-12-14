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
        <h3>
          Categories page:
          {statusText}
        </h3>
        <div>
          <button
            type="submit"
            className="input-submit"
          >
            Check status
          </button>
        </div>
      </form>
    </div>
  );
};
export default Categories;
