import { createSlice } from "@reduxjs/toolkit";
import { GALLERYIMGS } from "../../app/shared/GALLERYIMGS";

const initialState = {
    galleryImgsArray: GALLERYIMGS
};

const gallerImgSlice = createSlice ({
    name: 'galleryImgs',
    initialState
});

export const galleryImgsReducer = gallerImgSlice.reducer;

export const selectAllGalleryImgs = (state) => {
    return state.galleryImgs.galleryImgsArray;
};
