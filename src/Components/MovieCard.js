import React from 'react'
import { IMG_CDN_URL } from '../utills/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-52 p-3 hover:opacity-50 cursor-pointer ">
        <img src={IMG_CDN_URL + posterPath} alt="" />
    </div>
  )
}

export default MovieCard