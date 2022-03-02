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
import { checkAuth, signOut } from './redux/slices/userSlice';
import AddVacancy from './components/Addvacancy/Addvacancy';
import CandidatesAnalytics from "./components/Candidates/CandidatesAnalytics";
import VacancyAnalytics from "./components/Vacancy/VacancyAnalytics";
import ClientsAnalytics from "./components/Clients/ClientsAnalytics";
import CatMenu from "./components/NavBar/CatMenu";



function App() {
  // const isAuth = useSelector(state => state.auth.isAuth);
  // console.log('=== is auth ===', isAuth)
  // const dispatch = useDispatch();
  // // CHECK AUTH:
  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     console.log('TOKEN FROM LS =======>', localStorage.getItem('token'));
  //     dispatch(checkAuth());
  //   }
  // }, []);

  return (
    <>
      {/* <Index /> */}
      {/* <TryMenu /> */}


      <Box sx={{ display: 'flex' }}>
        <SideMenu />

        {/* <TryMenu /> */}

        <Box component="main" sx={{ mt: 10, ml: 15 }} >
          {/* СЮДА ДОБАВЛЯЕМ ВСЕ ССЫЛКИ НА КОМПОНЕНТЫ */}
          {/* <Index /> */}
          {/* <div>
        {isAuth ? 
          <>
            <span>Пользователь авторизован</span>
            <Button onClick={() => dispatch(signOut())}>logout</Button>
          </>
         :
          <><h4>Вам необходимо авторизоваться:</h4>
          <Link to={`/crm/signin`}>
            <div>
              <Button>Sign in</Button>
            </div>
          </Link>
          <Link to={`/crm/signup`}>
            <div>
            <Button>Sign up</Button>
            </div>
          </Link>
              
          </>}
      </div> */}

          <Routes>
            <Route path='/crm' element={<ClientsAnalytics />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/crm/vacancies' element={<VacancyAnalytics />} />
            <Route path='/crm/vacancies/:vacancyid' element={<VacancyAnalytics />} />
            <Route path='/crm/vacancies/:vacancyid/candidates' element={<CandidatesAnalytics />} />
            <Route path='/crm/vacancies/:vacancyid/candidates/:id' element={<Candidates />} />
            <Route path='/crm/chat' element={<Chat />} />
            <Route path='/crm/chat/:chatid' element={<Chat />} />
            <Route path='/crm/candidates' element={<CandidatesAnalytics />} />
            <Route path='/crm/candidates/:id' element={<Candidates />} />
            <Route path='/crm/clients' element={<ClientsAnalytics />} />
            <Route path='/crm/clients/:clientsid/vacancies' element={<VacancyAnalytics />} />
            <Route path='/crm/clients/:clientsid/vacancies/:vacancyid' element={<Vacancy />} />
            <Route path='/crm/clients/:clientsid/vacancies/:vacancyid/candidates/:id' element={<Candidates />} />
            <Route path='/crm/addcandidates' element={<Addcandidates />} />
          </Routes>

        </Box>

      </Box>


    </>
  );
}

export default App;
