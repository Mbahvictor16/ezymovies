import React from "react";
import MovieList from "../MovieList/MovieList";

function TopMovies() {
  return (
    <section className="mt-20">
      <h1 className="text-4xl md:text-6xl font-[950] mb-10">Top 100</h1>
      <MovieList />
    </section>
  );
}

export default TopMovies;
