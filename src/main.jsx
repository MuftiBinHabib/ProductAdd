import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Header from './components/Header.jsx';
import Add from './components/Add.jsx';
import firebaseConfig from '../firebase.config.js';
import UpdateTask from './components/UpdateTask.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
      path: "add",
      element: <Add />,
  },
  {
      path: "edit/:id",
      element: <UpdateTask />,
  },
],
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
