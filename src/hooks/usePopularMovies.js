import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utills/moviesSlice';
import {Api_Options} from "../utills/constants"

const usePopularMovies = () => {
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', Api_Options)
      const json = await data.json();
      dispatch(addPopularMovies(json.results))
    };
  
    useEffect(() => {
      getPopularMovies();
    },[])
}

export default usePopularMovies