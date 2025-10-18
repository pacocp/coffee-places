// --- 1. DATA: Your list of cafeterias ---
const cafeterias = [
   {
        id: 'dulcimena',
        name: 'Dulcimena Coffee & Go',
        location: [37.17283773878462, -3.59251301403811],
        description: 'One of (or THE) the best coffee places in Granada, and the most purist one. You should try everything there. They work mainly with Ineffable roasters.',
        imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqsVqOzrgcq1Wn92bloqdeyWC_M_hvsiMYdxeebuz-ReQd71Oi57jaFRiXbDGKJlXaefKhEEG9PkKs8zuL9ZyHA3YHXMMhpGbXGYSJ7hhFeml-YXB_Uj8Th1UX7QREaXBu4SS4=w408-h544-k-no',
        link: 'https://www.google.com/maps/place/Dulcimena+Coffee+%26+Go/@37.1727865,-3.595045,16z/data=!3m1!4b1!4m6!3m5!1s0xd71fcba19b7d6f1:0x84d53432d8525722!8m2!3d37.1727865!4d-3.5924701!16s%2Fg%2F11b75pwlkt!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 'magia-arabica',
        name: 'Magia Arábica',
        location: [37.17447827741074, -3.5994317000010736],
        description: 'Coffee shop near Plaza Bibrambla. Mainly to go, and they work with Hola Coffee Roasters.',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOxmH5DOGNEEqD3WvdxfMvr_xrVzWKjRaeit4LY=w408-h415-k-no',
        link: 'https://www.google.com/maps/place/Magia+Ar%C3%A1bica/@37.1770429,-3.6047847,17z/data=!4m6!3m5!1s0xd71fd92574c8c3d:0x75f429ed6994e80e!8m2!3d37.1743116!4d-3.5994539!16s%2Fg%2F11j8pdkqbh!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
     {
        id: 'sur-coffee-corner',
        name: 'Sur Coffee Corner',
        location: [37.177239416577606, -3.599935246891415],
        description: 'Their coffee is great, and their toasts are amazing (and big!). Only to go.',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOFH0YbzW-nfE1mRAlF3OcuRFngzd-y9KGbu8jQ=w408-h544-k-no',
        link: 'https://www.google.com/maps/place/SUR+Coffee+Corner/@37.1762041,-3.6026989,17z/data=!4m6!3m5!1s0xd71fdbcc76e5563:0x232f63d5c134cf4c!8m2!3d37.177043!4d-3.5999138!16s%2Fg%2F11fn1x0vqq!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 'la-finca',
        name: 'La Finca',
        location: [37.176349422608446, -3.6001240055342785],
        description: 'One of the most visited specialty coffee spots in Granada, next to the Cathedral. They have a wide variety of food, and they are also the roasters.',
        imageUrl: 'https://lh3.googleusercontent.com/geougc-cs/AB3l90B4ZwDELWuwVa0lIPjuxtYZ1qucXfJaeAzL8raAYXlRtjbblOaF_trROtGGhnsQAuUFst1ZtT-4EJyMzgSR2ET1wLk-LQj_rLEimY_BTJ_Dkle-DdvUB4DlTIx-BAF_wIhfKXZ7=w600-h900-p',
        link: 'https://www.google.com/maps/place/La+Finca+Coffee/@37.1740832,-3.5976356,16z/data=!4m6!3m5!1s0xd71fcbfb6842373:0xe7b93068dda77f7f!8m2!3d37.1762041!4d-3.600124!16s%2Fg%2F11bwyxj83p!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 'noat-coffee',
        name: 'Noat coffee',
        location: [37.17439089984819, -3.59503923375945],
        description: 'In the heart of the Realejo, a cozy place for having breakfast or a coffee. It has tables inside and outside, so good for relaxing a bit.',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMB1-O1eWJwfoxsnHH4px1a03GeKtjhtdcHZYUM=w408-h552-k-no',
        link: 'https://www.google.com/maps/place/Noat+Coffee/@37.171565,-3.6000341,17z/data=!4m6!3m5!1s0xd71fcb96a434f57:0x27e42848a98d614a!8m2!3d37.1740832!4d-3.5950607!16s%2Fg%2F11gg70c3zg!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
        id: 'kona-specialty-coffee',
        name: 'Kona Specialty Coffee',
        location: [37.17172737661053, -3.597459194673276],
        description: 'Near Fuente de las Batallas, a small coffee shop with a very cozy atmosphere. They have mainly tables outside, and it gets very crowded in the mornings.',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipOdsY5zc2wK-hdzqXGUNU2iCEhWv9lnmJE0yDVf=w408-h510-k-no',
        link: 'https://www.google.com/maps/place/Kona+Specialty+Coffee/@37.171565,-3.6000341,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fd37b89e715b:0xe84ade793b73751d!8m2!3d37.171565!4d-3.5974592!16s%2Fg%2F11nxg7ypt9!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
     {
        id: 'despiertoo-specialty-coffee',
        name: 'Despiertoo Specialty Coffee',
        location: [37.17575036181091, -3.601307506763042],
        description: 'Near Calle Mesones, a specialty coffee place with a modern look. It has various pastries, and sitting spots for your computer.',
        imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipPijN4-nGEMgaVN8z5akWB6vHK_QsUZODOJsqk=w408-h306-k-no',
        link: 'https://www.google.com/maps/place/Despiertoo+Specialty+Coffee/@37.1755538,-3.6039146,17z/data=!3m1!4b1!4m6!3m5!1s0xd71fd03de6c6ec5:0x6e5cb29004aa0c3c!8m2!3d37.1755538!4d-3.6013397!16s%2Fg%2F11t0mgnpqv!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D'
    },
];

// --- 2. GLOBAL VARIABLES ---
let map;
const markers = {};
// ⭐️ NEW: Modal DOM elements
let modal, modalCloseBtn, modalImg, modalTitle, modalDescription, modalGmapsLink;

// --- 3. INITIALIZATION ---
window.addEventListener('load', () => {
    // ⭐️ NEW: Get modal elements once the page loads
    modal = document.getElementById('cafe-modal');
    modalCloseBtn = document.getElementById('modal-close-btn');
    modalImg = document.getElementById('modal-img');
    modalTitle = document.getElementById('modal-title');
    modalDescription = document.getElementById('modal-description');
    modalGmapsLink = document.getElementById('modal-gmaps-link');

    initMap();
    populateCafeList();
    addModalListeners();
});

function initMap() {
    const mapCenter = cafeterias[0].location;
    map = L.map('map').setView(mapCenter, 15);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    cafeterias.forEach(cafe => createMarker(cafe));
}

// ⭐️ NEW: Function to set up modal closing events
function addModalListeners() {
    modalCloseBtn.addEventListener('click', closeCafeModal);
    modal.addEventListener('click', (e) => {
        // Close modal only if user clicks on the dark overlay itself
        if (e.target === modal) {
            closeCafeModal();
        }
    });
    // Add listener for the 'Escape' key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCafeModal();
        }
    });
}

