import { CON_URL } from "../utils/contants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const imgUrl = `${CON_URL+resData.cloudinaryImageId}`;
    return(
        <div className="res-card" 
        // style={{
        //     backgroundColor:"#f0f0f0"
        // }}
        >
            
            <img src={imgUrl} className="res-logo"/>
            <h2 className="restitle">{resData.name}</h2>
            <h4 className="cuisines">{resData.cuisines.join(", ")}</h4>
            <h4 className="resrating">{resData.avgRating}</h4>
            <h4 className="resDelivery">{resData.sla.deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;