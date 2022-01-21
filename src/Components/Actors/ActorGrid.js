import React from "react";
import NOT_FOUND from "../../image/not-found.png";
import ActorCard from "./ActorCard";

function ActorGrid({ data }) {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          image={person.image ? person.image.medium : NOT_FOUND}
          gender={person.gender}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
        />
      ))}
    </div>
  );
}

export default ActorGrid;
