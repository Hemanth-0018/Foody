import { LOGO_URL } from "../utils/contants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
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
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='contactus'>Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={()=>btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;