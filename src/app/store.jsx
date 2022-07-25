import { configureStore } from '@reduxjs/toolkit';
import bucketSlice from './slice/bucketSlice';


export const store = configureStore({
  reducer: {
    bucket : bucketSlice.reducer
  },
});


