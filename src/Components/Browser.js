import React from "react";
import HeaderMain from "../Components/HeaderMain";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptMainPage from "./GptMainPage";

const Browser = () => {
  const gpt = useSelector((store) => store.gpt.gptPage);
  console.log(gpt.gptPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <div className="relative z-20 ">
        <HeaderMain />
      </div>
      {gpt ? (
        <GptMainPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browser;
