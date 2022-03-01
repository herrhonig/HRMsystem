import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Index from "./components/Index";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Vacancy from "./components/Vacancy/Vacancy";
import Chat from "./components/Chat/Chat";
import Candidates from "./components/Candidates/Candidates";
import Clients from "./components/Clients/Clients";
import Addcandidates from "./components/Addcandidates/Addcandidates";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/NavBar/SideMenu";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TryMenu from "./components/NavBar/FooterMenu";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth, signOut} from './redux/slices/userSlice';
import AddVacancy from './components/Addvacancy/Addvacancy';
import StartPage from "./components/StartPage/StartPage";
import MainPage from "./components/MainPage/MainPage";



function App() {

  // CHECK AUTH:
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('TOKEN FROM LS =======>', localStorage.getItem('token'));
      dispatch(checkAuth());
    }
  }, []);
  //////////////////// CHECK AUTH END ///////////////////////

  return (
    <>
      {/* <Index /> */}
      {/* <TryMenu /> */}

      <Box sx={{ display: 'flex' }}>
        

        {/* <TryMenu /> */}

        <Box component="main" sx={{ mt: 12, ml: 5 }} >
          {/* СЮДА ДОБАВЛЯЕМ ВСЕ ССЫЛКИ НА КОМПОНЕНТЫ */}
          {/* <Index /> */}

          
          <Routes>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            {isAuth ?
          <>
          <Route path='/crm' element={<MainPage />} />
          <Route path='/crm/vacancies' element={<Vacancy />} />
          <Route path='/crm/vacancies/:id' element={<Candidates />} />
          <Route path='/crm/vacancies/:id/candidates/:id' element={<Candidates />} />
          <Route path='/crm/chat' element={<Chat />} />
          <Route path='/crm/candidates' element={<Candidates />} />
          <Route path='/crm/candidates/:id' element={<Candidates />} />
          <Route path='/crm/clients' element={<Clients />} />
          <Route path='/crm/clients/:id/vacancies' element={<Candidates />} />
          <Route path='/crm/clients/:id/vacancies/:id/candidates' element={<Candidates />} />
          <Route path='/crm/clients/:id/vacancies/:id/candidates/:id' element={<Candidates />} />
          <Route path='/crm/addcandidates' element={<Addcandidates />} />
          <Route path='/crm/addvacancies' element={<AddVacancy />} />
          </>
          :
          <Route path='/' element={<StartPage />} />
          
          }
          </Routes>

        </Box>

      </Box>


    </>
  );
}

export default App;
