# Book Release Tracker

A simple React application to track upcoming book releases. Users can add books, view them in a sorted list by release date, and mark them as wishlisted.

## Features
- Add new books with title, author, release date, and genre.
- Automatically sort books by release date.
- Store book data in `localStorage` for persistence.
- Wishlist toggle functionality for books.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/suryanag9099/book-release-tracker.git
   cd book-release-tracker
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## File Structure
```
.
├── src
│   ├── components
│   │   ├── HomePage.js
│   │   ├── AddBook.js
│   │   ├── BookCard.js
│   ├── App.js
│   ├── index.js
├── public
│   ├── index.html
├── package.json
├── README.md
```

## Components
### `HomePage.js`
- Manages the book list state.
- Uses `localStorage` to persist data.
- Renders `AddBook` and `BookCard` components.

### `AddBook.js`
- Form to add new books.
- Validates input fields.
- Calls `onAddBook` to update the book list.

### `BookCard.js`
- Displays individual book details.
- Allows toggling of wishlist status.

## Technologies Used
- React.js
- Local Storage
- JavaScript (ES6+)
- CSS (for styling)

## Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to the branch and open a Pull Request.

## License
This project is licensed under the MIT License.
