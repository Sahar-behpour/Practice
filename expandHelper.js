// expandHelper.js

// Function to expand the popup
export function expandPopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('expanded');
    initializePanZoom();
}

// Function to initialize pan-zoom functionality
function initializePanZoom() {
    const popupContent = document.querySelector('.popup-content');
    // Add your pan-zoom library initialization here
    // Example using panzoom library
    panzoom(popupContent);
}

// Function to initialize expand button
export function initializeExpandButton() {
    document.getElementById('popup').addEventListener('click', function(event) {
        if (event.target.id === 'expandButton') {
            expandPopup();
        }
    });

    // Set the class name for the expand button
    const expandButton = document.getElementById('expandButton');
    if (expandButton) {
        expandButton.className = "fas fa-expand pin-button";
    }
}