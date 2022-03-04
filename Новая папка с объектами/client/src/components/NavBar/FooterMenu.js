import './index.css';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Avatar from '@mui/material/Avatar';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router';


function TryMenu() {
  return (
    <Navbar>
      {/* <NavItem Avatar> */}
      <NavItem className="avatar" alt="Remy Sharp" src="/profile.png">
        <DropdownAdd></DropdownAdd>
        {/* </Avatar> */}
      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="avatar-button" onClick={() => setOpen(!open)}>
        {/* <img src={props.src} /> */}
        <Avatar alt="Remy Sharp" src={props.src} />
        {/* {props.avatar} */}
        <ArrowDropDownOutlinedIcon />
      </a>

      {open && props.children}
    </li>
  );
}

// function DropdownMenu() {
//   const [activeMenu, setActiveMenu] = useState('main');
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//   }, [])

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height);
//   }

//   function DropdownItem(props) {
//     return (
//       <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//         <span className="avatar-button">{props.leftIcon}</span>
//         {props.children}
//         <span className="avatar-right">{props.rightIcon}</span>
//       </a>
//     );
//   }

//   return (
//     <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

//       <CSSTransition
//         in={activeMenu === 'main'}
//         timeout={500}
//         classNames="menu-primary"
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem>Мой настройки</DropdownItem>
//           <DropdownItem>Личные данные</DropdownItem>
//           <DropdownItem>Интеграции</DropdownItem>
//         </div>
//       </CSSTransition>
//     </div>
//   );
// }

function DropdownAdd() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const isAuth = useSelector(state => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function logoutHandler() {
    dispatch(signOut());
    navigate('/');
  }

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item-header" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        {/* <span className="avatar-button">{props.leftIcon}</span> */}
        {props.children}
        {/* <span className="avatar-right">{props.rightIcon}</span> */}
      </a>
    );
  }

  return (
    <>

      <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem>Мой настройки</DropdownItem>
            <Link to="/crm/addvacancy">
              <DropdownItem>Добавить вакансию</DropdownItem>
            </Link>
            <Link to="/crm/addcandidates">
              <DropdownItem>Добавить кандидата</DropdownItem>
            </Link>
            {isAuth &&
              <Button
                type="submit"
                fullWidth
                color="warning"
                onClick={logoutHandler}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Выйти
              </Button>
            }
          </div>
        </CSSTransition>
      </div>
    </>
  );
}

export default TryMenu;
