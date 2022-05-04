import { useContext, useMemo } from "react";
import { LocationsContext } from "../../context/Locations";

export const LocationList = () => {
  const {filteredLocations, getLocation} = useContext(LocationsContext);

  const selectedLocation = useMemo(() => {
    return getLocation(2);
  }, [getLocation])

  return (
    <div>
      <ul>
        {filteredLocations.map((location) => (
          <div key={location.id}>{location.name}</div>
        ))}
      </ul>

      Selected location: {selectedLocation?.name}
    </div>
  );
};

export default LocationList;
