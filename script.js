const lat = 52.5104294;
const lng = 13.330535899999973;
const zoom = 15;

const map = L.map('map', {
  center: [lat, lng],
  zoom,
});

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 20,
  id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoiYWJpc3oiLCJhIjoiY2o1MjVkY25vMGFnNDMxbXJ6Z2Vxajc1YSJ9.GdEcl_NPfWGC3HWS7KRVYw'
}).addTo(map);

const markers = [
  {
    lat: 52.5104294,
    lng: 13.3305358,
    title: 'Bushes of Love',
    link: 'https://www.youtube.com/watch?v=RySHDUU2juM',
  },
  {
    lat: 52.509238,
    lng: 13.327143400000068,
    title: 'Monsters of the Universe',
    link: 'https://www.youtube.com/watch?v=7e5-0t0pTF0',
  },
];

markers.forEach(m => {
  L.marker([m.lat, m.lng])
    .addTo(map)
    .bindPopup(`<b>${m.title || ''}</b><br><iframe width="300" height="315" src="${m.link.replace("watch?v=", "embed/")}" frameborder="0" allowfullscreen></iframe>`);
});
