import {
  createBrowserRouter,
  
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Books from "../pages/Books.jsx";
import BooksDetail from "../pages/BooksDetail.jsx";
import TopBooks from "../components/TopBooks.jsx";
import Authors from "../pages/Authors.jsx";
import Setting from "../pages/Setting.jsx";
import Homedesign from "../components/homedesign.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
        {
            path:"",
            element:<Homedesign />
        },
        {
            path:"/books",
            element:<TopBooks/>
        },
        {
            path:"authors",
            element:<Authors/>
        },
        {
            path:"/books/:id",
            element:<BooksDetail/>
        },
       
        {
            path:"setting",
            element:<Setting/>
        },
       
    ]
  },
]);


export default router;