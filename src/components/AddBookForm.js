import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import addBookAPI from '../redux/books/addBookAPI';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState({
    title: '', author: '', item_id: '', category: 'Action',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { ...inputText, item_id: uuidv4() };
    dispatch(addBookAPI(newBook));
    dispatch(addBook(newBook));
  };

  const onChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="Book title"
          name="title"
          className="input title-input"
          value={inputText.title}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          className="input title-input"
          value={inputText.author}
          onChange={onChange}
        />
        <input
          type="hidden"
          placeholder="Add a category..."
          name="category"
          className="input-text"
          value={inputText.category}
          onChange={onChange}
        />
        <button type="submit" className="primary-button-big">ADD BOOK</button>
      </form>
    </section>
  );
};
export default AddBookForm;
