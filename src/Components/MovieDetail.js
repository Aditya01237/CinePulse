import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Api_Options, IMG_CDN_URL } from "../utills/constants";
import VideoBg from "./VideoBg";
import MovieList from "./MovieList";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetails, setmovieDetails] = useState(null);
  const [similarMoviesList, setsimilarMoviesList] = useState();

  useEffect(() => {
    showData();
    similarMovies();
  }, []);

  const showData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      Api_Options
    );
    const movieDeta = await data.json();
    setmovieDetails(movieDeta);
    console.log(movieDetails);
  };

  const similarMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/similar?language=en-US&page=1', Api_Options)
    const jsonData = await data.json();
    setsimilarMoviesList(jsonData.results)
    console.log(jsonData);
    
  }

  if (!movieDetails || !similarMoviesList) {
    return <h1 className="text-white text-center mt-10">Loading....</h1>;
  }

  return (
    <div className="bg-gray-900  w-full min-h-screen">
      {/* Gradient Background */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black w-full min-h-screen py-10">
        {/* Movie Title and Details */}
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
            {movieDetails.title}
          </h1>
          <p className="text-lg text-gray-300 mb-2">
            <span className="font-semibold">Original Title:</span>{" "}
            {movieDetails.original_title}
          </p>
          <p className="text-lg text-gray-300 mb-8">
            <span className="font-semibold">Released:</span>{" "}
            {movieDetails.release_date.split("-")[0]}
          </p>

          {/* Poster and Video Container */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Movie Poster */}
            <img
              className="w-full md:w-1/3 lg:w-1/4 rounded-lg shadow-2xl"
              src={IMG_CDN_URL + movieDetails.poster_path}
              alt="Movie Poster"
            />

            {/* Video Section */}
            <div className="w-full md:w-2/3 lg:w-3/4 rounded-lg overflow-hidden shadow-2xl">
              <VideoBg id={movieId} />
            </div>
          </div>

          {/* Movie Overview */}
          <div className="mt-12">
            <h2 className="text-3xl text-white font-bold mb-4">Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {movieDetails.overview}
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl text-white font-bold mb-4">Genres</h2>
            <div className="flex space-x-6 ">
              {movieDetails.genres.map((g) => (
                <p className="text-lg text-gray-300 leading-relaxed border-white border-2 py-2 px-4 rounded-2xl ">
                  {g.name}
                </p>
              ))}
            </div>
          </div>
          <div className=" -ml-10 ">
            <MovieList title={"Similar Movies"} movies={similarMoviesList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;


