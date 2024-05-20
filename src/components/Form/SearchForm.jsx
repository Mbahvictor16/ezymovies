import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchForm() {
  return (
    <form action="" method="post" className="w-full mx-auto mt-10 md:w-10/12 lg:w-8/12">
      <input
        type="search"
        name="search"
        className="block rounded-md w-full text-2xl px-4 py-3 mb-2 md:text-4xl text-black"
      />
      <button className="block bg-yellow-400 text-black w-full font-extrabold text-lg md:text-3xl px-4 py-3 rounded-md">
        <span className="flex items-center justify-center gap-x-1">
          <FaSearch  className="text-lg font-extrabold"/>
          Search
        </span>
      </button>
    </form>
  );
}

export default SearchForm;
