import React from "react";

const BookDetails = ({ book }) => {
    return (
      <div>
        <img className="w-32 h-48" src={book.imageLink} alt={book.title} />
        <div>
          <h2 className="mt-2 text-lg font-semibold text-indigo-500">{book.title}</h2>
          <p className="mt-2 text-sm text-gray-700">{book.author}</p>
          <p className="mt-2 text-sm text-gray-700">{book.description}</p>
          <p className="mt-2 text-sm text-gray-700">Rating: {book.rating}</p>
        </div>
      </div>
    );
  };

const BookList = ({ books }) => {
  const renderedList = books.map((book) => {
    return (
      <div key={book.id} className="flex flex-col items-center justify-center p-4 m-4 bg-white rounded shadow-lg">
        <BookDetails book={book} />
      </div>
    );
  });

  return <div className="flex flex-wrap justify-center">{renderedList}</div>;
};

export default BookList;
