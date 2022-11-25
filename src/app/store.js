import { configureStore } from '@reduxjs/toolkit';
import { galleryImgsReducer } from '../features/galleryImgs/galleryImgsSlice';
import { imagesReducer } from '../features/images/imagesSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    galleryImgs: galleryImgsReducer
  },
});
