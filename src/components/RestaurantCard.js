import { CON_URL } from "../utils/contants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData;

    return (
        <div className="m-4 flex flex-col gap-2 w-64 h-[22rem] p-4 rounded-2xl transition-all duration-300
                        bg-white dark:bg-slate-800 
                        shadow-lg dark:shadow-none 
                        border border-transparent dark:border-slate-700
                        hover:scale-[1.02] cursor-pointer">
            
            {/* Image */}
            <img 
                src={CON_URL + cloudinaryImageId} 
                className="h-40 w-full rounded-xl object-cover" 
                alt={name}
            />

            {/* Restaurant Name */}
            <h2 className="font-bold text-lg truncate antialiased text-gray-800 dark:text-gray-100">
                {name}
            </h2>

            {/* Rating and Time */}
            <div className="flex items-center gap-4">
                <h4 className="text-xs font-bold w-12 bg-green-600 dark:bg-green-500 text-white rounded-md flex justify-center items-center gap-1 py-1">
                    <i className="fa-solid fa-star text-[10px]"></i> 
                    {avgRating}
                </h4>
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                    {sla?.deliveryTime} mins
                </h4>
            </div>
            
            {/* Cuisines */}
            <h4 className="text-sm text-gray-500 dark:text-gray-400 truncate italic">
                {cuisines.join(", ")}
            </h4>
            
            {/* Cost */}
            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300">
                {costForTwo}
            </h4>
            
        </div>
    );
};
export const willCardPromoted=(RestaurantCard)=>{
    return(props)=>{
        return(
        <div className="relative group overflow-visible">
                <label className=" absolute top-2 left-2 z-30 text-white font-bold text-[10px] uppercase py-1 px-2 rounded-sm shadow-lg transition-all duration-300 group-hover:scale-110 bg-gradient-to-r from-black via-gray-700 to-black bg-[length:200%_auto] animate-gradient-sweep">
                    PROMOTED
                </label>
                <RestaurantCard {...props} />
        </div>)
    }
}
export default RestaurantCard;