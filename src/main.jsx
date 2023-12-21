import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home  from './component/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContextApi from './ContextApi/ContextApi.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
   
  </React.StrictMode>,
)
