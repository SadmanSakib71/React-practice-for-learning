const PlaceTree = ({ place }) => {
  const childPlaces = place.childPlaces;

  return (
    <li>
      <p>{place.title}</p>

      {childPlaces.length > 0 && (
        <ol className="list-decimal pl-6">
          {childPlaces.map((child) => (
            <PlaceTree key={child.id} place={child} />
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlaceTree;
