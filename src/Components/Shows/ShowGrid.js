import React from "react";
import ShowCard from "./ShowCard";

function ShowGrid({ data }) {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </div>
  );
}

export default ShowGrid;
