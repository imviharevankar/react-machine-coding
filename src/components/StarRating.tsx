import { useState } from "react";

const StarRating = () => {
  const starCount = 5;
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <>
      <p className="text-3xl text-center">Star Rating</p>
      {[...Array(starCount)].map((_, index) => {
        const isSelected = index < selectedStars;

        return (
          <span
            key={index.toString()}
            onMouseLeave={() => setSelectedStars(index === 0 ? 0 : index + 1)}
            onMouseEnter={() => setSelectedStars(index + 1)}
            style={{ cursor: "pointer", fontSize: "24px" }}
          >
            {isSelected ? "⭐" : "☆"}
          </span>
        );
      })}

      {selectedStars > 0 && <p>Your rating is :{selectedStars}</p>}
    </>
  );
};

export default StarRating;
