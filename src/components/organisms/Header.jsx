import React from 'react';
import { } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import { getRoute } from '~utils/routes';

export default function Header() {
  return <>
    <div className="w-100 mx-auto my-3">
      <h2 className='text-center'>BEST AWARD SUMMARY</h2>
    </div>
    <div className="w-100 my-3 py-2 bg-header-menu-bg text-uppercase">
      <div className="w-50 mx-auto d-flex justify-content-around">
        <NavLink to={getRoute('home')} className={({ isActive }) => isActive ? 'text-decoration-underline' : undefined}>Home</NavLink>
        <NavLink to={getRoute('home.oscars', {year:95})} className={({ isActive }) => isActive ? 'text-decoration-underline' : undefined}>Oscars</NavLink>
        <NavLink to={getRoute('home.credits')} className={({ isActive }) => isActive ? 'text-decoration-underline' : undefined}>Credits</NavLink>
      </div>
    </div>
  </>;
};
