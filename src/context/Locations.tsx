import { createContext, useCallback, useMemo, useState } from "react";

export type LocationContextType = {
  locations: any[],
  setLocations: (...args: any) => void,
  filteredLocations: any[],
  getLocation: (...args: any) => void,
}

export const LocationsContext = createContext<LocationContextType>({} as LocationContextType);

export const LocationsHook = () => {
  const [locations, setLocations] = useState([]);

  const filteredLocations = useMemo(() => {
    return locations.sort((prev, current) => (prev.id > current.id ? -1 : 1));
  }, [locations]);

  const getLocation = useCallback((id) => {
    return locations.find((location) => location.id === id);
  }, [locations]);

  return {
    locations,
    setLocations,
    filteredLocations,
    getLocation,
  };
};
