// Popular Card data:
const places = [
    { title: "Beach", location: "Goa, India", imgSrc: "/Photos/Goa Beach.png" },
    { title: "Tajmahal", location: "Agra, India", imgSrc: "/Photos/Tajmahal.png" },
    { title: "Jaisalmer Fort", location: "jaisalmer, India", imgSrc: "/Photos/jaisalmer.png" },
    { title: "Kashmir", location: "Kashmir, India", imgSrc: "/Photos/Kashmir.png" },
    { title: "Kedarnath", location: "Kedarnath Dham, India", imgSrc: "/Photos/Kedarnath.jpg" },
];

const popularPlaceCard = document.querySelector(".popular-place-card");

// Generate the cards
places.forEach(place => {
    // Create card element 
    const card = document.createElement("div");
    card.classList.add("card");

    // Create a badge for the discount
    const badge = document.createElement("div");
    badge.classList.add("discount-badge");
    badge.textContent = "25% OFF";

    card.appendChild(badge);

    // Create card image container
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-img");

    // Create and append image
    const img = document.createElement("img");
    img.src = place.imgSrc;
    img.alt = place.title;
    cardImg.appendChild(img);

    // Create card info container
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    // Create and append card title
    const title = document.createElement("h4");
    title.textContent = place.title;

    // Create and append location icon and text
    const locationInfo = document.createElement("p");
    locationInfo.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${place.location}`;

    // Append title and location to card info
    cardInfo.appendChild(title);
    cardInfo.appendChild(locationInfo);

    // Append image and info to card
    card.appendChild(cardImg);
    card.appendChild(cardInfo);

    // Append card to the container
    popularPlaceCard.appendChild(card);
});
