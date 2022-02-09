window.onload = function(){
   setTimeout(loadAfterTime, 1000)
};

function loadAfterTime() {

var map = L.map('map').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWJhYmthIiwiYSI6ImNremVudGI0YTNhYWEybnBoeWV1bm1wcmIifQ.wRTTMF4BgP9Q8AhZldWojA'
}).addTo(map);

map.locate({setView: true, maxZoom: 15});

function onLocationFound(e) {
  var radius = e.accuracy;

  L.marker(e.latlng).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

}

// need to work on locating businesses