import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const containerRef = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 600, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -600, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="p-6 relative">
      <h1 className="text-3xl text-white font-bold p-3">{title}</h1>
      <div className="relative">
        {/* Scroll Right Button */}
        <button
          onClick={scrollLeft}
          className="absolute h-1/2 w-16 left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 text-white p-2 rounded-lg z-10 hover:bg-opacity-75"
        >
          &lt;
        </button>
        <button
          onClick={scrollRight}
          className="absolute h-1/2 w-16 right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 text-white p-2 rounded-lg z-10 hover:bg-opacity-75"
        >
          &gt;
        </button>

        {/* Movie List Container */}
        <div
          ref={containerRef}
          className="flex overflow-x-scroll scrollbar-hide"
        >
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;