import React, { useState } from "react";
import "./DislikeBtn.css";

const DislikeBtn = (props) => {
  const [color, setColor] = useState(false);

  function handleClick() {
    props.setDislikeStatus(!props.dislikeStatus);
    if (props.likeStatus) {
      props.setLikeStatus(false);
    }
    if (color === "") {
      setColor("dislikeBtn");
    } else if (color === "dislikeBtn") {
      setColor("");
    }
  }

  return (
    <div>
      <button className="btn btn-primary" id={color} onClick={handleClick}>
        {props.dislikeStatus ? "DISLIKED!!!" : "Dislike?"}
      </button>
    </div>
  );
};

export default DislikeBtn;
