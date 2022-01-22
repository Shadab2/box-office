import React from "react";
import NOT_FOUND from "../../image/not-found.png";
import { FlexGrid } from "../Styled";
import ActorCard from "./ActorCard";

function ActorGrid({ data }) {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          image={person.image ? person.image.medium : NOT_FOUND}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </FlexGrid>
  );
}

export default ActorGrid;
