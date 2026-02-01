import { LOGO_URL } from "../utils/contants";
import { useState,useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Header=()=>{
    const [btnName,setbtnName]=useState("Login");
     useEffect(()=>{
        console.log("rendered")
    },[]);
    const isOnline = useOnline();
    const [theme,setTheme]=useState(localStorage.getItem("theme")||"light");
    const {loggedInUser}=useContext(UserContext);
    console.log(loggedInUser)
    useEffect(()=>{
        
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
        } else {
            html.classList.add("dark");
        }
        localStorage.setItem("theme",theme);
    },[theme])
    const toggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
    }
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-2 transition-all duration-300
                    bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800/50">
            <div className="flex items-center">
        <img src={LOGO_URL} className="w-20 md:w-24 rounded-full" alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-6 md:gap-8 text-base font-medium text-gray-700 dark:text-gray-200">
          <li className="flex items-center">
            <div className={`h-3 w-3 rounded-full shadow-sm ${!isOnline ? "bg-red-500 animate-pulse" : "bg-green-500"}`}></div>
          </li>
          
          <li className="hover:text-amber-500 transition-colors"><Link to='/'>Home</Link></li>
          <li className="hover:text-amber-500 transition-colors"><Link to='/aboutus'>About Us</Link></li>
          <li className="hover:text-amber-500 transition-colors"><Link to='/contactus'>Contact Us</Link></li>
          <li className="hover:text-amber-500 transition-colors cursor-pointer">Cart</li>
        <button 
            onClick={toggleTheme}
            className={`w-10 p-0.5 rounded-2xl transition-all duration-300 
                ${theme === "light" 
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300 text-left" 
                : "bg-slate-700 text-yellow-400 hover:bg-slate-600 text-right"
                }`}
        >
        {theme === "dark" ? (
            <i className="fa-solid fa-moon text-lg m-0.5"></i>
        ) : (
            <i className="fa-solid fa-sun text-lg m-0.5"></i>
        )}
        </button>
          <button 
            onClick={() => setbtnName(btnName === "Login" ? "Logout" : "Login")} 
            className="px-5 py-2 rounded-lg font-bold bg-amber-500 text-white hover:bg-amber-600 
                       shadow-md active:scale-95 transition-all"
          >
            {btnName}
          </button>
          <li>
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
    )
}
export default Header;