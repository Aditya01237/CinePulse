import React from "react";
import HeaderMain from "../Components/HeaderMain";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browser = () => {
  useNowPlayingMovies()
  return (
    <div>
      <HeaderMain />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browser;
