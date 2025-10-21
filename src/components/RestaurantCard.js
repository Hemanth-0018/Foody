import { CON_URL } from "../utils/contants";
import resObj from "../utils/mockData";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const imgUrl = `${CON_URL+resData.cloudinaryImageId}`;
    return(
        <div className="res-card" style={{
            backgroundColor:"#f0f0f0"
        }}>
            
            <img src={imgUrl}/>
            <h2>{resData.name}</h2>
            <h4>{resData.cuisines.join(", ")}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.sla.deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;