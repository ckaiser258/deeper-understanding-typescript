import axios from "axios";

const form = document.querySelector("form");
const addressInput = document.getElementById("address") as HTMLInputElement;

const googleApiKey = process.env.GOOGLE_API_KEY;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

let map: google.maps.Map;
function initMap(coordinates: { lat: number; lng: number }): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: coordinates,
    zoom: 16,
  });
}

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput?.value;

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${googleApiKey}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location");
      }
      const coordinates = res.data.results[0].geometry.location;
      initMap(coordinates);
      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form?.addEventListener("submit", searchAddressHandler);
