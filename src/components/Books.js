import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import AddBookForm from './AddBookForm';

const books = [
  {
    author: 'Frank Herbert',
    title: 'Dune',
    id: uuidv4(),
  },
  {
    author: 'Suzanne Collins',
    title: 'Capital in the Twenty-First Century',
    id: uuidv4(),
  },
];

const Books = () => {
  const deleteBookProps = (id) => {
    console.log(id);
  };

  return (
    <div className="bookListContainer">
      <div className="books">
        <h3>Books List:</h3>
        {books.map((book) => (
          <div key={book.id}>
            <Book
              author={book.author}
              title={book.title}
              id={book.id}
              deleteBookProps={deleteBookProps}
            />
          </div>
        ))}

      </div>
      <div className="addBookForm">
        <AddBookForm />
      </div>
    </div>
  );
};

export default Books;
