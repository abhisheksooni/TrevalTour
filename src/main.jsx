import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Router/Root.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Packeges from './pages/Packeges.jsx';
import Contect from './pages/Contect.jsx';
import DetailTour from './pages/DetailTour.jsx';
import BookingForm from './pages/BookingForm.jsx';

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
        path:"detailtour",
        element:<DetailTour/>,
        
      },
      {
        path:"bookingform",
        element:<BookingForm/>
      }
      
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
