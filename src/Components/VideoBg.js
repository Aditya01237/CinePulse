import React, { useEffect } from "react";
import { Api_Options } from "../utills/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utills/moviesSlice";

const VideoBg = ({ id }) => {

    const dispatch = useDispatch()
    const trailerVideo = useSelector(store => store.movies?.trailerVideo) 

  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      Api_Options
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = json.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideos(trailer))
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);

  return (
    <div className="w-full" >
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBg;
