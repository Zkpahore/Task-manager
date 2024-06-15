import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import TasksPage from './pages/Tasks.jsx';
import AboutPage from './pages/About.jsx';
import ContactPage from './pages/Contact.jsx';

import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='tasks' element={<TasksPage />} />
    <Route path='aboutPage' element={<AboutPage />} />
    <Route path='contactPage' element={<ContactPage />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
