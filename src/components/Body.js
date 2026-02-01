import RestaurantCard,{willCardPromoted} from "./RestaurantCard";
import { Link } from "react-router-dom";
import {useContext, useState} from "react";
import ShimmerUi from "./Shimmer";
import usefetchData from "../utils/usefetchData";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
const Body=()=>{

    //Local State Variable - Super powerful variable
    const {listOfRes,filteredres,setFilteredres}=usefetchData();
    const [searchTxt, setSearchTxt] = useState("");
    const RestaurantCardPromoted = willCardPromoted(RestaurantCard);
    const ratings = listOfRes.map(res => res.info.avgRating);
    const averageRating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;
    const isOnline=useOnline();
    const {loggedInUser,setUserName}=useContext(UserContext);
    if(!isOnline){
        return <div><h2 className="offline-title">No Internet Connection</h2>
                <p className="offline-message">
                    We can't detect a network connection. Please check your internet settings and try again.
                </p></div>
    }
    return (listOfRes.length===0)? <ShimmerUi/>:(
        <div className="body">
            <div className="flex gap-3 pt-4 pl-6">
                <div className="flex items-center bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 focus-within:border-indigo-400 focus-within:ring-1 focus-within:ring-indigo-100 overflow-hidden w-full max-w-md">
  
  {/* Input Field */}
  <input
    type="text"
    placeholder="Search for restaurants..."
    value={searchTxt}
    onChange={(e) => setSearchTxt(e.target.value)}
    className="flex-grow px-5 py-2.5 text-gray-700 bg-transparent outline-none placeholder-gray-400 text-sm dark:bg-gray-700 text-gray-400 border-0 border-gray-700"
  />

  {/* Search Button */}
                <button
                    onClick={() => {
                    const filteringres = listOfRes.filter((res) =>
                        res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
                    );
                    setFilteredres(filteringres);
                    }}
                    className="bg-amber-500 text-white px-6 py-2.5 font-semibold text-sm transition-all hover:bg-amber-700 active:scale-95 flex items-center gap-2 dark:text-gray-700"
                >
                    <i className="fa-solid fa-magnifying-glass"></i>
                    Search
                </button>
                </div>
                <button className=" bg-amber-400 font-semibold hover: bg-amber-700 text-amber-50 rounded-2xl p-1" 
                onClick={()=>{
                    const filteredList=listOfRes.filter(
                        (res)=>res.info.avgRating >4.2
                    );
                    setFilteredres(filteredList);
                }
                }
                >Top Rated Restaurant</button>
                <div>
                <label >Username:</label>
                <input className="border-amber-50" type="text" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
            </div>
            
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
               
                {
                    filteredres?.map((res)=>(
                        <Link to={"restaurant/" + res.info.id} key={res.info.id}>
                            {/* 3. Logical Check: Use Promoted version if rating > average */}
                            {res.info.avgRating > averageRating ? (
                                <RestaurantCardPromoted resData={res.info} />
                            ) : (
                                <RestaurantCard resData={res.info} />
                            )}
                        </Link>
                       
                    ))
                }
                
            </div>
            
        </div>
    )
};
export default Body;