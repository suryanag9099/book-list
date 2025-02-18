import React, { useState, useEffect } from "react";
// import BookCard from "./BookCard";
// import AddBook from "./ADDBooK";
import AddBook from "./ADDBook";
import BookCard from "./BooKCard";


const HomePage = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (newBook) => {
    setBooks([...books, newBook].sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)));
  };

  const toggleWishlist = (index) => {
    const updatedBooks = books.map((book, i) =>
      i === index ? { ...book, wishlisted: !book.wishlisted } : book
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="container">
      <h1 className="title">Upcoming Book Releases</h1>
      <AddBook onAddBook={addBook} />
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            book={book}
            onToggleWishlist={() => toggleWishlist(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
