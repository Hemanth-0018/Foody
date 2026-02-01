import { useEffect,useState } from "react";
const usefetchData=()=>{
    const [listOfRes,setListOfRes]=useState([]);
    const [filteredres,setFilteredres]=useState([]);
    //Normal Js variable
    //intro of useEffect hook 
    //after rendering the body component call useEffect 
    useEffect(()=>{
       fetchedData();
    },[])
    const fetchedData=async()=>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        const cardData = json?.data?.cards?.find(
                (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
        const restaurantData = cardData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRes(restaurantData);
        setFilteredres(restaurantData);
    }
    return {listOfRes,filteredres,setFilteredres};
}
export default usefetchData;