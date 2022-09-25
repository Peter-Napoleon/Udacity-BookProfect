import React from "react";
import Book from "./Book";

const BookShelf = ({ shelfName, bookDetails, shelfId,bookUdate}) => {

const shlefSort = bookDetails.filter((bookDetail)=>bookDetail.shelf ===shelfId)

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shlefSort.map((bookDetail) => (
            <Book key={bookDetail.id}  bookDetail={bookDetail}  bookUdate={bookUdate}/>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
