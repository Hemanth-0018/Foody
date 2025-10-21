import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js"
import Body from "./components/Body"
// const RestaurantCard=(props)=>{

//destructuring of object
// const RestaurantCard=({resName,cuisine})=>{





const AppLayoutComponent=()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayoutComponent/>)