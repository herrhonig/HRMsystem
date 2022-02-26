import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import candidateReducer from './slices/candidateSlice';
import tagsReducer from './slices/tagsSlice';
import candidateInfoReducer from './slices/candidateInfoSlice'

export default configureStore({
  reducer: {
    info: userReducer,
    candidate: candidateReducer,
    candidateInfo: candidateInfoReducer, 
    tags: tagsReducer,
  },
})
