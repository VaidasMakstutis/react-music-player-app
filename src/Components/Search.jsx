import React from "react";

const Search = (props) => {

const handleChange = (e) => {
    props.setSearch(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
}

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div className="input-search">
            <input
              type="text" placeholder="Please enter a song name..."
              onChange={handleChange}
              value={props.search}
            />
          </div>
        </form>
      </div>
    );
}

export default Search;