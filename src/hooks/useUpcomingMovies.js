import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utills/moviesSlice';
import {Api_Options} from "../utills/constants"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', Api_Options)
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
        getUpcomingMovies();
    },[])
}

export default useUpcomingMovies