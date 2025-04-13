// Function to calculate and display the visit message using localStorage
function displayVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    let message = '';

    if (!lastVisit) {
        message = 'Welcome! Let us know if you have any questions.';
    } else {
        const timeDifference = now - lastVisit;
        const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
        
        if (daysDifference < 1) {
            message = 'Back so soon! Awesome!';
        } else {
            message = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
        }
    }

    document.querySelector('.visit-tab').textContent = message;
    localStorage.setItem('lastVisit', now);
}

// Fetch the JSON data and populate the cards
function loadItems() {
    fetch('data/discover.json')
        .then(response => response.json())
        .then(data => {
            const discoverGrid = document.getElementById('discoverGrid');
            data.places.forEach(place => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <h2>${place.name}</h2>
                    <figure>
                        <img src="${place.imageURL}" alt="${place.name}">
                    </figure>
                    <address>${place.address}</address>
                    <p>${place.description}</p>
                    <button>Learn More</button>
                `;
                discoverGrid.appendChild(card);
            });
        });
}

document.addEventListener('DOMContentLoaded', () => {
    displayVisitMessage();
    loadItems();
});