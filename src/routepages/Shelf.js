import React from "react";

import BookShelf from "../components/BookShelf";




const Shelf = ({bookDetails,bookUdate}) => {


  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            
            <BookShelf bookUdate={bookUdate}  shelfName="Currently Reading" bookDetails={bookDetails}  shelfId="currentlyReading"/>
            <BookShelf bookUdate={bookUdate}  shelfName="Want To Read" bookDetails={bookDetails} shelfId="wantToRead"/>
            <BookShelf bookUdate={bookUdate}  shelfName="Read" bookDetails={bookDetails} shelfId="read"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shelf;
