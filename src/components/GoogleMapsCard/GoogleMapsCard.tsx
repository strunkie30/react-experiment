import { useEffect, useRef } from "react";

export const GoogleMapsCard = () => {
  const $map = useRef();

  useEffect(() => {
    console.log($map.current);
  }, [$map]);

  return (
    <div ref={$map} className="googleMapsCard">
      hier een map
    </div>
  );
};

export default GoogleMapsCard;
