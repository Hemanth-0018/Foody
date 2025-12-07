import { LOGO_URL } from "../utils/contants";
import { useState,useEffect } from "react";
const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
     useEffect(()=>{
        console.log("rendered")
    },[]);
    return (
        <div className="header">
            <div className="Logo-container">
                <img src={LOGO_URL} className="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;