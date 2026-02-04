const PlaceTree = ({ id, normPlaces, onComplete, parentId }) => {
  const place = normPlaces[id];

  const childPlacesIds = place.childPlaceIds;

  return (
    <li className="mt-2">
      {place.title}{" "}
      <button
        className="border ml-2 px-1 cursor-pointer"
        onClick={() => onComplete(parentId, id)}
      >
        Complete
      </button>
      {childPlacesIds.length > 0 && (
        <ol className="list-decimal pl-6 mt-2">
          {childPlacesIds.map((childId) => (
            <PlaceTree
              key={childId}
              id={childId}
              normPlaces={normPlaces}
              onComplete={onComplete}
              parentId={id}
            />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
