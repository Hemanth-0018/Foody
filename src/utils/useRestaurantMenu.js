import { useState,useEffect } from "react";
import { MENU } from "./contants";
const useRestaurantMenu=(resId)=>{

    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        fetchData();
    },[resId])
    const fetchData=async()=>{
        const data=await fetch(MENU+resId);
        const json=await data.json();
        setMenu(json)
    }
    return menu;
}
export default useRestaurantMenu;