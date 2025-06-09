import {
  createBrowserRouter,
  
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Books from "../components/Books.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout/>,
    children:[
        {
            path:"",
            element:<Books/>
        },
       
    ]
  },
]);


export default router;