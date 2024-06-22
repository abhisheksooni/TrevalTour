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
import DetailTour from './pages/DetailTour.jsx';
import BookingForm from './pages/BookingForm.jsx';
import Singup from './pages/Singup.jsx';
import ToursUpload from './pages/ToursUpload.jsx';
import Singin from './pages/Singin.jsx';
import Admin from './pages/Admin.jsx';
import DeleteTour from './pages/DeleteTour.jsx';

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
        path:"detailtour/:id",
        element:<DetailTour/>,
        
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
        path:"singin",
        element:<Singin/>
      },
     
      {
        path:"admin",
        element:<Admin/>,
        children:[
          {
            path:"tourupload",
            element:<ToursUpload/>
          },
          {
            path:"deletetour",
            element:<DeleteTour/>
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
