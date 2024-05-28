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
import Error from './components/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/invitados",
    element: <GuestList />,
  },
  {
    path: "/giftlist",
    element: <GiftList/>,
  },
  {
    path: "/Error",
    element: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
