import { createContext, useState } from "react";

// @ts-ignore
export const LocationsContext = createContext();

export const LocationsHook = (props) => {
  const [locations, setLocations] = useState(props.locations);

  return {
    locations,
    setLocations
  };
};

//
// const filterdLocations = useMemo(() => {
//   return locations.sort((prev, current) => (prev.id > current.id ? -1 : 1));
// }, [locations]);
