import React from 'react'
import { Api_Options, IMG_CDN_URL } from '../utills/constants'

const MovieCard = ({posterPath,movieData}) =>  {
  
  const showData = async () => {
    console.log(movieData)
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ movieData.id +"?language=en-US", Api_Options)
    const movieDetails = await data.json()
    console.log(movieDetails)
  }
  return (
    <div className="w-52 p-3 hover:opacity-50 cursor-pointer ">
        <img onClick={showData} src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  )
}

export default MovieCard