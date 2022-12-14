import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [inputText, setInputText] = useState({ title: '', author: '', id: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { ...inputText, id: uuidv4() };
    dispatch(addBook(newBook));
  };

  const onChange = (event) => {
    setInputText({
      ...inputText,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Add books form:</h3>
      <div>
        <input
          type="text"
          placeholder="Add a title..."
          name="title"
          className="input-text"
          value={inputText.title}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Add a author..."
          name="author"
          className="input-text"
          value={inputText.author}
          onChange={onChange}
        />
      </div>
      <div>
        <button type="submit" className="input-submit">Submit</button>
      </div>
    </form>
  );
};
export default AddBookForm;
