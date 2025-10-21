import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
               
                {
                    resObj.map((res)=>(
                        <RestaurantCard
                            key={res.info.id}
                            resData={res.info}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;