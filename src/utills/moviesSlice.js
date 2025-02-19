import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,actions) => {
            state.nowPlayingMovies = actions.payload
        },
        addTrailerVideos:(state,actions) => {
            state.trailerVideo = actions.payload
        }
    },
})

export const { addNowPlayingMovies , addTrailerVideos } = moviesSlice.actions

export default moviesSlice.reducer