import React from 'react'; 
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';


const router = createBrowserRouter([
  {
    path:'/',
    element: <Header/>,
    children: [
      {
        path:'/banner',
        element:<Banner/>
      },
      {
        path:'/main',
        element:<Main/>
      },
      {
        path: '/footer',
        element : <Footer/>
      },
    ],
  },
 
])


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
