import React from "react";
import { FcCalendar } from "react-icons/fc";
export default function MoviesList({ movies, showOnWatchedList }) {
  return (
    <div className="movielist">
      {movies.map((movie) => {
        return (
          <>
            <ul
              className="movie"
              key={movie.imdbID}
              onClick={() => showOnWatchedList(movie)}
            >
              <li>
                <img
                  src={movie.Poster || "https://dummyimage.com/50x50.png"}
                  alt=""
                  className="Poster"
                />
              </li>
              <li>
                {movie.Title}
                <span className="year">
                  <FcCalendar className="calen" /> {movie.Year}
                </span>
              </li>
            </ul>
            <hr style={{ opacity: "0.2" }} />
          </>
        );
      })}
    </div>
  );
}
