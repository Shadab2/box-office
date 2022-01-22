import React from "react";
import NOT_FOUND from "../../image/not-found.png";
import { Link } from "react-router-dom";
import { StyledShowCard } from "./StyledShowCard";

const ShowCard = ({ show }) => {
  const { id, image, name, summary } = show;
  const imageToDisplay = image ? image.medium : NOT_FOUND;
  const summaryAsText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}...`
    : "No description";

  return (
    <StyledShowCard>
      <div className="img-wrapper">
        <img src={imageToDisplay} alt="show" />
      </div>

      <h1>{name}</h1>

      <p>{summaryAsText}</p>

      <div className="btns">
        <Link to={`/show/${id}`}>Read more</Link>
        <button type="button">Star me</button>
      </div>
    </StyledShowCard>
  );
};

export default ShowCard;
