import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [printType, setPrintType] = useState("all");
  const [orderBy, setOrderBy] = useState("relevance");
  const [langRestrict, setLangRestrict] = useState("");

  const searchBooks = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`, {
          params: {
            q: searchTerm,
            printType: printType,
            orderBy: orderBy,
            langRestrict: langRestrict
          }
        }
      );
      const bookList = response.data.items.map((item) => {
        const volumeInfo = item.volumeInfo;
        return {
          id: item.id,
          title: volumeInfo.title,
          author: volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author',
          imageLink: volumeInfo.imageLinks?.thumbnail,
          description: volumeInfo.description,
          rating: volumeInfo.averageRating || 'N/A',
        };
      });
      setBooks(bookList);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    searchBooks('Harry Potter');
  }, [printType, orderBy, langRestrict]);

  return (
    <div>
      <SearchBar 
      onFormSubmit={searchBooks} 
      onPrintTypeChange={setPrintType}
      onOrderByChange={setOrderBy} 
      onLangRestrictChange={setLangRestrict} 
      />
      <BookList books={books} />
    </div>
  );
};

export default App;