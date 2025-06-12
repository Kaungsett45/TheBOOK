import {
  createBrowserRouter,
  
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Books from "../pages/Books.jsx";
import Boooks from "../components/Books.jsx";
import Authors from "../pages/Authors.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
        {
            path:"",
            element:<Boooks/>
        },
        {
            path:"authors",
            element:<Authors/>
        },
        {
            path:"books",
            element:<Books/>
        },
       
    ]
  },
]);


export default router;