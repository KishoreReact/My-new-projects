import React from 'react';
import styles from '../styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => onSearch(e.target.value)}
          className={styles.input}
        />
        <img src='images/search.png' alt='search' className={styles.searchIcon} />
      </div>
    </div>
  );
};

export default SearchBar;
