const data = [
  { location: "New York", country: "USA", latitude: 40.7128, longitude: -74.0060 },
  { location: "London", country: "UK", latitude: 51.5074, longitude: -0.1278 },
  { location: "Paris", country: "France", latitude: 48.8566, longitude: 2.3522 },
  { location: "Tokyo", country: "Japan", latitude: 35.6895, longitude: 139.6917 },
  { location: "Sydney", country: "Australia", latitude: -33.8688, longitude: 151.2093 },
  { location: "Cairo", country: "Egypt", latitude: 30.0444, longitude: 31.2357 },
  { location: "Rio de Janeiro", country: "Brazil", latitude: -22.9068, longitude: -43.1729 },
  { location: "Moscow", country: "Russia", latitude: 55.7558, longitude: 37.6173 },
  { location: "Toronto", country: "Canada", latitude: 43.6510, longitude: -79.3470 },
  { location: "Beijing", country: "China", latitude: 39.9042, longitude: 116.4074 },
  { location: "Dubai", country: "UAE", latitude: 25.2048, longitude: 55.2708 },
  { location: "Mumbai", country: "India", latitude: 19.0760, longitude: 72.8777 },
  { location: "Berlin", country: "Germany", latitude: 52.5200, longitude: 13.4050 },
  { location: "Rome", country: "Italy", latitude: 41.9028, longitude: 12.4964 },
  { location: "Seoul", country: "South Korea", latitude: 37.5665, longitude: 126.9780 },
  { location: "Bangkok", country: "Thailand", latitude: 13.7563, longitude: 100.5018 },
  { location: "Lagos", country: "Nigeria", latitude: 6.5244, longitude: 3.3792 },
  { location: "Johannesburg", country: "South Africa", latitude: -26.2041, longitude: 28.0473 },
  { location: "Buenos Aires", country: "Argentina", latitude: -34.6037, longitude: -58.3816 },
  { location: "Istanbul", country: "Turkey", latitude: 41.0082, longitude: 28.9784 },
  { location: "Los Angeles", country: "USA", latitude: 34.0522, longitude: -118.2437 },
  { location: "Singapore", country: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { location: "Madrid", country: "Spain", latitude: 40.4168, longitude: -3.7038 },
  { location: "Amsterdam", country: "Netherlands", latitude: 52.3676, longitude: 4.9041 },
  { location: "Lima", country: "Peru", latitude: -12.0464, longitude: -77.0428 },
  { location: "Tehran", country: "Iran", latitude: 35.6892, longitude: 51.3890 },
  { location: "Baghdad", country: "Iraq", latitude: 33.3152, longitude: 44.3661 },
  { location: "Nairobi", country: "Kenya", latitude: -1.2921, longitude: 36.8219 },
  { location: "Karachi", country: "Pakistan", latitude: 24.8607, longitude: 67.0011 },
  { location: "Dhaka", country: "Bangladesh", latitude: 23.80373004684331, longitude: 90.41364764308437 },
  { location: "Kolkata", country: "India", latitude: 22.5726, longitude: 88.3639 },
  { location: "Hong Kong", country: "China", latitude: 22.3193, longitude: 114.1694 },
  { location: "Shanghai", country: "China", latitude: 31.2304, longitude: 121.4737 },
  { location: "San Francisco", country: "USA", latitude: 37.7749, longitude: -122.4194 },
  { location: "Chicago", country: "USA", latitude: 41.8781, longitude: -87.6298 },
  { location: "Barcelona", country: "Spain", latitude: 41.3851, longitude: 2.1734 },
  { location: "Athens", country: "Greece", latitude: 37.9838, longitude: 23.7275 },
  { location: "Vienna", country: "Austria", latitude: 48.2082, longitude: 16.3738 },
  { location: "Venice", country: "Italy", latitude: 45.4408, longitude: 12.3155 },
  { location: "Jerusalem", country: "Israel", latitude: 31.7683, longitude: 35.2137 },
  { location: "Mecca", country: "Saudi Arabia", latitude: 21.3891, longitude: 39.8579 },
  { location: "Osaka", country: "Japan", latitude: 34.6937, longitude: 135.5023 },
  { location: "Santiago", country: "Chile", latitude: -33.4489, longitude: -70.6693 },
  { location: "Hanoi", country: "Vietnam", latitude: 21.0278, longitude: 105.8342 },
  { location: "Manila", country: "Philippines", latitude: 14.5995, longitude: 120.9842 },
  { location: "Kuala Lumpur", country: "Malaysia", latitude: 3.1390, longitude: 101.6869 },
  { location: "Jakarta", country: "Indonesia", latitude: -6.2088, longitude: 106.8456 },
  { location: "Mexico City", country: "Mexico", latitude: 19.4326, longitude: -99.1332 },
  { location: "Cape Town", country: "South Africa", latitude: -33.9249, longitude: 18.4241 },
  { location: "Casablanca", country: "Morocco", latitude: 33.5731, longitude: -7.5898 },
  { location: "Havana", country: "Cuba", latitude: 23.1136, longitude: -82.3666 },
  { location: "Lisbon", country: "Portugal", latitude: 38.7169, longitude: -9.1399 },
  { location: "Delhi", country: "India", latitude: 28.6139, longitude: 77.2090 },
];

function getLocations() {
  return data;
}

function getLocationByName(locationName) {
  if (!locationName) return null;
  const filtered = data.filter((item) => item.location.toLocaleLowerCase() === locationName.toLocaleLowerCase());
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    }
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };

