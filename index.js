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
      .bindPopup("You are Here " + "<br>" +  "within " + radius.toFixed(2) + " meters").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

}

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'fsq37wfg+kIuLpIErPuJ+Am2iTFjQdiVZlYSeSrcqPMz+k8='
  }
};

fetch('https://api.foursquare.com/v3/places/search?ll=34.2622%2C-118.4989&chains=restaurants%2C%20coffe%20shops%2C%20hotels%2C%20markets&limit=5', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     Authorization: 'fsq37wfg+kIuLpIErPuJ+Am2iTFjQdiVZlYSeSrcqPMz+k8='
//   }
// };

// fetch('https://api.foursquare.com/v3/places/nearby?ll=41.8781%2C-87.6298&query=Restaurants%2C%20Coffee%20shops%2C%20Hotels%2C%20Markets&limit=5', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));



// todo -
//connect foursquare - not recieving any arrays with specified LL string
//get info on selected businesses
//create array
//add markers for said businesses
//dropdown above the map that lists the 5 businesses