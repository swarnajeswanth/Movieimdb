import React, { useState } from "react";
import Star from "./Star";

export default function Rating({ max_star, addMovieHandler }) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(1);
  function handleRating(rating) {
    setRating(rating);
  }
  return (
    <div id="main_Container">
      <span id="rating_Component">
        <div id="star">
          {Array.from({ length: `${max_star}` }, (_, i) => (
            <Star
              key={i}
              onRate={() => handleRating(i + 1)}
              full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
              stroke="rgb(252, 188, 23)"
              width="20px"
              height="21px"
              fill="#24292c"
              onHoverIn={() => setTempRating(i + 1)}
              onHoverOut={() => setTempRating(0)}
            />
          ))}
        </div>
        <p>{tempRating || rating || ""}</p>
      </span>
      <button id="list_add" onClick={addMovieHandler}>
        + Add to List
      </button>
    </div>
  );
}
