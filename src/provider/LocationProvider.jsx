import { useState } from "react";
import { LocationContext } from "../context";

const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });
  return (
    <LocationContext value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext>
  );
};
export default LocationProvider;
