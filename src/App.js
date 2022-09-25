import React, { useState, useEffect } from "react";
import "./App.css";
import Shelf from "./routepages/Shelf";
import Search from "./routepages/Search";
import { getAll, update, search } from "./BooksAPI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const [bookDetails, setbookDetails] = useState([]);

  useEffect(() => {
    const books = async () => {
      const res = await getAll();
      setbookDetails(res);
    };
    books();
  }, []);

  const bookUdate = async (book, shelf) => {
    const res = await update(book, shelf);
    console.log(res);
    
   window.location.reload(true);
  };

  const [booksSearcheds, setbooksSearcheds] = useState([]);

  const searchHandler = async (query, maxResults) => {

    const res = await search(query, maxResults);
 
    if(res.error){
      setbooksSearcheds(null)
    }else{
      setbooksSearcheds(res);
    }
    
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Shelf bookDetails={bookDetails} bookUdate={bookUdate} />}
          />
          <Route
            exact
            path="/Search"
            element={
              <Search
                bookDetails={bookDetails}
                searchHandler={searchHandler}
                setbookDetails={setbookDetails}
                booksSearcheds={booksSearcheds}
                bookUdate = {bookUdate}
              />
            }
          />
        </Routes>
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
