import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
const Home = lazy(() => import('./components/Home'));
const Error = lazy(() => import('./components/Error'));
const CountryDetail = lazy(() => import('./components/CountryDetail'));
import './index.css'; // optional: global styles

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    errorElement: (
      <Suspense fallback={<p>Loading Error...</p>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<p>Loading Home...</p>}>
            <Home />
          </Suspense>
        ),
      },

      {
        path: '/:country',
        element: (
          <Suspense fallback={<p>Loading Countries details...</p>}>
            <CountryDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
