import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import ShimmerUi from "./Shimmer";
const Body=()=>{

    //Local State Variable - Super powerful variable
    const [listOfRes,setListOfRes]=useState();
    const [filteredres,setFilteredres]=useState();
    const [searchTxt,setSearchTxt]=useState("");

    //Normal Js variable
    //intro of useEffect hook 
    //after rendering the body component call useEffect 
    useEffect(()=>{
       fetchedData();
    },[])
    const fetchedData=async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.7072867&lng=83.30009470000002&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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
                        <RestaurantCard
                            key={res.info.id}
                            resData={res.info}
                        />
                    ))
                }
            </div>
        </div>
    )
};
export default Body;