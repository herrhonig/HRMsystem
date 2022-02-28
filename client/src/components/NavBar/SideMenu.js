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

import {
  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";
import { changeMenu } from '../../redux/slices/NavBarSlice';

const drawerWidth = 240;

function SideMenu() {


  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    dispatch(changeMenu({ locationPath: location.pathname }));
  }, [location]);

  const list = useSelector((state) => state.menu.list);
  const page = useSelector((state) => state.menu.page);
  const goTo = useSelector((state) => state.menu.goTo);

  console.log(page);

  function DropdownItem(el) {
    return (
      <Link className="menu-item" to={'/crm/candidates/1'}>
        <Chip sx={{ marginLeft: '5px', marginRight: '5px' }} label={el.children} variant="outlined" />
      </Link>
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
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />

        <Box sx={{ overflow: 'auto' }}>

          <CSSTransition
            in={page === 'Вакансии'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
          >
            <div className="menu">
              <span>{page}</span>
              {list && list?.map((el) =>
                <DropdownItem key={el.id}>
                  {el.position}
                </DropdownItem>
              )}
            </div>
          </CSSTransition>


          <CSSTransition
            in={page === 'Клиенты'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
          >
            <div className="menu">
              <span>{page}</span>
              {list && list?.map((el) =>
                <DropdownItem key={el.id}>
                  {el.name}
                </DropdownItem>
              )}
            </div>
          </CSSTransition>

          <CSSTransition
            in={page === 'Кандидаты'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
          >
            <div className="menu">
              <span>{page}</span>
              {list && list?.map((el) =>
                <DropdownItem key={el.id}>
                  {el.last_name} {el.first_name} {el.middle_name}
                </DropdownItem>
              )}
            </div>
          </CSSTransition>
        </Box>
      </Drawer>

    </>
  )
}

export default SideMenu
