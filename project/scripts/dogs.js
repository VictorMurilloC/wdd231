// scripts/dogs.js

const dogContainer = document.querySelector("#dog-list");
const modal = document.querySelector("#dog-modal");
const modalContent = document.querySelector("#modal-body");
const closeModal = document.querySelector(".close-button");

// Load dogs from JSON
async function loadDogs() {
  try {
    const response = await fetch("data/dogs.json");
    const dogs = await response.json();
    displayDogs(dogs);
  } catch (error) {
    console.error("Error loading dogs:", error);
    dogContainer.innerHTML = "<p>Could not load dogs at this time.</p>";
  }
}

// Display all dogs in grid
function displayDogs(dogs) {
  dogContainer.innerHTML = "";
  dogs.forEach((dog) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${dog.image}" alt="${dog.name}" loading="lazy">
      <h3>${dog.name}</h3>
      <p>${dog.breed}</p>
    `;
    card.addEventListener("click", () => showDogModal(dog));
    dogContainer.appendChild(card);
  });
}

// Show modal with dog details
function showDogModal(dog) {
  modalContent.innerHTML = `
    <h2>${dog.name}</h2>
    <img src="${dog.image}" alt="${dog.name}" loading="lazy">
    <p><strong>Breed:</strong> ${dog.breed}</p>
    <p><strong>Age:</strong> ${dog.age} years</p>
    <p>${dog.description}</p>
  `;
  modal.style.display = "block";
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// Initialize
loadDogs();
