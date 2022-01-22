import React from "react";
import ShowCard from "./ShowCard";
import { FlexGrid } from "../Styled";

function ShowGrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard key={show.id} show={show} />
      ))}
    </FlexGrid>
  );
}

export default ShowGrid;
