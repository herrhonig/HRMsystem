import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { changeMenu } from '../../redux/slices/NavBarSlice';
import SideMenu from '../NavBar/SideMenu';

function CandidatesAnalytics() {
  const { clientsid, chatid, vacancyid, id } = useParams();
  const location = useLocation()
  // useEffect
  useEffect(() => {
    dispatch(changeMenu({ locationPath: location.pathname, clientsid, chatid, vacancyid, id }));
  }, [location]);

  const dispatch = useDispatch();

  return (
    <>

      {/* <SideMenu /> */}
      <div>Vacancy</div>

    </>
  )
}

export default CandidatesAnalytics
