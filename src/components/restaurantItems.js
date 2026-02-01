import ItemList from "./Itemscards";
const RestaurantItems = ({ data, showItems, setShowIndex }) => {

    return (
        <div className="w-6/12 mx-auto my-2">
            {/* Accordion Header Container */}
            <div className="bg-white shadow-md p-4 rounded-lg border border-gray-100">
                <div 
                    className="flex justify-between items-center cursor-pointer select-none" 
                    onClick={setShowIndex} // Use the function passed from Parent
                >
                    <span className="font-bold text-lg text-gray-700">
                        {data?.title} ({data?.itemCards?.length})
                    </span>
                    <span className={`transition-transform duration-300 ${showItems ? "rotate-180" : ""}`}>
                        ▼
                    </span>
                </div>

                {/* Accordion Body: Conditional rendering based on Parent's prop */}
                {showItems && (
                    <div className="mt-4 border-t border-gray-50">
                        <ItemList items={data?.itemCards} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantItems;