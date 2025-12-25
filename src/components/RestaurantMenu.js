import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU } from "../utils/contants";
const restaurantMenu=()=>{
    const [menu,setMenu]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[resId])
    const fetchMenu=async()=>{
        const data = await fetch(MENU+resId);
        const json = await data.json();
        console.log(json);
        setMenu(json);
        
    }
    if(menu===null) return <Shimmer/>;
    const resInfo = menu?.data?.cards[2]?.card?.card?.info || menu?.data?.cards[0]?.card?.card?.info;

    const { name, cuisines, costForTwoMessage } = resInfo || {};
    const categories=menu?.data?.cards.find(x=>x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const itemCategory = categories?.find(x=>x.card?.card?.itemCards);
    const itemCards=itemCategory?.card?.card?.itemCards||[];
    return (
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - Rs. {item.card.info.price/100||item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default restaurantMenu;