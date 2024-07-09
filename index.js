// Cod pentru inițializarea hărții Google Maps
function initMap() {
    const mapOptions = {
        zoom: 12,
        center: { lat: 44.4268, lng: 26.1025 } // Coordonatele pentru București
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Inițializarea hărții Google Maps
initMap();
