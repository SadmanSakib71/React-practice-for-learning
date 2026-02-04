import { useState } from "react";
import { normalizedTravelPlan } from "../data/placesNormalized";
import PlaceTree from "./PlaceTree";

const Travel = () => {
  const [normPlaces, setNormPlaces] = useState(normalizedTravelPlan);
  const root = normPlaces[0];
  const planetIds = root.childPlaceIds;

  return (
    <div>
      <h1>Place to visit</h1>
      <ol className="list-decimal pl-6">
        {planetIds.map((planetId) => (
          <PlaceTree key={planetId} id={planetId} normPlaces={normPlaces} />
        ))}
      </ol>
    </div>
  );
};

export default Travel;
