import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Rating from "./Rating";
import { FcCalendar } from "react-icons/fc";
import { GiRollingEnergy } from "react-icons/gi";
export default function WatchedMovies({
  click,
  show,
  setShow,
  showOnWatchedList,
}) {
  const [watchedMovies, setWatchedMovies] = useState([]);
  function addMovieHandler() {
    setWatchedMovies([...watchedMovies, click[0]]);
    setShow(!show);
  }
  return (
    <>
      {show && (
        <div id="watchedlist">
          <div id="details">
            <h3>MOVIES YOU WATCHED</h3>
            <ul id="info">
              <li>#️⃣ 2 movies</li>
              <li>⭐ 8.65</li>
              <li>🌟 9.5</li>
              <li>⏳ 132 min</li>
            </ul>
          </div>
          <div id="watched_movies">
            {watchedMovies.lenght > 0 ||
              watchedMovies.map((movie) => {
                return (
                  <>
                    <ul
                      className="movie"
                      key={movie.imdbID}
                      onClick={() => showOnWatchedList(movie)}
                    >
                      <li>
                        <img
                          src={
                            movie.Poster || "https://dummyimage.com/50x50.png"
                          }
                          alt=""
                          className="Poster"
                        />
                      </li>
                      <li>
                        {movie.Title}
                        <span className="year">
                          <FcCalendar className="calen" /> {movie.Year}
                        </span>
                        <span className="watched_rating">
                          <p>⭐{movie.imdbRating}</p>
                          <p>⏳ {movie.Runtime}</p>

                          <p>
                            <GiRollingEnergy
                              style={{
                                marginRight: "0.4rem",
                                alignSelf: "baseline",
                              }}
                            />
                            {movie.Genre}
                          </p>
                        </span>
                      </li>
                    </ul>
                    <hr style={{ opacity: "0.2" }} />
                  </>
                );
              })}
          </div>
        </div>
      )}
      {!show && (
        <div id="movieDetails">
          <span id="backArrow">
            <IoMdArrowRoundBack onClick={() => setShow(!show)} />
          </span>
          <div id="movie_Details">
            <div id="main_Details">
              <img
                src={click[0].Poster || "https://dummyimage.com/50x50.png"}
                alt=""
              />
              <span id="overall_Info">
                <h4>{click[0].Title}</h4>
                <p>
                  {click[0].Released} . {click[0].Runtime}
                </p>
                <p>{click[0].Genre}</p>
                <p>⭐ {click[0].imdbRating} IMDb rating</p>
              </span>
            </div>
            <Rating max_star={10} addMovieHandler={addMovieHandler} />
            <p id="plot">{click[0].Plot}</p>
            <p id="plot">Starring : {click[0].Actors}</p>
            <p id="plot"> Directed by {click[0].Director}</p>
          </div>
        </div>
      )}
    </>
  );
}
