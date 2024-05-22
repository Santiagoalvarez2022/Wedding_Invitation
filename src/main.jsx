import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './pages/Form.jsx';
import GuestList from './pages/GuestList.jsx';
import GiftList from './pages/GiftList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "gift/:giftid",
    element: <Form />,
  },
  {
    path: "/invitados",
    element: <GuestList />,
  },
  {
    path: "/giftlist",
    element: <GiftList/>,
  },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
