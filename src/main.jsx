import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import App from './App';
import Home from './components/Home';
import { CountriesProvider } from './Contexts/CountriesContext';

const CountryDetail = lazy(() => import('./components/CountryDetail'));
const Error = lazy(() => import('./components/Error'));

const PageLoader = () => (
  <div role='status' aria-live='polite' style={{ padding: '1rem' }}>
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={<PageLoader />}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':country',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CountryDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
    </HelmetProvider>
  </React.StrictMode>
);
