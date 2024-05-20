import React from "react";

import "./movieCard.css";
import { Link } from "react-router-dom";

function MovieCard({ movieName, movieBanner }) {
  return (
    <div className="movie-card">
      <Link to={`/movie?name=${movieName}`}>
        <div className="movie-image">
          <img
            src={movieBanner}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="movie-title">{movieName}</div>
      </Link>
    </div>
  );
}

export default MovieCard;
