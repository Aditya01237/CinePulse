import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Api_Options, GEMINI_API_KEY } from "../utills/constants";
import { useDispatch } from "react-redux";
import { addGptSearchMovies } from "../utills/gptSlice";

const GptSearchBar = () => {
  const [userPrompt, setUserPrompt] = useState(""); // State for user input
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const dispatch = useDispatch();

  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

  const fetchMovieData = async (movie) => {
    try {
      const formattedMovie = encodeURIComponent(movie.trim());

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${formattedMovie}&include_adult=false&language=en-US&page=1`,
        Api_Options
      );

      const movieData = await response.json();
      //console.log(movieData.results)
      return movieData.results
    } catch (error) {
      console.error(`Error fetching data for ${movie}:`, error);
      return [];
    }
  };

  const handleAsk = async () => {
    if (!userPrompt.trim()) {
      alert("Please enter a question.");
      return;
    }

    setIsLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Act as a movie recommendation system and suggest me some movies for the query: "${userPrompt}". Provide a maximum of 10 movie names, separated by commas.`;

      const result = await model.generateContent(prompt);
      const movieString = await result.response.text();

      console.log("Generated Movie String:", movieString);

      const gptmovies = movieString.split(","); 

      if (gptmovies.length === 0) {
        alert("No movies found. Try a different query.");
        setIsLoading(false);
        return;
      }

      // Fetch movie data concurrently
      const promiseArray = gptmovies.map((movie) => fetchMovieData(movie));
      const tmdbResult = await Promise.all(promiseArray)
      // Flatten results and remove empty arrays
      //dispatch(addGptSearchMovies(moviesData));
      console.log(tmdbResult);
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-[5%] px-[20%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="bg-black rounded-lg grid grid-cols-12 p-6 items-center"
      >
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder="Ask me anything..."
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button
          type="submit"
          className="col-span-3 bg-red-700 p-4 m-4 rounded-md text-white"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Ask"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
