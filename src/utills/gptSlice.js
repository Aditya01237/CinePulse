import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptPage:false,
    },
    reducers:{
        showGptPage:(state) => {
            state.gptPage = !state.gptPage
        }
    }
})

export const { showGptPage } = gptSlice.actions

export default gptSlice.reducer