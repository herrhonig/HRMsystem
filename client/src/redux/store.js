import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import candidateReducer from './slices/candidateSlice';
import tagsReducer from './slices/tagsSlice';
import candidateInfoReducer from './slices/candidateInfoSlice';
import newCandidateReducer from './slices/newCandidateSlice';
import menuReducer from './slices/NavBarSlice';
import newVacancyReducer from './slices/newVacancySlice';
import vacancyReducer from './slices/vacancySlice';
import toVacancyReducer from './slices/addToVacancySlice';
import statusesReducer from './slices/statusesSlice'

export default configureStore({
  reducer: {
    auth: userReducer,
    candidate: candidateReducer,
    candidateInfo: candidateInfoReducer,
    tags: tagsReducer,
    newCandidate: newCandidateReducer,
    menu: menuReducer,
    newVacancy: newVacancyReducer,
    vacancy: vacancyReducer,
    toVacancy: toVacancyReducer,
    statuses: statusesReducer,
  },
})
