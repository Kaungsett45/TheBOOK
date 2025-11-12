import {
  createBrowserRouter,
  
} from "react-router-dom";

import Index from "../User/pages/index";
import Home from "../User/pages/Home";
import Books from "../User/pages/Books";

import Register from "../User/Login&Register/Register";
import Login from "../User/Login&Register/Login";

const router = createBrowserRouter([
  {
    path: "",
    element: <Index/>,
    children:[
        {
            path:"",
            element:<Home/>
        },
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/books",
            element:<Books/>
        },
      
    ]
  },
]);


export default router;