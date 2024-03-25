import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import FAQ from './Components/FAQ/FAQ.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        loader:() => fetch('books.json'),
        element: <Home></Home> ,
      },
      {
        path:'/FAQ',
        element:<FAQ></FAQ>
      },
      {
        path:'/list',
        element: <ListedBooks></ListedBooks>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
