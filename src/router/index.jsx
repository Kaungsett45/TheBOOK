import {
  createBrowserRouter,
  
} from "react-router-dom";

import Home from '../pages/Home.jsx'
import Layout from "../pages/Layout.jsx";
import Create from '../pages/Create.jsx'
import Search from '../pages/Search&pf.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"create",
            element:<Create/>
        },
       
    ]
  },
]);


export default router;