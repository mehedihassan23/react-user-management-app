import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home, { Context } from './component/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context.Provider>
      <RouterProvider router={router} />
    </Context.Provider>
   
  </React.StrictMode>,
)
