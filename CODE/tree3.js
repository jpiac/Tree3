var mymap = L.map('mapid').setView([0, 0], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/light-v9',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoianBpYWMiLCJhIjoiY2o1azR3ejE0MnN2ejMzbzg0b29sbGYzcSJ9.RUV9ehVJ9V3aetQCqP60tg'
}).addTo(mymap);

L.geoJson(all_primary_countries_GEO).addTo(mymap);
