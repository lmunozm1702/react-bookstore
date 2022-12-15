import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import Books from './components/Books';
// import store from './redux/configureStore';
// import getBooks from './redux/books/getBooks';

function App() {
  // store.dispatch(getBooks());
  return (
    <div className="mainContainer">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
