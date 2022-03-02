import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import Avatar from '@mui/material/Avatar';
import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';

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

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

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
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>Мой настройки</DropdownItem>
          <DropdownItem>Личные данные</DropdownItem>
          <DropdownItem>Интеграции</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default TryMenu;
