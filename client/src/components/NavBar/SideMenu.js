import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TryMenu from './FooterMenu';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import Chip from '@mui/material/Chip';


import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import List from '@mui/material/List';

import {
  Route,
  Routes,
  Link,
  useLocation,
  useParams
} from "react-router-dom";

const drawerWidth = 88;
const drawer1Width = drawerWidth + 186;


function SideMenu() {


  const list = useSelector((state) => state.menu.list);
  const page = useSelector((state) => state.menu.page);
  const link = useSelector((state) => state.menu.link);

  // console.log(page);

  function DropdownItem(el) {
    return (

      <Chip sx={{ marginLeft: '5px', marginRight: '5px' }} label={el.children} variant="outlined" />

    );
  }


  return (
    <>

      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <TryMenu />
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawer1Width, boxSizing: 'border-box', boxShadow: 3 },
        }}
      >
        {/* <Toolbar /> */}

        <Box sx={{ mt: 9, ml: 13 }}>

          <CSSTransition
            in={page === 'Вакансии'}
            timeout={700}
            classNames="menu-primary"
            unmountOnExit
          >
            <div className="menu">
              <h2>{page}</h2>
              {list && list?.map((el) =>
                <Link className="menu-item" to={`${link}/${el.id}`}>
                  <DropdownItem key={el.id}>
                    {el.position}
                  </DropdownItem>
                </Link>
              )}
            </div>
          </CSSTransition>


          <CSSTransition
            in={page === 'Клиенты'}
            timeout={700}
            classNames="menu-primary"
            unmountOnExit
          >
            <div className="menu">
              <h2>{page}</h2>
              {list && list?.map((el) =>
                <Link className="menu-item" to={`${link}/${el.id}/vacancies`}>
                  <DropdownItem key={el.id}>
                    {el.name}
                  </DropdownItem>
                </Link>
              )}
            </div>
          </CSSTransition>

          <CSSTransition
            in={page === 'Кандидаты'}
            timeout={700}
            classNames="menu-primary"
            unmountOnExit
          >
            <div className="menu">
              <h2>{page}</h2>
              {list && list?.map((el) =>
                <Link className="menu-item" to={`${link}/${el.id}`}>
                  <DropdownItem key={el.id}>
                    {el.last_name} {el.first_name} {el.middle_name}
                  </DropdownItem>
                </Link>
              )}
            </div>
          </CSSTransition>
        </Box>

      </Drawer>


      <Drawer
        variant="permanent"
        backgroundColor="#EBEBFA"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', order: 1, backgroundColor: "#EBEBFA", boxShadow: 1 },
        }}
      >
        {/* <Toolbar /> */}

        {/* / */}


        <Box sx={{ mt: 9, ml: 1 }}>
          {/* <Link className="side" to={`/crm`}> */}
          {/* <ListItem className="angle"> */}
          <h2>Меню</h2>
          <div>
            <List>
              <Link to={`/crm/clients`}>
                <Chip className="side" sx={{ marginTop: '30px', backgroundColor: '#FFFFFF' }} label='Клиенты' variant="outlined" />
              </Link>
              <Link to={`/crm/candidates`}>
                <Chip className="side" sx={{ marginTop: '60px', backgroundColor: '#FFFFFF' }} label='Клиенты' variant="outlined" />
              </Link>
              <Link to={`/crm/vacancies`}>
                <Chip className="side" sx={{ marginTop: '60px', backgroundColor: '#FFFFFF' }} label='Клиенты' variant="outlined" />
              </Link>
            </List>
          </div>
          {/* </ListItem> */}
          {/* </Link> */}

        </Box>
      </Drawer>




    </>
  )
}

export default SideMenu
