// popupHelper.js

// Function to show the popup
export function showPopup(content) {
    const popup = document.getElementById('popup');
    popup.innerHTML = content;
    popup.style.display = 'block';
}

// Function to hide the popup
export function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Function to initialize the popup
export function initializePopup() {
    document.getElementById('openPopup').addEventListener('click', function() {
        showPopup('<div class="popup-content">Your content here<button id="expandButton">Expand</button></div>');
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        hidePopup();
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('popup')) {
            hidePopup();
        }
    });
}