import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs.js";
import AboutUs from "./components/AboutUs.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// const RestaurantCard=(props)=>{

//destructuring of object
// const RestaurantCard=({resName,cuisine})=>{


const AppLayoutComponent=()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const CreatingRoute=createBrowserRouter(
    [
        {
            path:'/',
            element:<AppLayoutComponent/>,
            children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/aboutus",
                    element:<AboutUs/>
                },
                {
                    path:"/contactus",
                    element:<ContactUs/>
                },
                {
                    path:'/restaurant/:resId',
                    element:<RestaurantMenu/>
                }
            ]
        }
    ]
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={CreatingRoute}/>)