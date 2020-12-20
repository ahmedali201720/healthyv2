var input = $("#customer-location-input")[0];
var map;
var marker;

$(document).ready(function () {

    initMap();

    var autocomplete;
    autocomplete = new google.maps.places.Autocomplete(input, { types: ['geocode'] });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        var position = { 'lat': near_place.geometry.location.lat(), 'lng': near_place.geometry.location.lng() }
        console.log(position);
        map.setCenter(position);
        map.setZoom(16);
        marker.setPosition(position);
    });

});

// Initialize and add the map
function initMap() {
    // The location of cairo
    const cairo = { lat: 30.020544470064028, lng: 31.21319468434155 };
    // The map, centered at cairo
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: cairo,
    });
    // The marker, positioned at cairo
    marker = new google.maps.Marker({
        position: cairo,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP
    });
    marker.setIcon("../assets/icons/marker4.png");
    marker.addListener('drag', handleMarkerDrag);
    map.addListener('click', handleMapClick);
}