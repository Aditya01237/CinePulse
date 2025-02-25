import React from "react";
import { IMG_CDN_URL } from "../utills/constants";
import { Link } from "react-router-dom";

const MovieCard = ({ posterPath, movieData }) => {
  return (
    <Link to={"/movie/" + movieData.id}>
      <div className="w-52 p-3 hover:opacity-50 cursor-pointer ">
        <img src={IMG_CDN_URL + posterPath} alt="" />
      </div>
    </Link>
  );
};

export default MovieCard;
