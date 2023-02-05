import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import Header from '~components/organisms/Header';
import '~style/App.scss';

export default function App() {
  return <>
    <Header className={"mb-5"} />
    <Outlet />
  </>;
};
