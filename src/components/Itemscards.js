import { CON_URL } from "../utils/contants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <div 
                    key={item.card.info.id} 
                    className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center group transition-all hover:bg-gray-50"
                >
                    {/* Info Section */}
                    <div className="py-2 w-9/12">
                        <div className="font-bold text-gray-800 text-sm">
                            <span>{item.card.info.name}</span>
                            <span className="ml-1 text-gray-600">
                                - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                            {item.card.info.description}
                        </p>
                    </div>
                    
                    {/* Image & Button Section */}
                    <div className="w-3/12 p-4 relative flex flex-col items-center">
                        {/* Only render img tag if imageId exists */}
                        {item.card.info.imageId && (
                            <img 
                                src={CON_URL + item.card.info.imageId} 
                                className="w-full h-24 object-cover rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
                                alt={item.card.info.name}
                            />
                        )}
                        
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                            <button className="py-1.5 px-6 rounded-lg bg-white text-green-600 border border-gray-200 shadow-md text-xs font-black uppercase tracking-wider hover:bg-gray-50 active:scale-95 transition-all">
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemList;