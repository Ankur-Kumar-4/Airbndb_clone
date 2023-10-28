
const dropDown = document.getElementById("dropDown");

const displayDropdownBtn = document.getElementById("display_dropdown");

const searchButton = document.getElementById("searchBtn");

/// search params  ///
const location_input = document.getElementById("location");
const checkinDate = document.getElementById("ckeckin");
const checkoutDate = document.getElementById("checkout");

const adults_guests = document.getElementById("adults_guests");
const children_guests = document.getElementById("children_guests");
const infants_guests = document.getElementById("infants_guests");
const pet_guests = document.getElementById("pet_guests");

displayDropdownBtn.addEventListener("click", () => {
  dropDown.classList.toggle("hide_dropdown");
});

document.addEventListener("scroll", () => {
  dropDown.classList.add("hide_dropdown");
});




searchButton.addEventListener("click", () => {
   
    const inputValues = {
      location: location_input.value,
      checkIn: checkinDate.value,
      checkOut: checkoutDate.value,
      adults: adults_guests.value,
      children: children_guests.value,
      infants: infants_guests.value,
      pets: pet_guests.value,
    };

    const jsonString = JSON.stringify(inputValues);

    // Save the JSON string to local storage
    localStorage.setItem("inputValues", jsonString);


  dropDown.classList.add("hide_dropdown");

  window.location.href = "StandardSearch.html";
  
});

