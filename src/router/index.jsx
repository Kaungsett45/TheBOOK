import {
  createBrowserRouter,
  
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Create from '../pages/Books.jsx'
import Search from '../pages/Search&pf.jsx'

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
        
        {
            path:"create",
            element:<Create/>
        },
       
    ]
  },
]);


export default router;