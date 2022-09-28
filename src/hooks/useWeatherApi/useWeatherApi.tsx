import { useState, useEffect } from "react";
import axios from "axios";
const API_KEY = "3eac06b0d1f41a3e979009c22efe985e";

interface WeatherProps {
  lat: string;
  lon: string;
}

function useWeatherApi(datas: WeatherProps) {
  const [data, setData] = useState(datas);

  const lat = data.lat;
  const lon = data.lon;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  const callWeatherApi = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("in");
    callWeatherApi();
  }, []);
  return;
}
export default useWeatherApi;
