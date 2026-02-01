import React,{lazy,Suspense, useContext, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
// import {useContext} from react;
// const RestaurantCard=(props)=>{

//destructuring of object
// const RestaurantCard=({resName,cuisine})=>{
const AboutUs=lazy(()=>import("./components/AboutUs.js"))
const AppLayoutComponent=()=>{
    const [userName,setUserName]=useState('');
    useEffect(()=>{
        const data={
            name:'Hemanth Eswar',
        };
        setUserName(data.name);
    },[])
    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className=" dark:bg-slate-700">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        
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
                    element:<Suspense fallback={<h2>Loading..!</h2>}><AboutUs/></Suspense>
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