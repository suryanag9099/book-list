import React from "react";
 

const BookCard = ({ book, onToggleWishlist }) => {
  const releaseTime = new Date(book.releaseDate) - new Date();
  const daysLeft = Math.floor(releaseTime / (1000 * 60 * 60 * 24));
  const timeLeft = daysLeft > 0 ? `${daysLeft} days left` : "Released!";

  return (
    <div className="card">
      <h2 className="card-title">{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Release Date: {book.releaseDate}</p>
      <p className="release-time">{timeLeft}</p>
      <button
        onClick={onToggleWishlist}
        className={`button ${
          book.wishlisted ? "wishlist-remove" : "wishlist-add"
        }`}
      >
        {book.wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default BookCard;
