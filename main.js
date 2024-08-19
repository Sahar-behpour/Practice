// main.js

import { showPopup, hidePopup, initializePopup } from './popupHelper.js';
import { initializeExpandButton } from './expandHelper.js';

// Initialize the popup functionality
initializePopup();

// Initialize the expand button functionality
initializeExpandButton();

// Sample data and map integration
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const sampleData = [
        { lat: 51.505, lng: -0.09, info: 'Sample Data 1' },
        { lat: 51.515, lng: -0.1, info: 'Sample Data 2' }
    ];

    sampleData.forEach(data => {
        const marker = L.marker([data.lat, data.lng]).addTo(map);
        marker.on('click', function() {
            showPopup(`<div class="popup-content">${data.info}<button id="expandButton">Expand</button></div>`);
            // Set the class name for the expand button
            const expandButton = document.getElementById('expandButton');
            if (expandButton) {
                expandButton.className = "fas fa-expand pin-button";
            }
        });
    });

    // Add click-to-zoom functionality
    map.on('click', function(e) {
        map.setView(e.latlng, map.getZoom() + 1);
    });
});