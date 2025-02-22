import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'
import { useSelector } from 'react-redux'

const MainContainer = () => {

    const movies = useSelector(store => store.movies.nowPlayingMovies)
    if(!movies)return;

    const mainMovies = movies[2];
    const {original_title , overview , id} = mainMovies

  return (
    <div >
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBg id={id}/>
    </div>
  )
}

export default MainContainer