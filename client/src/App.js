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
import Addvacancy from "./components/Addvacancy/Addvacancy";
import Addcandidates from "./components/Addcandidates/Addcandidates";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/NavBar/SideMenu";
import Box from '@mui/material/Box';
import TryMenu from "./components/NavBar/FooterMenu";
import AddVacancy from './components/Addvacancy/Addvacancy';

function App() {
  return (
    <>
      {/* <Index /> */}
      {/* <TryMenu /> */}

      <Box sx={{ display: 'flex' }}>
        <SideMenu />

        {/* <TryMenu /> */}

        <Box component="main" sx={{ mt: 12, ml: 5 }} >
          {/* СЮДА ДОБАВЛЯЕМ ВСЕ ССЫЛКИ НА КОМПОНЕНТЫ */}
          {/* <Index /> */}

          <Routes>
            {/* <Route path='/' element={<TryMenu />} /> */}
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
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
          </Routes>

        </Box>

      </Box>


    </>
  );
}

export default App;
