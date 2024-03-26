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
import Book from './Components/Book/Book.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import ReadBooks from './Components/ReadBooks/ReadBooks.jsx';
import WishlistBooks from './Components/WishlistBooks/WishlistBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';

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
        path:'/list',
        loader:() => fetch('books.json'),
        element:<ListedBooks></ListedBooks>
      },
      {
        path:'/FAQ',
        element:<FAQ></FAQ>
      },      
      {
        path:'/:id',
        loader:() => fetch('books.json'),
        element:<Book></Book>
      },
      {
        path:'/blogs',
        loader:() => fetch('books.json'),
        element:<Blogs></Blogs>
      },
      {
        path:'/list/read',
        loader:() => fetch('books.json'),
        element:<ReadBooks></ReadBooks>
      },
      {
        path:'/list/wishlist',
        loader:() => fetch('books.json'),
        element:<WishlistBooks></WishlistBooks>
      },
      {
        path:'/page',
        loader:() => fetch('books.json'),
        element:<PagesToRead></PagesToRead>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
