import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import candidateReducer from './slices/candidateSlice';
import tagsReducer from './slices/tagsSlice'

export default configureStore({
  reducer: {
    info: userReducer,
    candidate: candidateReducer,
    tags: tagsReducer,
  },
})
