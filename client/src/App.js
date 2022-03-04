import {
  Route,
  Routes,
  Link,
} from "react-router-dom";
import Index from "./components/Index";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Vacancy from "./components/Vacancy/VacancyPage";
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
import { checkAuth, signOut } from './redux/slices/userSlice';
import AddVacancy from './components/Addvacancy/Addvacancy';
import StartPage from "./components/StartPage/StartPage";
import MainPage from "./components/MainPage/MainPage";
import { Navigate, useNavigate } from "react-router-dom";
import SignUp from "./components/Signup/Signup";
import CandidatesAnalytics from "./components/Candidates/CandidatesAnalytics";
import VacancyAnalytics from "./components/Vacancy/VacancyAnalytics";
import ClientsAnalytics from "./components/Clients/ClientsAnalytics";
import MainAnalytics from "./components/MainAnalytics/MainAnalytics";
import Test from "./components/Test";
import Dashboard from "./components/pages/index";
import VacancyPage from "./components/Vacancy/VacancyPage";





function App() {
  const navigate = useNavigate();

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

        <SideMenu />

        {/* <TryMenu /> */}

        <Box component="main" sx={{ mt: 10, ml: 25 }} >
          {/* СЮДА ДОБАВЛЯЕМ ВСЕ ССЫЛКИ НА КОМПОНЕНТЫ */}
          {/* <Index /> */}


          <Routes>
            {isAuth ?
              <>
                <Route path='/crm' element={<MainAnalytics />} />
                <Route path='/crm/vacancies' element={<VacancyAnalytics />} />
                <Route path='/crm/vacancies/:vacancyid' element={<VacancyPage />} />
                <Route path='/crm/vacancies/:vacancyid/candidates' element={<CandidatesAnalytics />} />
                <Route path='/crm/vacancies/:vacancyid/candidates/:id' element={<Candidates />} />
                <Route path='/crm/chat' element={<Chat />} />
                <Route path='/crm/chat/:chatid' element={<Chat />} />
                <Route path='/crm/candidates' element={<CandidatesAnalytics />} />
                <Route path='/crm/candidates/:id' element={<Candidates />} />
                <Route path='/crm/clients' element={<MainAnalytics />} />
                <Route path='/crm/clients/:clientsid/vacancies' element={<VacancyAnalytics />} />
                <Route path='/crm/clients/:clientsid/vacancies/:vacancyid' element={<Vacancy />} />
                <Route path='/crm/clients/:clientsid/vacancies/:vacancyid/candidates/:id' element={<Candidates />} />
                <Route path='/crm/addcandidates' element={<Addcandidates />} />
                <Route path='/crm/addvacancy' element={<AddVacancy />} />
              </>
              :
              <>
                <Route path='/' element={<StartPage />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
              </>
            }
          </Routes>

        </Box>

      </Box>


    </>

  );
}

export default App;
