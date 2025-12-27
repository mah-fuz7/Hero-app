import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Installation from "../Pages/Installation";
import Apps from "../Pages/Apps";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import Details from "../Pages/Details";
import Loading from "../Components/Loading";

const router=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
       loader:Loading,
        errorElement:<ErrorPage/>,
        children:[
           {
        path:'/',
        Component:Home
    },
    {
        path:'/apps',
        Component:Apps
    },
    {
        path:'/installation',
        Component:Installation
    },
    {
        path:'/details/:id',
        element:<Details/>


    },
        ]
    },
    
])
export default router 