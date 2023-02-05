import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import { Container, Alert } from 'react-bootstrap';

import App from '~src/App';
import { getRoute } from '~utils/routes';
import {
  Home, Credits
} from '~utils/routes';

const router = createBrowserRouter([{
  path: getRoute('home'), element: <App />,
  children: [
    { index: true, element: <Home /> },
    { path: getRoute('home.credits'), element: <Credits /> },
    {
      path: '*', element:
        <Container>
          <Alert variant={'danger'}>
            <Alert.Heading>404</Alert.Heading>
            <p>Oops, an error occured :/</p>
          </Alert>
        </Container>
    },
  ]
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <main className="main" id="top">
        <RouterProvider router={router} />
      </main>
    </CookiesProvider>
  </React.StrictMode>
);
