import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
 
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import { RouterProvider } from 'react-router-dom';

import Root from './Router/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Packeges from './pages/Packeges.jsx';
import Contect from './pages/Contect.jsx';
import BookingForm from './pages/BookingForm.jsx';
import Singup from './pages/Singup.jsx';
import Signin from './pages/Signin.jsx';
import Admin from './pages/Admin.jsx';
import AdminEditPackages from './pages/AdminEditPackages.jsx';
import DetailPackages from './pages/DetailPackages.jsx';
import AddNewPackage from './pages/AddNewPackage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"packeges",
        element:<Packeges/>
      },
      {
        path:"contect",
        element:<Contect/>
      },
      {
        path:"detailpackages/:id",
        element:<DetailPackages/>,
        
      },
      {
        path:"bookingform",
        element:<BookingForm/>
      },
      {
        path:"singup",
        element:<Singup/>
      },
      {
        path:"signin",
        element:<Signin/>
      },
     
      {
        path:"admin",
        element:<Admin/>,
        children:[
          {
            path:"addpackage",
            element:<AddNewPackage/>
          },
          {
            path:"editpackages",
            element:<AdminEditPackages/>
          },
        ]

      },
      
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
