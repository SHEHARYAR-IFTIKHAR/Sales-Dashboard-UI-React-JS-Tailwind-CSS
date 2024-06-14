import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import LabTest from './components/LabTest/LabTest'
import Appointment from './components/Appointment/Appointment'
import MedicineOrder from './components/MedicineOrder/MedicineOrder'
import Message from './components/Message/Message'
import Payment from './components/Payment/Payment'
import Layout from './components/Layout.jsx'
import Settings from './components/Settings/Settings.jsx'
import Help from './components/Help/Help.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Dashboard/>
      },
      {
        path: "labtest",
        element: <LabTest/>
      },
      {
        path: "appointment",
        element: <Appointment/>
      },
      {
        path: "medicineorder",
        element: <MedicineOrder/>
      },
      {
        path: "Message",
        element: <Message/>
      },
      {
        path: "payment",
        element: <Payment/>
      },
      {
        path: "settings",
        element: <Settings/>
      },
      {
        path: "help",
        element: <Help/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
