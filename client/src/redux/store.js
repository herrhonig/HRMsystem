import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import candidateReducer from './slices/candidateSlice';
import tagsReducer from './slices/tagsSlice';
import candidateInfoReducer from './slices/candidateInfoSlice';
import newCandidateReducer from './slices/newCandidateSlice';
import menuReducer from './slices/NavBarSlice';
import newVacancyReducer from './slices/newVacancySlice';

export default configureStore({
  reducer: {
    auth: userReducer,
    candidate: candidateReducer,
    candidateInfo: candidateInfoReducer,
    tags: tagsReducer,
    newCandidate: newCandidateReducer,
    menu: menuReducer,
    newVacancy: newVacancyReducer,
  },
})
