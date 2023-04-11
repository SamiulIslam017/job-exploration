import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './components/Error/Error'
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics'
import Applied from './components/Applied/Applied'
import Blog from './components/Blog/Blog'
import Job from './components/Job/Job'
import JobDetailes from './components/JobDetails/JobDetailes'


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:() => fetch ('joblists.json'),
      },
      {
        path:'/job',
        element:<Job></Job>,
        loader:() => fetch ('joblists.json'),
      },
      {
        path:'/:id',
        element:<JobDetailes></JobDetailes>,
        loader: ({params}) => fetch(`joblists.json`)
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader:() => fetch ('joblists.json'),
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
