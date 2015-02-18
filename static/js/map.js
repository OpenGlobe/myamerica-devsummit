var hotelIcon = L.icon({
    iconUrl: 'static/img/hotel.png',

    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var parkingIcon = L.icon({
    iconUrl: 'static/img/parking.png',

    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map',{
        center: new L.LatLng(38.894487, -77.042562),
        zoom: 14,
        scrollWheelZoom: false
        });

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7',
}).addTo(map);

L.marker([38.893852, -77.042642], {icon: hotelIcon}).addTo(map)
        .bindPopup("<b>The Washington Square Hotel: rates: $263.00 - $361.00: contact 212-777-9515 - callers must advise they are with the New School and request the New School corporate rate: http://www.wshotel.com/").openPopup();
L.marker([38.894487, -77.042562]).addTo(map)
        .bindPopup("<b> [EVENT] Department of the Interior <a href="http://www.doi.gov/interiormuseum/Plan-a-Visit.cfm">(more)</a>").openPopup();

var popup = L.popup();
