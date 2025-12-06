const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* Create 10-15 fake cards */}
      {Array(15).fill("").map((e, index) => (
        <div key={index} className="shimmer-card">
          {/* 1. Fake Image */}
          <div className="shimmer-img stroke animate"></div>
          
          {/* 2. Fake Title */}
          <div className="shimmer-line title stroke animate"></div>
          
          {/* 3. Fake Cuisine Text */}
          <div className="shimmer-line subtitle stroke animate"></div>
          
          {/* 4. Fake Rating/Time Text */}
          <div className="shimmer-line subtitle stroke animate"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;