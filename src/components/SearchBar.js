import React, {useState} from "react"

const SearchBar = () => {
  const [search, setSearch] = useState(false); 

  const submitSearch = (e) => {
    e.preventDefault();
    alert('Searched');
}

  const openSearch = () => {
    setSearch(true); 
  }

  const searchClass = search ? 'searchInput active' : 'searchInput';

  return (
    <div className="search">
      <form onSubmit={submitSearch}>
      <input type="text" className={searchClass} placeholder="Search"  />
      <i  onClick={openSearch} className="searchIcon" class="fa fa-search"></i>
      </form> 
    </div>
  )
}

export default SearchBar
