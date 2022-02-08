window.onload = function(){
   setTimeout(loadAfterTime, 1000)
};

function loadAfterTime() { 
var map = L.map('map').setView([37.644224, 140.372278], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYWJhYmthIiwiYSI6ImNremVudGI0YTNhYWEybnBoeWV1bm1wcmIifQ.wRTTMF4BgP9Q8AhZldWojA'
}).addTo(map); 
}

// need to work on finding users location and appearing on map instead of Ebisu Circuit