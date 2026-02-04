import { useState } from "react";
import { normalizedTravelPlan } from "../data/placesNormalized";
import PlaceTree from "./PlaceTree";

const Travel = () => {
  const [normPlaces, setNormPlaces] = useState(normalizedTravelPlan);
  const root = normPlaces[0];
  const planetIds = root.childPlaceIds;

  function handleComplete(parentId, childId) {
    const parent = normPlaces[parentId];
    console.log(parent);

    // const nextNormPlaces = {
    //   ...parent,
    //   childIds: parent.childPlaceIds.filter((id) => id !== childId),
    // };

    const nextNormPlaces = {
      ...parent,
      childPlaceIds: parent.childPlaceIds.filter((id) => id !== childId),
    };

    console.log(nextNormPlaces);

    setNormPlaces({
      ...normPlaces,
      [parentId]: nextNormPlaces,
    });

    console.log(normPlaces);
  }

  return (
    <div>
      <h1>Place to visit</h1>
      <ol className="list-decimal pl-6">
        {planetIds.map((planetId) => (
          <PlaceTree
            key={planetId}
            id={planetId}
            normPlaces={normPlaces}
            onComplete={handleComplete}
            parentId={0}
          />
        ))}
      </ol>
    </div>
  );
};

export default Travel;
