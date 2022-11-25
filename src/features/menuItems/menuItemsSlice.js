import { createSlice } from "@reduxjs/toolkit";
import { IMAGES } from '../../app/shared/IMAGES';

const initialState = {
    imagesArray: IMAGES
};

const imageSlice = createSlice({
    name: 'images',
    initialState
});

export const imagesReducer = imageSlice.reducer;

export const selectAllImages = (state) => {
    return state.images.imagesArray;  
};

