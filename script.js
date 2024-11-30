// Popular Card data:
function redirectToHome() {
    window.location.href = "#explore-more";
}
const places = [
  {
    title: "Beach",
    location: "Goa, India",
    imgSrc: "/Photos/Goa Beach.png",
    description: "Visit Goa and enjoy serene beaches with a 25% discount!",
  },
  {
    title: "Tajmahal",
    location: "Agra, India",
    imgSrc: "/Photos/Tajmahal.png",
    description: "Explore the beauty of the Taj Mahal in Agra.",
  },
  {
    title: "Jaisalmer Fort",
    location: "jaisalmer, India",
    imgSrc: "/Photos/jaisalmer.png",
    description: "Discover the golden city of Jaisalmer.",
  },
  {
    title: "Kashmir",
    location: "Kashmir, India",
    imgSrc: "/Photos/Kashmir.png",
    description: "Experience the paradise of Kashmir.",
  },
  {
    title: "Kedarnath",
    location: "Kedarnath Dham, India",
    imgSrc: "/Photos/Kedarnath.jpg",
    description: "Visit the holy Kedarnath Dham.",
  },
];

const popularPlaceCard = document.querySelector(".popular-place-card");

// Generate the cards
places.forEach((place) => {
  // Create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create inner container for flip effect
  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  // Create front side
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");

  const badge = document.createElement("div");
  badge.classList.add("discount-badge");
  badge.textContent = "25% OFF";

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  const img = document.createElement("img");
  img.src = place.imgSrc;
  img.alt = place.title;
  cardImg.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const title = document.createElement("h4");
  title.textContent = place.title;

  const locationInfo = document.createElement("p");
  locationInfo.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${place.location}`;

  cardInfo.appendChild(title);
  cardInfo.appendChild(locationInfo);
  cardFront.appendChild(badge);
  cardFront.appendChild(cardImg);
  cardFront.appendChild(cardInfo);

  // Create back side
  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");

  const description = document.createElement("p");
  description.textContent = place.description;
  cardBack.appendChild(description);

  // Append front and back to inner container
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  // Append inner container to card
  card.appendChild(cardInner);

  // Append card to the container
  popularPlaceCard.appendChild(card);
});

// Scroll Down
const exploreButton = document.getElementById("explore-btn");
const exploreSection = document.getElementById("explore-more");

exploreButton.addEventListener("click", () => {
  exploreSection.scrollIntoView({ behavior: "smooth" });
});

// About Me
document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".about .close-btn");
  const menu = document.querySelector(".about");
  const aboutButton = document.querySelector("#about-me .about-me-btn");

  aboutButton.addEventListener("click", function () {
    menu.style.top = "0%";
    closeButton.style.display = "block"; // Show close button
    aboutButton.style.display = "none"; // Hide menu button
  });

  closeButton.addEventListener("click", function () {
    menu.style.top = "-100%";
    closeButton.style.display = "none"; // Hide close button
    aboutButton.style.display = "block"; // Show menu button
  });
});

const destinations = [
  {
    name: "Amalfi Coast",
    price: "$148/Pax",
    location: "📍 Amalfi, Italy",
    rating: "⭐ 4.9",
    category: "islands",
    img: "https://media.istockphoto.com/id/1051200986/photo/night-view-of-positano-village-at-amalfi-coast-italy.jpg?s=612x612&w=0&k=20&c=8112-37iS6ydYP-AarsnQ8CI2QunYyatJIqrXjS5-m4=",
  },
  {
    name: "Santorini",
    price: "$150/Pax",
    location: "📍 Santorini, Greece",
    rating: "⭐ 4.8",
    category: "islands",
    img: "https://media.istockphoto.com/id/2171299987/photo/high-angle-view-of-town-by-sea.jpg?s=612x612&w=0&k=20&c=dNUe496TmPgaERN1S6OXzazVM_RLLh2tLDPJoQgiupo=",
  },
  {
    name: "Bora Bora",
    price: "$200/Pax",
    location: "📍 Bora Bora, French Polynesia",
    rating: "⭐ 4.9",
    category: "islands",
    img: "https://media.istockphoto.com/id/590153998/photo/bora-bora-tahiti-mt-otemanu.jpg?s=612x612&w=0&k=20&c=Dbc_S1ViJSoUOs6YsCTAZsPr-BAxkZhgRWE0XqUwqwg=",
  },
  {
    name: "Maui",
    price: "$180/Pax",
    location: "📍 Maui, Hawaii",
    rating: "⭐ 4.8",
    category: "islands",
    img: "https://media.istockphoto.com/id/1023073282/photo/paako-beach.jpg?s=612x612&w=0&k=20&c=ihro_m33Tr1rGH5XkLahbHVv7pWamim7f08fXd_oOTQ=",
  },
  {
    name: "Andaman and Nicobar",
    price: "$180/Pax",
    location: "📍 Andaman and Nicobar, India",
    rating: "⭐ 4.9",
    category: "islands",
    img: "https://media.istockphoto.com/id/1028590532/photo/luxury-passenger-cruise-ship-at-andaman-sea-for-tourist-sightseeing.jpg?s=612x612&w=0&k=20&c=4e2RPs2uK3xsVLIg1-mAe1zUEdrgxpl533GLdEpVTn4=",
  },
  {
    name: "Maldives",
    price: "$220/Pax",
    location: "📍 Maldives",
    rating: "⭐ 4.9",
    category: "islands",
    img: "https://media.istockphoto.com/id/1315293744/photo/beautiful-island-scenery-in-maldives.jpg?s=612x612&w=0&k=20&c=B_NH24lrJJw2ESm4jxPMXRNg9SzuaM16N2xM_to03J4=",
  },
  {
    name: "Bali",
    price: "$160/Pax",
    location: "📍 Bali, Indonesia",
    rating: "⭐ 4.8",
    category: "islands",
    img: "https://media.istockphoto.com/id/1581900358/photo/ulun-danu-beratan-temple-in-bali-island-indonesia.jpg?s=612x612&w=0&k=20&c=Gna-3HiCWQ7V-K4MB-GQbe2a9bfCd-SCFWEt_nv7E7k=",
  },
  {
    name: "Fiji",
    price: "$210/Pax",
    location: "📍 Fiji",
    rating: "⭐ 4.9",
    category: "islands",
    img: "https://media.istockphoto.com/id/843135842/photo/fiji-islands.jpg?s=612x612&w=0&k=20&c=R4f8_Y5k8lpTkdvbprF4A_ujsjiq_SJS17I1aA7xaJw=",
  },
  {
    name: "Rajasthan",
    price: "$200/Pax",
    location: "📍 Rajasthan, India",
    rating: "⭐ 4.9",
    category: "historical",
    img: "https://media.istockphoto.com/id/2161698617/photo/woman-looking-at-hawa-mahal-in-jaipur-india-from-balcony.jpg?s=612x612&w=0&k=20&c=UwALAvsiVskNnrYXLNUfGVz4KvERfspb-A679Dq0xRE=",
  },
  {
    name: "Taj Mahal",
    price: "$220/Pax",
    location: "📍 Agra, India",
    rating: "⭐ 5.0",
    category: "historical",
    img: "https://media.istockphoto.com/id/500461348/photo/taj-mahal-in-agra-india.jpg?s=612x612&w=0&k=20&c=lxTRmZcfgMkTuCEnPJDDlBUxDmNW__y-PXzpBGt89nM=",
  },
  {
    name: "Delhi",
    price: "$180/Pax",
    location: "📍 Delhi, India",
    rating: "⭐ 4.8",
    category: "historical",
    img: "https://media.istockphoto.com/id/1287050440/photo/lahori-gate-main-entrance-to-the-red-fort-in-new-delhi-india.jpg?s=612x612&w=0&k=20&c=DLpiJ2yOTDl3XJj8r3KpF7wXNwASN87DNeBPMelStCE=",
  },
  {
    name: "Maharashtra",
    price: "$210/Pax",
    location: "📍 Maharashtra, India",
    rating: "⭐ 4.9",
    category: "historical",
    img: "https://media.istockphoto.com/id/583958532/photo/kailas-temple-in-ellora-caves-complex-in-india.jpg?s=612x612&w=0&k=20&c=kmbUZpgjHlohgIuJNYRrjE0B5WFUFyseSJ3Ld4KyyJg=",
  },
  {
    name: "Mysore",
    price: "$190/Pax",
    location: "📍 Mysore, India",
    rating: "⭐ 4.9",
    category: "historical",
    img: "https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.jpg?s=612x612&w=0&k=20&c=paO74C_dVsY14IbK0RNqs0TD-lSteQy-AW5CnQFEb_4=",
  },
  {
    name: "Cambodia",
    price: "$250/Pax",
    location: "📍 Cambodia",
    rating: "⭐ 4.8",
    category: "historical",
    img: "https://plus.unsplash.com/premium_photo-1661907933652-9f43a2a6031c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FtYm9kaWF8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Egypt",
    price: "$300/Pax",
    location: "📍 Egypt",
    rating: "⭐ 4.9",
    category: "historical",
    img: "https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWd5cHR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Eiffel Tower",
    price: "$230/Pax",
    location: "📍 Paris, France",
    rating: "⭐ 4.9",
    category: "historical",
    img: "https://images.unsplash.com/photo-1667271331041-0454c9f5902e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWZmaWwlMjB0b3dlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ayodhya",
    price: "$120/Pax",
    location: "📍 Ayodhya, India",
    rating: "⭐ 4.8",
    category: "religious",
    img: "https://media.istockphoto.com/id/1324190769/photo/hindu-temple.jpg?s=612x612&w=0&k=20&c=GuJdw58F8Kn2gwsXEDyn1_2905Ch_LbNbILaA3jkeNI=",
  },
  {
    name: "Bodhgaya",
    price: "$130/Pax",
    location: "📍 Bodhgaya, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/530927704/photo/mahabodhi-temple-bodhgaya.webp?a=1&b=1&s=612x612&w=0&k=20&c=nFIUYg_5xpAklKyAUp9QKGte3xiQW7CnisVozxZbBfc=",
  },
  {
    name: "Tirupati",
    price: "$140/Pax",
    location: "📍 Tirupati, India",
    rating: "⭐ 4.8",
    category: "religious",
    img: "https://media.istockphoto.com/id/1074765564/photo/architecture-of-sri-govinda-raja-swamy-temple.jpg?s=612x612&w=0&k=20&c=0DClGQScJValrVuhuF0-KNO2XeeF_G9skaD5yOA-xVQ=",
  },
  {
    name: "Amritsar",
    price: "$150/Pax",
    location: "📍 Amritsar, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/478673422/photo/golden-temple-amritsar.webp?a=1&b=1&s=612x612&w=0&k=20&c=eZKSHaoagHGLFzTVbbryIwgKLBf0VrsRAFT0VLEXiLQ=",
  },
  {
    name: "Varanasi",
    price: "$130/Pax",
    location: "📍 Varanasi, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?s=612x612&w=0&k=20&c=fFpEL17MiQJx5NkkNIVrTsesd2E8b04SCgzjfhUmQ7g=",
  },
  {
    name: "Kedarnath",
    price: "$140/Pax",
    location: "📍 Kedarnath, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/1190682831/photo/kedarnath-dham-uttrakhand.jpg?s=612x612&w=0&k=20&c=_-LRGFzPPmTjeXttP6CZydfEbK_Yxdl0ihcXb_QYEwk=",
  },
  {
    name: "Haridwar",
    price: "$150/Pax",
    location: "📍 Utrakhand, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/1212167865/photo/panoramic-view-of-har-ki-pauri-famous-ghat-on-the-banks-of-the-ganges-in-haridwar-india-stock.jpg?s=612x612&w=0&k=20&c=vUmJfglelluc44WX6ATaIfpXfTAHcH0reJoBPB4Q3Rc=",
  },
  {
    name: "Vrindavan",
    price: "$120/Pax",
    location: "📍 Vrindavan, India",
    rating: "⭐ 4.8",
    category: "religious",
    img: "https://media.istockphoto.com/id/1265054638/photo/prem-mandir-temple-in-vrindavan-mathura-india.jpg?s=612x612&w=0&k=20&c=m6eYEKUv9hIjOEkT6LycY0h00IUhayEcqzZIXjpiDCU=",
  },
  {
    name: "Ujjain",
    price: "$130/Pax",
    location: "📍 Ujjain, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/2176711526/photo/dramatic-idol-of-hindu-holy-god-lord-shiva-sitting-in-mediation-at-outdoor-at-night.jpg?s=612x612&w=0&k=20&c=Ro19IxT90bdCZm26qR8AEOXyEToz6N6za84Jvu9_y5g=",
  },
  {
    name: "Puri",
    price: "$140/Pax",
    location: "📍 Puri, India",
    rating: "⭐ 4.8",
    category: "religious",
    img: "https://media.istockphoto.com/id/1680451551/photo/high-contrast-lord-jagannath-temple-puri.jpg?s=612x612&w=0&k=20&c=zjZbWN-QyMk8-Rp4qv74O0PWLmySnnyE_hHSA7Zfy08=",
  },
  {
    name: "Rajgir",
    price: "$130/Pax",
    location: "📍 Bihar, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/1450241212/photo/shanti-stupa-rajgir.jpg?s=612x612&w=0&k=20&c=fXUKLoBn8UUXBC2tF-7OQZnMCuTXPfGj5OoJEENLaGw=",
  },
  {
    name: "Deoghar",
    price: "$150/Pax",
    location: "📍 Deoghar, India",
    rating: "⭐ 4.9",
    category: "religious",
    img: "https://media.istockphoto.com/id/1426952218/photo/famous-temple-of-lord-shiva-situated-in-deoghar-jharkhand-in-india.jpg?s=612x612&w=0&k=20&c=8VfZdcEQhi8t7vsHux3jwUlhQsZ6QJAwGbYptYzjiBk=",
  },
  {
    name: "Bondi Beach",
    price: "$130/Pax",
    location: "📍 Sydney, Australia",
    rating: "⭐ 4.8",
    category: "beach",
    img: "https://media.istockphoto.com/id/515070480/photo/people-relaxing-on-the-bondi-beach-in-sydney-australia.jpg?s=612x612&w=0&k=20&c=pPSH0cIH6gagZS5PSecVwOm1fDgEaDkYVy_PzJyt9ms=",
  },
  {
    name: "Kovalam Beach",
    price: "$130/Pax",
    location: "📍 Kerala, India",
    rating: "⭐ 4.8",
    category: "beach",
    img: "https://media.istockphoto.com/id/1454265812/photo/kovalam-beach-in-kerala.jpg?s=612x612&w=0&k=20&c=Rv-HQoBRnt9GSSUp8SA9dmL_xa5t7kCU8vNNYg-n_70=",
  },
  {
    name: "Waikiki Beach",
    price: "$140/Pax",
    location: "📍 Honolulu, Hawaii",
    rating: "⭐ 4.9",
    category: "beach",
    img: "https://media.istockphoto.com/id/1126324069/photo/waikiki-beach.jpg?s=612x612&w=0&k=20&c=l5D3O4JRjRriZjO4G-96iLGr0epCnCcvhqLkm86S9a0=",
  },
  {
    name: "Copacabana Beach",
    price: "$120/Pax",
    location: "📍 Rio de Janeiro, Brazil",
    rating: "⭐ 4.8",
    category: "beach",
    img: "https://media.istockphoto.com/id/524692783/photo/famous-copacabana-beach-in-rio-de-janeiro-brazil.jpg?s=612x612&w=0&k=20&c=jFf0ogMZ63lBbxFVE3IdCrHfsr2wMT2OvJHAavocknE=",
  },
  {
    name: "Maya Bay",
    price: "$150/Pax",
    location: "📍 Phi Phi Islands, Thailand",
    rating: "⭐ 4.9",
    category: "beach",
    img: "https://media.istockphoto.com/id/512330676/photo/longtail-wooden-boat-at-maya-bay-thailand.jpg?s=612x612&w=0&k=20&c=LwQkoPi3DpuDmER675EfmTha5d75ppXyyWOJQ8cVmXc=",
  },
  {
    name: "Whitehaven Beach",
    price: "$140/Pax",
    location: "📍 Queensland, Australia",
    rating: "⭐ 4.8",
    category: "beach",
    img: "https://media.istockphoto.com/id/1427959861/photo/beautiful-high-angle-aerial-drone-view-of-famous-whitehaven-beach-part-of-the-whitsunday.jpg?s=612x612&w=0&k=20&c=IZSkZMn59gWSQqR7Gd_H4dQraQJf2BIOXecvToEIytY=",
  },
  {
    name: "Anse Source d'Argent",
    price: "$160/Pax",
    location: "📍 La Digue, Seychelles",
    rating: "⭐ 4.9",
    category: "beach",
    img: "https://media.istockphoto.com/id/184862634/photo/seychelles-seascape.jpg?s=612x612&w=0&k=20&c=rZJJJYNASKZrK1-b5sxb354NkRzF4ghE0sKhyNXa6Ng=",
  },
  {
    name: "Cape Reinga",
    price: "$164/Pax",
    location: "📍 Northland, New Zealand",
    rating: "⭐ 4.9",
    category: "beach",
    img: "https://media.istockphoto.com/id/537362026/photo/lighthouse-of-cape-reinga-iv.jpg?s=612x612&w=0&k=20&c=wm3iNX6YDiy66viLilnUo9g_ckqaxUTeTYIY9VPC8jM=",
  },
  {
    name: "Mount Everest",
    price: "$300/Pax",
    location: "📍 Nepal",
    rating: "⭐ 4.9",
    category: "mountain",
    img: "https://media.istockphoto.com/id/618202000/photo/man-hiking-silhouette-in-mount-everest-himalayan.jpg?s=612x612&w=0&k=20&c=Ek_nXBMRbjwI44DcMUJa-P28b4AmlFuNGTj8x1Yrafg=",
  },
  {
    name: "Himachal Pradesh",
    price: "$200/Pax",
    location: "📍 Himachal Pradesh, India",
    rating: "⭐ 4.8",
    category: "mountain",
    img: "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=",
  },
  {
    name: "Manali",
    price: "$250/Pax",
    location: "📍 Manali, India",
    rating: "⭐ 4.9",
    category: "mountain",
    img: "https://media.istockphoto.com/id/934701578/photo/paragliding-over-himalayan-mountains.jpg?s=612x612&w=0&k=20&c=NHquUYr0WN2wUmi2A1U2BW6zfQ1L7zNDwpI00AnvOb8=",
  },
  {
    name: "Nainital",
    price: "$220/Pax",
    location: "📍 Nainital, India",
    rating: "⭐ 4.8",
    category: "mountain",
    img: "https://media.istockphoto.com/id/484389570/photo/himalayas.jpg?s=612x612&w=0&k=20&c=6jM32XJBWlvv6x7AF-av52jlncPkz5hn_AEhjaDSFYI=",
  },
  {
    name: "Ladakh",
    price: "$230/Pax",
    location: "📍 Ladakh, India",
    rating: "⭐ 4.9",
    category: "mountain",
    img: "https://media.istockphoto.com/id/1046313926/photo/indian-bikers-travel-on-national-highway-with-scenic-landscape-at-ladakh-india.jpg?s=612x612&w=0&k=20&c=WjPBCZMD93SFckiZq7b3QdVhgpTkp19QLiuWANT4NuI=",
  },
  {
    name: "Jammu and Kashmir",
    price: "$240/Pax",
    location: "📍 Jammu and Kashmir, India",
    rating: "⭐ 4.9",
    category: "mountain",
    img: "https://media.istockphoto.com/id/532959840/photo/gulmarg-high-peaks.jpg?s=612x612&w=0&k=20&c=WP0MGH2QBSzAqrtYG4Ryr17303VkwoCfkONyjiruo7I=",
  },
  {
    name: "Himalayas",
    price: "$280/Pax",
    location: "📍 India/Nepal",
    rating: "⭐ 4.9",
    category: "mountain",
    img: "https://media.istockphoto.com/id/492231010/photo/group-of-3-trekkers-in-mount-everest-national-park-nepal.jpg?s=612x612&w=0&k=20&c=qziz0A7t6sULTnolfpOgziED_HUUWswe4EJM0xMD-qQ=",
  },
  {
    name: "Kedarnath",
    price: "$140/Pax",
    location: "📍 Kedarnath, India",
    rating: "⭐ 4.9",
    category: "mountain",
    img: "https://media.istockphoto.com/id/1209865522/photo/view-of-the-kedarnath-temple-at-night-in-kedarnath-uttarakhand-india.jpg?s=612x612&w=0&k=20&c=ZHSoP7Moc5lyeCU6zNHQP2YlB8UbOosSsTohH6OtKn8=",
  },
  {
    name: "Sahara Desert",
    price: "$180/Pax",
    location: "📍 Africa",
    rating: "⭐ 4.8",
    category: "desert",
    img: "https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=MeF2Dl4ya1NVOWM_I_xo3EPd8E-iazBghYhjiyRaTcU=",
  },
  {
    name: "Gobi Desert",
    price: "$170/Pax",
    location: "📍 Mongolia/China",
    rating: "⭐ 4.8",
    category: "desert",
    img: "https://media.istockphoto.com/id/684148808/photo/caravan-in-the-desert.jpg?s=612x612&w=0&k=20&c=Guo2crTs1Mwv51wIHd0OoGCZlI1ILPzVB2PzjSfJssU=",
  },
  {
    name: "Mojave Desert",
    price: "$160/Pax",
    location: "📍 California, USA",
    rating: "⭐ 4.8",
    category: "desert",
    img: "https://media.istockphoto.com/id/1138689680/photo/desert-death-valley.jpg?s=612x612&w=0&k=20&c=tCDGw_mYB0I9sBHwP0JFemzzEQfbajiNK1YdiFHJoz8=",
  },
  {
    name: "Atacama Desert",
    price: "$190/Pax",
    location: "📍 Chile",
    rating: "⭐ 4.9",
    category: "desert",
    img: "https://media.istockphoto.com/id/175189565/photo/salar-de-talar-and-surrounding-volcanoes-atacama-desert-chile.jpg?s=612x612&w=0&k=20&c=HxvJtxsrziZco4cO8d7JqH0vuYYTDaj44yET_h7f7JI=",
  },
  {
    name: "Thar Desert",
    price: "$150/Pax",
    location: "📍 India/Pakistan",
    rating: "⭐ 4.8",
    category: "desert",
    img: "https://media.istockphoto.com/id/629766392/photo/indian-women-carrying-on-their-heads-water-from-local-well.jpg?s=612x612&w=0&k=20&c=XjvcCQgOUMfJj3NIejIRNxDcDp91lzq2H0-bABG-OrM=",
  },
  {
    name: "Namib Desert",
    price: "$200/Pax",
    location: "📍 Namibia",
    rating: "⭐ 4.9",
    category: "desert",
    img: "https://media.istockphoto.com/id/156278254/photo/high-dunes-from-namib-desert-and-the-atlantic-ocean.jpg?s=612x612&w=0&k=20&c=1i2pJDCjWgk527e64eRtASYvLtQqQvOS5YxItpi_lM8=",
  },
  {
    name: "Karakum Desert",
    price: "$180/Pax",
    location: "📍 Turkmenistan",
    rating: "⭐ 4.7",
    category: "desert",
    img: "https://media.istockphoto.com/id/1226003652/photo/the-karakum-desert-turkmenistan-darvaza-burning-gas-crater-called-gates-of-hell-darvaza-is.jpg?s=612x612&w=0&k=20&c=UbORp4twUPc-xxqwume8oBxhVzhIdKRNY-1jjByI8Ug=",
  },
  {
    name: "Sonoran Desert",
    price: "$170/Pax",
    location: "📍 USA/Mexico",
    rating: "⭐ 4.8",
    category: "desert",
    img: "https://media.istockphoto.com/id/1468267278/photo/toms-thumb-trail-leads-through-beautiful-sonoran-desert-mountain-landscape-towards-an-awesome.jpg?s=612x612&w=0&k=20&c=G8m77TZaAnfD3VYvbX__HcQlHf3BBQ5c30wu1ZUVasM=",
  },
  {
    name: "Jog Falls",
    price: "$150/Pax",
    location: "📍 Karnataka, India",
    rating: "⭐ 4.7",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/1166553801/photo/jog-falls-waterfall-in-shivamogga-during-monsoon-season.jpg?s=612x612&w=0&k=20&c=hvc6BfK913ePGHEsQLiClChpcJCtFCSFDcop7jEzGw4=",
  },
  {
    name: "Dudhsagar Falls",
    price: "$180/Pax",
    location: "📍 Goa, India",
    rating: "⭐ 4.8",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/1200790835/photo/the-huge-waterfall-dudhsagar-and-the-railway-bridge-passing-through-it-karnataka-india.jpg?s=612x612&w=0&k=20&c=TO892D0T6x9DCxnpCwblJWKwGBg6IoFSnK_PPrwR82Y=",
  },
  {
    name: "Meghalaya's Nohkalikai Falls",
    price: "$200/Pax",
    location: "📍 Meghalaya, India",
    rating: "⭐ 4.9",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/90678405/photo/potholes-falls.jpg?s=612x612&w=0&k=20&c=VvexktnJ38UZCwF8PT4WcinhCOjDP_zdSo9aNamSNPA=",
  },
  {
    name: "Ramboda Falls",
    price: "$170/Pax",
    location: "📍 Sri Lanka",
    rating: "⭐ 4.6",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/476593574/photo/ramboda-falls.jpg?s=612x612&w=0&k=20&c=zBcZgSX-ehn3SLJRQEripp98lRUFGLsHNfRTCqOPvb4=",
  },
  {
    name: "Niagara Falls",
    price: "$250/Pax",
    location: "📍 USA/Canada",
    rating: "⭐ 5.0",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/1346270784/photo/niagara-falls-horseshoe-falls.jpg?s=612x612&w=0&k=20&c=ra4FaCjLDTMjatCIOTCJP-ilDr0amtzMgI8aAjyf3qU=",
  },
  {
    name: "Victoria Falls",
    price: "$280/Pax",
    location: "📍 Zambia/Zimbabwe",
    rating: "⭐ 4.9",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/1805830084/photo/woman-sitting-on-the-top-of-a-rock-enjoying-the-victoria-falls-zimbabwe.jpg?s=612x612&w=0&k=20&c=uNyCEK8g_bljhVFcSuNs7SKpisIHtFDUeQPMs44qlxk=",
  },
  {
    name: "Angel Falls",
    price: "$350/Pax",
    location: "📍 Venezuela",
    rating: "⭐ 5.0",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/157506590/photo/a-beautiful-view-of-salto-angel.jpg?s=612x612&w=0&k=20&c=Y2icRflDdMunOyvi-Ctxtw8-evuv3HeqXrSHqnNc5CQ=",
  },
  {
    name: "Sutherland Falls",
    price: "$300/Pax",
    location: "📍 New Zealand",
    rating: "⭐ 4.8",
    category: "waterfall",
    img: "https://media.istockphoto.com/id/1796204658/photo/milford-sound-a-popular-tourist-attraction-in-the-south-island-of-new-zealand.jpg?s=612x612&w=0&k=20&c=hCDW0SICbNomZv-zA52U2D5QRJb76sh4TPekwArPdHw=",
  },
  {
    name: "Paris",
    price: "$550/Pax",
    location: "📍 France",
    rating: "⭐ 4.9",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE=",
  },
  {
    name: "Tokyo",
    price: "$450/Pax",
    location: "📍 Japan",
    rating: "⭐ 4.8",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/1131743616/photo/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=M4BnBxDnlp1EQGHutJR9AAUI_7O9nwCvXKpuUmqrUdQ=",
  },
  {
    name: "New York City",
    price: "$600/Pax",
    location: "📍 USA",
    rating: "⭐ 4.9",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/1167975236/photo/the-statue-of-liberty-over-the-scene-of-new-york-cityscape-river-side-which-location-is-lower.jpg?s=612x612&w=0&k=20&c=Fut8fxk88b_aFn1W08ffzBqFaOaGjeW0boYf-DHekM4=",
  },
  {
    name: "Dubai",
    price: "$500/Pax",
    location: "📍 UAE",
    rating: "⭐ 4.8",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/525034854/photo/dubai-downtown-skyline-dubai-united-arab-emirates.jpg?s=612x612&w=0&k=20&c=kv4uiXudydKayWHdvRTGhu2liKujTK3CoqpuosGkOkY=",
  },
  {
    name: "London",
    price: "$550/Pax",
    location: "📍 England",
    rating: "⭐ 4.9",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/533462679/photo/london-big-ben-and-houses-of-parliament-uk.webp?a=1&b=1&s=612x612&w=0&k=20&c=BYV5ErD6-IYW_fjfEN1t1H9sT7lyONrXqiT-EDz6yW8=",
  },
  {
    name: "Mumbai",
    price: "$300/Pax",
    location: "📍 Maharashtra, India",
    rating: "⭐ 4.7",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/860528756/photo/the-bandraworli-sea-link-mumbai-india.jpg?s=612x612&w=0&k=20&c=xT9TK7oYkP6TP62lHqP0H-9mfz9cWva4OcYEnt06cjc=",
  },
  {
    name: "Kolkata",
    price: "$280/Pax",
    location: "📍 West Bengal, India",
    rating: "⭐ 4.6",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/1164386039/photo/howrah-bridge-on-river-ganges-at-kolkata-at-twilight-with-moody-sky.jpg?s=612x612&w=0&k=20&c=CHrNWdInFSDyERdvgd0f8935hZcBQU6lbYCE4LlXqUY=",
  },
  {
    name: "Jaipur",
    price: "$250/Pax",
    location: "📍 Rajasthan, India",
    rating: "⭐ 4.8",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/1135820309/photo/amber-fort-and-maota-lake-jaipur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=raUKDB1Mris9Z7SjvuuTieZRzF2-CaKukGvTC8t1kuo=",
  },
  {
    name: "Singapore",
    price: "$350/Pax",
    location: "📍 Singapore",
    rating: "⭐ 4.9",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/482380340/photo/singapore-skyline-and-view-of-marina-bay-at-twilight.jpg?s=612x612&w=0&k=20&c=OHblAofYxh2PkPCah4SiirGmdMKRRPI88c6MwOVuyuk=",
  },
  {
    name: "Hong Kong",
    price: "$250/Pax",
    location: "📍 China",
    rating: "⭐ 4.5",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/1344219507/photo/hong-kong.jpg?s=612x612&w=0&k=20&c=Jkjm8XvzsHQ5Xav6-m9Z3_amo7CEBdQri0Sqib-yiR8=",
  },
  {
    name: "Shanghai",
    price: "$400/Pax",
    location: "📍 China",
    rating: "⭐ 4.9",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/526540092/photo/beautiful-modern-city-at-night-in-shanghai-china.jpg?s=612x612&w=0&k=20&c=3CvU2ZTEW-i4mTidCX3hrq4Hps0_9mWGXHBbcGzu3ZY=",
  },
  {
    name: "Rome",
    price: "$500/Pax",
    location: "📍 Italy",
    rating: "⭐ 4.9",
    category: "Famous-city",
    img: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
  },
];

// Render cards dynamically
const cardContainer = document.getElementById('data-destination');

function renderCards(category = 'all') {
  cardContainer.innerHTML = ''; // Clear existing cards

  destinations
    .filter((dest) => category === 'all' || dest.category === category)
    .forEach((dest) => {
      const card = document.createElement('div');
      card.classList.add('card2');
      card.innerHTML = `
        <img src="${dest.img}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.location}</p>
        <p>${dest.price}</p>
        <p>${dest.rating}</p>
      `;
      card.addEventListener('click', () => {
        window.location.href = `details.html?name=${encodeURIComponent(
          dest.name
        )}`;
      });
      cardContainer.appendChild(card);
    });
}

// Handle category button clicks
const categoryButtons = document.querySelectorAll('.category-buttons button');
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    categoryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderCards(button.dataset.category);
  });
});

// Initial render
renderCards();

// JavaScript to toggle the visibility of cards
const cardContainer2 = document.getElementById('data-destination');
const showMoreButton = document.getElementById('show-more-button');

// Initially display only the first 8 cards
let isShowingAll = false;

function toggleCards() {
  if (isShowingAll) {
    // Collapse to show only 8 cards
    cardContainer2.style.maxHeight = '57rem';
    showMoreButton.textContent = 'Show More';
  } else {
    // Expand to show all cards
    cardContainer2.style.maxHeight = 'none';
    showMoreButton.textContent = 'Show Less';
  }
  isShowingAll = !isShowingAll;
}

// Add event listener to the button
showMoreButton.addEventListener('click', toggleCards);
