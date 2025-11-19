import {
  createBrowserRouter,
  
} from "react-router-dom";

import Index from "../User/pages/Home";
import Books from "../User/pages/Books";

import Register from "../User/pages/auth/Register";
import Login from "../User/pages/auth/Login";
import HeroLanding from "../User/components/HeroLanding";

const router = createBrowserRouter([
  {
    path: "",
    element: <Index/>,
    children:[
       
        {
            path:"",
            element:<HeroLanding/>
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