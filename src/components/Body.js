import RestaurantCard from "./RestaurantCard";
import { Link, useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import ShimmerUi from "./Shimmer";
const Body=()=>{

    //Local State Variable - Super powerful variable
    const [listOfRes,setListOfRes]=useState();
    const [filteredres,setFilteredres]=useState();
    const [searchTxt,setSearchTxt]=useState("");
    const {resId}=useParams();
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
        const restaurantData=cardData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRes(restaurantData);
        setFilteredres(restaurantData);
}
    return (!listOfRes)? <ShimmerUi/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" onChange={(e)=>setSearchTxt(e.target.value)}/>
                    <button onClick={()=>{
                        const filteringres=listOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchTxt.toLowerCase()));
                        setFilteredres(filteringres);
                    }}>search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList=listOfRes.filter(
                        (res)=>res.info.avgRating >4.2
                    );
                    setFilteredres(filteredList);
                }
                }
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
               
                {
                    filteredres?.map((res)=>(
                        <Link to={"restaurant/"+res.info.id} key={res.info.id} className="ReS"> <RestaurantCard
                            resData={res.info}
                        /></Link>
                       
                    ))
                }
            </div>
        </div>
    )
};
export default Body;