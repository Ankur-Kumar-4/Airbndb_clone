// const url =
//   "https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-11-16&checkout=2023-11-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b12e290677mshb57cd20d3c60400p12c2e1jsnd85322ab66e5",
//     "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
//   },
// };
// let ekhibar = 0;
// console.log("main hun zinda shayad");
// try {
//   async function callAirBnb() {
//     ekhibar = 1;
//     console.log("ooh la la le lo, oo laa le lo");
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   }
//   if (ekhibar == 0) {
//     console.log("main hun zinda shayad");
//     callAirBnb();
//   }
// } catch (error) {
//   console.error(error);
// }



// Retrieve the JSON string from local storage
const jsonString = localStorage.getItem("inputValues");

// Convert the JSON string back to an object
const myObject = JSON.parse(jsonString);

// Now, myObject contains the object that was saved in local storage
console.log(myObject);

const placeName = document.getElementById("placeName").innerHTML = myObject.location;

const duration = document.getElementById("duration").innerHTML = myObject.checkIn;

const guestsNo = document.getElementById("guestsNo").innerHTML = parseInt(myObject.children) +parseInt(myObject.infants) + parseInt(myObject.pets)+parseInt(myObject.adults);