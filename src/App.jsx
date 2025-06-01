import Page from "./Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <FavouriteProvider>
      <LocationProvider>
        <WeatherProvider>
          <Page />
        </WeatherProvider>
      </LocationProvider>
    </FavouriteProvider>
  );
}

export default App;
