import React, { useState } from "react";

const SearchBar = ({ onFormSubmit, onPrintTypeChange, onOrderByChange, onLangRestrictChange }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  const onPrintTypeSelect = (event) => {
    onPrintTypeChange(event.target.value);
  };
  
  const onOrderBySelect = (event) => {
    onOrderByChange(event.target.value);
  };

  const onLangRestrictSelect = (event) => {
    onLangRestrictChange(event.target.value);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <form onSubmit={onSubmit} className="flex items-center">
        <input
          type="text"
          value={term}
          onChange={(event) => setTerm(event.target.value)}
          className="w-full max-w-md px-4 py-2 leading-tight text-gray-700 bg-white border-2 border-gray-300 rounded-md shadow appearance-none focus:outline-none focus:bg-white focus:border-indigo-500"
          placeholder="Search for books..."
        />
      </form>
      <select onChange={onPrintTypeSelect} className="ml-4 px-4 py-2 border rounded-md shadow text-gray-700 focus:outline-none">
        <option value="all">All</option>
        <option value="books">Books</option>
        <option value="magazines">Magazines</option>
      </select>
      <select onChange={onOrderBySelect} className="ml-4 px-4 py-2 border rounded-md shadow text-gray-700 focus:outline-none">
        <option value="relevance">Relevance</option>
        <option value="newest">Newest</option>
      </select>
      <select onChange={onLangRestrictSelect} className="ml-4 px-4 py-2 border rounded-md shadow text-gray-700 focus:outline-none">
        <option value="">All Languages</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default SearchBar;
