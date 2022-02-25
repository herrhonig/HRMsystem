import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import candidateReducer from './slices/candidateSlice';

export default configureStore({
  reducer: {
    info: userReducer,
    candidate: candidateReducer,
  },
})
