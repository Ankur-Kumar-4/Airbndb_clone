// Retrieve the JSON string from local storage
const jsonString = localStorage.getItem("inputValues");

// Convert the JSON string back to an object
const myObject = JSON.parse(jsonString);

// Now, myObject contains the object that was saved in local storage
console.log(myObject);

let location = myObject.location;
let checkIn = myObject.checkIn;
let checkOut = myObject.checkOut;
let adults = myObject.adults;
let children = myObject.children;
let infants = myObject.infants;
let pets = myObject.pets;

var data = {};

const url = `https://airbnb13.p.rapidapi.com/search-location?location=${location}&checkin=${checkIn}&checkout=${checkOut}&adults=${adults}&children=${children}&infants=${infants}&pets=${pets}&page=1&currency=USD`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b12e290677mshb57cd20d3c60400p12c2e1jsnd85322ab66e5",
    "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
  },
};
let ekhibar = 0;

try {
  async function callAirBnb() {
    ekhibar = 1;
    console.log("ooh la la le lo, oo laa le lo");
    const response = await fetch(url, options);
    const result = await response.json();
    data = result;
    renderCount(data);
    console.log(result);
  }
  if (ekhibar == 0) {
    console.log("main hun zinda shayad");
    callAirBnb();
  }
} catch (error) {
  console.error(error);
}

const map = document.getElementById("map");

const placeName = (document.getElementById("placeName").innerHTML = location);

const duration = (document.getElementById("duration").innerHTML = checkIn);

const guestsNo = (document.getElementById("guestsNo").innerHTML =
  parseInt(adults) + parseInt(children) + parseInt(infants) + parseInt(pets));

const listingContainer = document.getElementById("listingContainer");

function displayListing(i, itemData) {
  const hr = document.createElement("hr");
  const listing = document.createElement("div");
  listing.className = "listing_item";

  listing.innerHTML = `
        
  <img class="listing_image" src="${getFirstImage(itemData)}" alt="" />

  <div class="listing_info">
    <div>
      <div class="detail">Entire home in ${itemData.city}</div>
      <div class="plotName">${itemData.name}</div>
    </div>
    <div class="detail">
      4-6 guests · Entire Home · ${itemData.bedrooms} beds · ${
    itemData.bathrooms
  } bath<br />
      Wifi · Kitchen · Free Parking
    </div>
    <div class="list_footer">
      <div>
        ${itemData.rating} <img src="assets/star (1).svg" alt="" />
        <span class="footerInfo"> (${itemData.reviewsCount} reviews)</span>
      </div>
      <div class="price">
        $${itemData.price.rate} <span class="footerInfo">/night</span>
      </div>
    </div>
  </div>
    
    `;

  listingContainer.appendChild(listing);
  listingContainer.appendChild(hr);
}

function renderCount(data) {
  if (!data) {
    console.log("No data");
    return;
  }
  console.log("there is data", data);
  for (let i = 0; i < data.results.length; i++) {
    if (data.results[i] && data.results[i].city) {
      displayListing(i, data.results[i]);
    } else {
      console.log("Data for index " + i + " is missing or incomplete.");
    }
  }
}
function getFirstImage(itemData) {
  if (itemData && itemData.images && itemData.images.length > 0) {
    return itemData.images[0];
  }
  // Return a placeholder image URL or an empty string if no images are available.
  return "placeholder_image_url.jpg";
}
// function renderMap() {
//     let mapContainer = document.createElement("div");
//     mapContainer.className="map";
//     mapContainer.innerHTML=`
//     <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="100%" height="100%" frameborder="0" style="border:0"></iframe>

//     `
//     map.appendChild(mapContainer);

// };
// renderMap();

// let map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: { lat: 35.856737, lng: 10.606619 },
//       zoom: 15,
//     });

//     const markers = [
//     { position: { lat: 35.856737, lng: 10.606619 }, title: 'Marker 1' },
//     { position: { lat: 35.860000, lng: 10.610000 }, title: 'Marker 2' },
//     // Add more markers as needed
//   ];

//   markers.forEach(markerInfo => {
//     new google.maps.Marker({
//       position: markerInfo.position,
//       map: map,
//       title: markerInfo.title,
//     });
// });
// }
// initMap()
