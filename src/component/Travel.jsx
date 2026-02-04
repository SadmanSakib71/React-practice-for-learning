import { useState } from "react";
import { initialTravelPlan } from "../data/places";
import PlaceTree from "./PlaceTree";

const Travel = () => {
  const [places, setPlaces] = useState(initialTravelPlan);
  const plants = places.childPlaces;

  return (
    <div>
      <h1>Place to visit</h1>
      <ol className="list-decimal pl-6">
        {plants.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </div>
  );
};

export default Travel;
