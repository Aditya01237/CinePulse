import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptPage:false,
        gptMovies:null
    },
    reducers:{
        showGptPage:(state) => {
            state.gptPage = !state.gptPage
        },
        addGptSearchMovies:(state,actions) => {
            state.gptMovies = actions.payload
        }
    }
})

export const { showGptPage , addGptSearchMovies } = gptSlice.actions

export default gptSlice.reducer