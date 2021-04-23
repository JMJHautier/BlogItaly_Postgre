import React from "react";
import "../App.css";

const SearchBar = () => {

  return (
    <div className="searchbarImage">
      <div className="title">
        <h4> Eat, Love & Travel </h4>
        </div>
        <div className="bg"> 
        <input 
        type="text" placeholder="Search" />
        <button className="btn search-last" type="button">
          <i class="fas fa-search"></i>
        </button>
        
      </div>
      </div>
  );
};

export default SearchBar;
