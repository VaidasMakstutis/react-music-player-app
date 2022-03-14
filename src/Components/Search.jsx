import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";


const Search = (props) => {

const handleChange = (e) => {
    props.setSearch(e.target.value);
}

const filter = () => {
    const select = document.querySelector("select");
        for (let i = 0; i < select.length; i++) {
            let txt = select.options[i].text.toLowerCase();
            if (!txt.match(props.search)) {
              alert("The song was not found!");
            } 
            else {
              props.setFilteredSongs(prevState => [...prevState, i]);
            }
          }
}

const resetFilter = () => {
  props.setFilteredSongs([]);
  props.setSearch("");
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
              <button className="btn-search" type="submit" title="Search" onClick={filter}><FontAwesomeIcon icon={faSearch} /></button>
              <button className="btn-clear" type="primary" title="Clear" onClick={resetFilter}><FontAwesomeIcon icon={faCircleXmark} /></button>
          </div>
        </form>
      </div>
    );
}

export default Search;