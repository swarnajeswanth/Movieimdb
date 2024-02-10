import React, { useEffect, useState } from "react";
import "./index.css";
import NavBar from "./NavBar";
import MoviesList from "./MoviesList";
import WatchedMovies from "./WatchedList";

// Constant Data Required  or Fetching Movies & Images Data stored in the computer
let images = require.context("../images", true);
let jsonData = require.context("../top100", true);
const imagesList = images.keys().map((image) => images(image));
const moviesList = Array.from(
  new Set(jsonData.keys().map((data) => jsonData(data)))
);
const updatedList = moviesList.map((movie) => {
  let Poster = movie.imdbID;
  let path = imagesList.map((image) => {
    return image.split("/")[3].split(".")[0] === Poster ? image : null;
  });
  path = path.filter((path) => path != null);
  return { ...movie, Poster: path[0] };
});

// App Starting point

export default function App() {
  // Required Hooks
  const [movies, setMovies] = useState([]);
  const [found, setFound] = useState(0);
  const [click, setClick] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(function () {
    setMovies(Array.from(new Set(updatedList)));
  }, []);

  function searchResult(query) {
    if (query.length === 0) {
      setMovies(Array.from(new Set(updatedList)));
      setFound(0);
      return;
    }
    let results = movies.map((movie) => {
      if (movie.Title.toUpperCase().includes(query.toUpperCase())) {
        return movie;
      }
      return null;
    });
    let updatedresult = results.filter((result) => result != null);
    setMovies(updatedresult);
    setFound(updatedresult.length);
  }

  function showOnWatchedList(movie) {
    setClick([movie]);
    setShow(false);
  }
  return (
    <>
      <NavBar searchResult={searchResult} found={found} />
      <div id="result_Container">
        <MoviesList movies={movies} showOnWatchedList={showOnWatchedList} />
        <WatchedMovies
          click={click}
          setShow={setShow}
          show={show}
          showOnWatchedList={showOnWatchedList}
        />
      </div>
    </>
  );
}
