import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utills/moviesSlice';
import {Api_Options} from "../utills/constants"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
    const nowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        Api_Options
      );
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
      console.log(json.results);
    };
  
    useEffect(() => {
      nowPlayingMovies();
    },[])
}

export default useNowPlayingMovies