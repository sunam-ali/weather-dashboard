import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { weatherData, loading, error } = useWeather();
  return (
    <WeatherContext value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext>
  );
};
export default WeatherProvider;
