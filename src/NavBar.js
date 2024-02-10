import { React, useState } from "react";

import { MdLocalMovies } from "react-icons/md";
export default function NavBar({ searchResult, found }) {
  const [search, setSearch] = useState("");
  return (
    <div id="nav">
      <span id="logobar">
        <span id="logo">
          <MdLocalMovies />
        </span>
        UsePopCorn
      </span>
      <span>
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchResult(e.target.value);
          }}
        />
      </span>
      <span>Found {found} results</span>
    </div>
  );
}
