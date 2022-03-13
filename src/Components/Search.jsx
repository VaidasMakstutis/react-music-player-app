import React, {useState} from "react";

const Search = () => {

const [search, setSearch] = useState("");

const handleChange = (e) => {
    setSearch(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search:", search);
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div className="input-search">
            <input
              type="text" placeholder="Please enter a song name..."
              onChange={handleChange}
              value={search}
            />
              <button className="btn-search" type="submit">Search</button>
          </div>
        </form>
      </div>
    );
}

export default Search;