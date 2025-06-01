import Page from "./page";
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
