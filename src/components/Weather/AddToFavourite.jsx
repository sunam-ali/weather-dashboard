import { useContext, useEffect, useState } from "react";
import HeartIconRed from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { FavouriteContext } from "../../context";

export default function AddToFavourite({ weatherData }) {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const [isFavourite, setIsFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  }, []);

  function handleFavourite() {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#c5c5c5] cursor-pointer"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? HeartIconRed : HeartIcon} alt="heart-icon" />
        </button>
      </div>
    </div>
  );
}