// --- 4. DOM & MAP ELEMENT CREATION ---
function populateCafeList() {
    const list = document.getElementById('cafe-list');
    cafeterias.forEach(cafe => {
        const listItem = document.createElement('li');
        listItem.className = 'cafe-item';
        listItem.id = `cafe-${cafe.id}`;
        listItem.innerHTML = `
            <img src="${cafe.imageUrl}" alt="${cafe.name}" />
            <div class="cafe-info">
                <h3>${cafe.name}</h3>
                <p>${cafe.description}</p>
            </div>
        `;
        list.appendChild(listItem);
        listItem.addEventListener('click', () => highlightCafe(cafe));
    });
}

function createMarker(cafe) {
    const cafeIcon = L.divIcon({
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 0C113.3 0 101.3 8.3 96 20.5c-4.2 9.8-2 21.5 5.5 29l32 32-32 32c-7.5 7.5-9.7 19.2-5.5 29C101.3 155.7 113.3 164 128 164h17.6c-4.3 10.3-6.5 21.4-6.5 32.8V224H128c-35.3 0-64 28.7-64 64v32c0 8.8 7.2 16 16 16h24c-2.5 13.1-4 26.5-4 40c0 53 43 96 96 96s96-43 96-96c0-13.5-1.5-26.9-4-40h24c8.8 0 16-7.2 16-16v-32c0-35.3-28.7-64-64-64H272v-27.2c0-11.4-2.2-22.5-6.5-32.8H284c14.7 0 26.7-8.3 32-20.5c4.2-9.8 2-21.5-5.5-29l-32-32 32-32c7.5 7.5 9.7-19.2 5.5-29C322.7 8.3 310.7 0 296 0H128zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/></svg>`,
        className: 'custom-cafe-icon',
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });
    const marker = L.marker(cafe.location, { title: cafe.name, icon: cafeIcon }).addTo(map);
    markers[cafe.id] = marker;
    marker.on('click', () => highlightCafe(cafe));
}

// --- 5. INTERACTIVITY ---

// ⭐️ NEW: Functions to open and close the modal
function openCafeModal(cafe) {
    modalImg.src = cafe.imageUrl;
    modalImg.alt = cafe.name;
    modalTitle.textContent = cafe.name;
    modalDescription.textContent = cafe.description;
    modalGmapsLink.href = cafe.link;
    
    modal.classList.add('active');
}

function closeCafeModal() {
    modal.classList.remove('active');
}

// ⭐️ UPDATED: This function now opens the modal instead of the small popup
function highlightCafe(cafe) {
    map.flyTo(cafe.location, 16);

    document.querySelectorAll('.cafe-item').forEach(item => {
        item.classList.remove('active');
    });
    document.getElementById(`cafe-${cafe.id}`).classList.add('active');

    const targetMarker = markers[cafe.id];
    if (targetMarker) {
        Object.values(markers).forEach(marker => marker._icon?.classList.remove('active'));
        targetMarker._icon?.classList.add('active');
    }
    
    // Open our new modal instead of the Leaflet popup
    openCafeModal(cafe);
}
