import {
  createBrowserRouter,
  
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import BooksDetail from "../pages/BooksDetail.jsx";
import TopBooks from "../components/TopBooks.jsx";
import Authors from "../pages/Authors.jsx";
import Create from "../pages/Create.jsx";
import Home from "../pages/Home.jsx";
import Gettingstarted from "../components/gettingstarted.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
        {
            path:"",
            element:<Home />
        },
        {
            path:"/register",
            element:<Gettingstarted />
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
            path:"create",
            element:<Create/>
        },
       
    ]
  },
]);


export default router;