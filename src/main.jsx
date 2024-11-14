import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './styles/global.css'
import Index from "./pages/Index.jsx";
import AboutMe from "./pages/about_me.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Index />
    },
    {
        path:'/about-me',
        element:<AboutMe />
    },
    {
        path:'/projects',
        element:<Projects />
    },
    {
        path:'/contact',
        element:<Contact />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
