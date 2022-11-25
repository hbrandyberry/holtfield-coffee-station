import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import { imagesReducer } from '../features/menuItems/menuItemsSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer
    // counter: counterReducer
  },
});
