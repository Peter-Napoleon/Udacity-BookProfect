import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";

const Search = ({ searchHandler, bookUdate, booksSearcheds}) => {
  const searchValue = (event) => searchHandler(event.target.value, 5);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            onChange={searchValue}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          
          { booksSearcheds ==null ? <p>No Books With That Name </p> : booksSearcheds.map((bookDetail) => (
            <li>
              <Book
                key={bookDetail.id} bookDetail={bookDetail} bookUdate={bookUdate} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
