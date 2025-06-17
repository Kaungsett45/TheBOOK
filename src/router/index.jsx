import {
  createBrowserRouter,
  
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Books from "../pages/Books.jsx";
import BooksDetail from "../pages/BooksDetail.jsx";
import TopBooks from "../components/TopBooks.jsx";
import Authors from "../pages/Authors.jsx";
import Setting from "../pages/Setting.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
        {
            path:"",
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
            path:"books",
            element:<Books/>
        },
        {
            path:"setting",
            element:<Setting/>
        },
       
    ]
  },
]);


export default router;