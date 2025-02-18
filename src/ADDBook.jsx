import React, { useState } from "react";


const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !releaseDate || !genre) {
      alert("All fields are required");
      return;
    }
    onAddBook({ title, author, releaseDate, genre, wishlisted: false });
    setTitle("");
    setAuthor("");
    setReleaseDate("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input" />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="input" />
      <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} className="input" />
      <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} className="input" />
      <button type="submit" className="button">Add Book</button>
    </form>
  );
};

export default AddBook;