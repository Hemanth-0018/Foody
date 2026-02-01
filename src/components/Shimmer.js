const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 mt-10">
      {/* Create 15 fake cards */}
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-64 h-80 p-4 border border-gray-100 rounded-2xl shadow-sm bg-white">
            
            {/* 1. Fake Image Area */}
            <div className="bg-gray-200 h-40 w-full rounded-xl animate-pulse"></div>
            
            {/* 2. Fake Title */}
            <div className="mt-5 h-5 w-3/4 bg-gray-200 rounded-md animate-pulse"></div>
            
            {/* 3. Fake Rating & Time */}
            <div className="mt-4 flex items-center gap-2">
              <div className="h-4 w-10 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-4 w-20 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            
            {/* 4. Fake Cuisine Text */}
            <div className="mt-4 h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
            
          </div>
        ))}
    </div>
  );
};

export default Shimmer;