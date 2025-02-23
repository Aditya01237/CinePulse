import React, { useState } from 'react';
import { OpenAI } from 'openai'; // Use ES6 import
import { Api_Options } from '../utills/constants';

const GptSearchBar = () => {
  const [userPrompt, setUserPrompt] = useState(''); // State for user input
  const [response, setResponse] = useState(''); // State for API response
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [movies, setmovies] = useState();

  const baseURL = "https://api.aimlapi.com/v1";
  const apiKey = "f5ae4f62223242049803865d91393d36"; // Replace with your actual API key
  const systemPrompt = "just give me movies name with semicoln no extra things just only movies name";

  const api = new OpenAI({
    apiKey,
    baseURL,
    dangerouslyAllowBrowser: true
  });

  const handleAsk = async () => {
    if (!userPrompt.trim()) {
      alert('Please enter a question.');
      return;
    }

    setIsLoading(true); // Start loading
    try {
      const completion = await api.chat.completions.create({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userPrompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 256,
      });

      const response = completion.choices[0].message.content;
      const moviesNames = response.split(/[;,]/).map(movie => movie.trim());
      const movieList = fetch('https://api.themoviedb.org/3/search/movie?query=3%20Idiots&include_adult=false&language=en-US&page=1', Api_Options)
      const data = (await movieList).json()
      console.log(moviesNames)
      console.log(data)
      setResponse(response); // Set the API response
    } catch (error) {
      console.error('Error fetching response:', error);
      setResponse('An error occurred while fetching the response.'); // Handle errors
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <div className="pt-[5%] px-[20%]">
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent form submission
          handleAsk();
        }}
        className="bg-black rounded-lg grid grid-cols-12 p-6 items-center"
      >
        <input
          type="text"
          className="col-span-9 p-4 m-4"
          placeholder="Ask me anything..."
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)} // Update user input
        />
        <button
          type="submit"
          className="col-span-3 bg-red-700 p-4 m-4 rounded-md text-white"
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? 'Loading...' : 'Ask'}
        </button>
      </form>

      {/* Display the API response */}
      {response && (
        <div className="mt-6 p-6 bg-gray-800 text-white rounded-lg">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;