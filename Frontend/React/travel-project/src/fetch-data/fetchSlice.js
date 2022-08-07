import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';



const initialState = {
    loading: false,
    tours: [],
    error: ''
}

export const fetchTours = createAsyncThunk('tour/fetchTours', () => {
    return axios
    .get('https://localhost:3000/tours')
    .then((response) => response.data)
}) 


const tourSlice = createSlice({
    name: "tour",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTours.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchTours.fulfilled, (state, action) => {
            state.loading = false;
            state.tours = action.payload;
            state.error = ''
        })
        builder.addCase(fetchTours.rejected, (state, action) => {
            state.loading = false;
            state.tours = [];
            state.error = action.error.message;
        })
    },
});

export const {loading} = tourSlice.actions

export default tourSlice.reducer