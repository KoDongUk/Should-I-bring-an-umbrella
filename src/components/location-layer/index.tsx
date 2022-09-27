import { useState, useEffect } from "react";
import UseGeolocation from "../../hooks/useGeolocation/useGeolocation";

function LocationLayer() {
  const location = UseGeolocation();

  location.loaded === true ? console.log(location) : null;
  return <div></div>;
}
export default LocationLayer;
