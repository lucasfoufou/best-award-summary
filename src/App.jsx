import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import Header from '~components/organisms/Header';
import Footer from '~components/organisms/Footer';
import '~style/App.scss';

export default function App() {
  return <>
    <Header className={"mb-5"} />
    <Outlet />
    <Footer />
  </>;
};
