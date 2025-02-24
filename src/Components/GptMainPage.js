import React from "react";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMainPage = () => {
  const gpt = useSelector(store => store.gpt)
  return (
    <div className="relative h-screen"> {/* Added z-index for layering */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg"
        alt="Netflix Background"
        className=" absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b z-10 from-black/70 to-black/90"></div>
      <div className=" relative z-20 ">
      <GptSearchBar /> 
      </div>
      <div className="bg-black">
      {gpt?.gptMovies && (
        <div className="z-20 relative px-12 ">
        <MovieList title={"Your Search"} movies={gpt?.gptMovies} />
        </div>
      )}
    </div>
    </div>
  );
};

export default GptMainPage;