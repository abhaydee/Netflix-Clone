import React, { useState, useEffect } from "react";
import { instance } from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, largeRowRequired }) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchApiData() {
      const request = await instance.get(fetchUrl);
      console.log("the api data", request.data.results);
      setMovie(request.data.results);
      return request;
    }
    fetchApiData();
  }, [fetchUrl]);

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.name ? movie.name : "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__grid">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__image ${largeRowRequired && "row__imageLarge"}`}
            src={`${base_url}${
              largeRowRequired ? movie.poster_path : movie.backdrop_path
              }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={options} />}
    </div>
  );
}

export default Row;
