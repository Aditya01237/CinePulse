import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (
    <div className="bg-black">
      {(movies?.nowPlayingMovies && movies?.nowPopularMovies && movies?.nowTopRatedMovies && movies?.nowUpcomingMovies ) && (
        <div className="-mt-80 relative z-20 px-12 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Popular Movies"} movies={movies.nowPopularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;