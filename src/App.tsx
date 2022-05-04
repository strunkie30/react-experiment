import { useEffect, useMemo, useState } from "react";
import Card from "./components/Card/Card";
import GoogleMapsCard from "./components/GoogleMapsCard/GoogleMapsCard";
import LocationList from "./components/LocationsList/LocationList";
import { Transition } from "./components/Transition/Transition";
import { LocationsContext, LocationsHook } from "./context/Locations";
import "./styles.css";

export default function App() {
  const locationHook = LocationsHook();

  // // fires once
  useEffect(() => {
    locationHook.setLocations([
      { id: 1, location: { lat: 0, lng: 0 }, name: "Zwolluh 1" },
      { id: 2, location: { lat: 0, lng: 0 }, name: "Zwolluh 2" }
    ]);
  }, []);

  // fires every update
  useEffect(() => {});

  return (
    <div className="App">
      <LocationsContext.Provider value={locationHook}>
        <LocationList />
        <GoogleMapsCard />
        <Card.Base>
          <Card.Icon iconName="lol" />
        </Card.Base>
        <Transition />
      </LocationsContext.Provider>
    </div>
  );
}
