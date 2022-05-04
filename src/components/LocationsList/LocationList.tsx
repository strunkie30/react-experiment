import { useContext } from "react";
import { LocationsContext } from "../../context/Locations";

export const LocationList = () => {
  const locations = useContext(LocationsContext);

  return (
    <div>
      <ul>
        {locations.locations.map((location) => (
          <div key={location.id}>{location.name}</div>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
