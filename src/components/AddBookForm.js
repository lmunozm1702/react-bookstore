import React from 'react';

const AddBookForm = () => (
  <form onSubmit={() => { }} className="form-container">
    <h3>Add books form:</h3>
    <div>
      <input
        type="text"
        placeholder="Add a title..."
        name="title"
        className="input-text"
        // value="Add a value from state"
        onChange={() => { }}
      />
    </div>
    <div>
      <input
        type="text"
        placeholder="Add a author..."
        name="author"
        className="input-text"
        // value="Add a value from state"
        onChange={() => { }}
      />
    </div>
    <div>
      <button type="button" className="input-submit">Submit</button>
    </div>
  </form>
);

export default AddBookForm;
