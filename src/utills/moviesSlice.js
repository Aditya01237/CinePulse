import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        nowPopularMovies:null,
        nowTopRatedMovies:null,
        nowUpcomingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,actions) => {
            state.nowPlayingMovies = actions.payload
        },
        addUpcomingMovies:(state,actions) => {
            state.nowUpcomingMovies = actions.payload
        },
        addPopularMovies:(state,actions) => {
            state.nowPopularMovies = actions.payload
        },
        addTopRatedMovies:(state,actions) => {
            state.nowTopRatedMovies = actions.payload
        },
        addTrailerVideos:(state,actions) => {
            state.trailerVideo = actions.payload
        }
    },
})

export const { addNowPlayingMovies , addTrailerVideos , addPopularMovies , addTopRatedMovies , addUpcomingMovies} = moviesSlice.actions

export default moviesSlice.reducer