import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantItems from "./restaurantItems"; 
import { useState } from "react";

const RestaurantMenu = () => { 
    const { resId } = useParams();
    const menu = useRestaurantMenu(resId);
    
    // Controlled State: null means all closed, 0 means first section open
    const [showIndex, setShowIndex] = useState(0); 

    if (menu === null) return <Shimmer />;

    // Extracting the menu categories from the complex API structure
    const groupeditems = menu?.data?.cards?.find(x => x.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const resD = groupeditems?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    
    const itemsCategories = resD?.filter(
        (c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center bg-gray-50 min-h-screen pb-10">
            <h1 className="font-black my-8 text-3xl text-gray-800">Menu</h1>
            
            <div className="flex flex-col items-center">
                {/* FIX: We must MAP over categories to render multiple accordion bars */}
                {itemsCategories?.map((category, index) => (
                    <RestaurantItems 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        // If current index matches showIndex, the accordion is open
                        showItems={index === showIndex}
                        // Toggle logic: if clicked again, it closes (sets to null)
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestaurantMenu;