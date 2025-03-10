import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './page/services/services';
import Clinics from './page/clinics/clinics';
import Doctors from './page/doctors/doctors';
import Blog from './page/blog/blog';
import Intelligence from './page/intelligence/intelligence';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/clinics",
    element: <Clinics />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/intelligence",
    element: <Intelligence />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
