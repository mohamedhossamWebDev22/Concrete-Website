import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./style.scss"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// pages
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: "/services",
    element: <Services/>,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: "/projects",
    element: <Projects/>,
    errorElement: <h1>Error 404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
