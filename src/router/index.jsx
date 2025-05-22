import {
  createBrowserRouter,
  
} from "react-router-dom";

import Home from '../pages/Home.jsx'
import Layout from "../pages/Layout.jsx";

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
        {
            path:"search",
            element:<Search/>
        },
    ]
  },
]);


export default router;