var response = "full_info.geojson";

var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
    Beer: new L.LayerGroup(),
    Wine: new L.LayerGroup(),
    Spirits: new L.LayerGroup(),
    Happiness: new L.LayerGroup()
};

var map = L.map("map", {
    center: [10, -32],
    zoom: 3,
    layers: [
        lightmap,
        layers.Beer,
        layers.Wine,
        layers.Spirits,
        layers.Happiness,
    ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

var overlays = {
    "Beer Per Capita": layers.Beer,
    "Wine Per Capita": layers.Wine,
    "Spirts Per Capita ": layers.Spirits,
    "Happiness Rating": layers.Happiness
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
    position: "topright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
};
// Add the info legend to the map
info.addTo(map);


// Initialize an object containing icons for each layer group
var icons = {
    Beer: L.ExtraMarkers.icon({
        icon: "ion-settings",
        iconColor: "white",
        markerColor: "yellow",
        shape: "star"
    }),
    Wine: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "red",
        shape: "circle"
    }),
    Spirits: L.ExtraMarkers.icon({
        icon: "ion-minus-circled",
        iconColor: "white",
        markerColor: "blue-dark",
        shape: "penta"
    }),
    Happiness: L.ExtraMarkers.icon({
        icon: "ion-android-bicycle",
        iconColor: "white",
        markerColor: "orange",
        shape: "circle"
    }),
};

// Perform a GET request to the query URL
d3.json(response, function(data) {
    data = data.features;
    console.log(data[0].properties.beer_percapita)

    var markers = {
        Beer: 0,
        Wine: 0,
        Spirits: 0,
        Happiness: 0
    };

    //NOT NECESSARY??
    // Loop through the countries
    if (layer = Beer) {

        for (var i = 0; i < data.length; i++) {
            var country = data[i].properties
                // Create a new marker with the appropriate icon and coordinates
            var newMarker = L.marker([(data[i].geometry.coordinates[0]), (data[i].geometry.coordinates[1])], {
                icon: icons[i]
            });

            // Add the new marker to the appropriate layer
            newMarker.addTo(layers[level]);

            // Bind a popup to the marker that will  display on click. This will be rendered as HTML
            newMarker.bindPopup(score.name + "<br> Beer Per Capita: " + score.beer_percapita);
        }
    }
    // Call the updateLegend function, which will... update the legend!
    updateLegend(markers);
});

// Update the legend's innerHTML with the last updated time and station count
function updateLegend(markers) {
    document.querySelector(".legend").innerHTML = [
        "<p class='beer'>Beer: " + markers.Beer + "</p>",
        "<p class='wine'>Wine: " + markers.Wine + "</p>",
        "<p class='spirits'>Spirits: " + markers.Spirits + "</p>",
        "<p class='happiness'>Happiness: " + markers.Happiness + "</p>",
    ].join("");
}