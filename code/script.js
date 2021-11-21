import { MarkerClusterer } from "@googlemaps/markerclusterer";
 
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng:  -150.64},
  zoom: 8,
  mapId: '1e75f32d7a6ea90b'
});
}
const marker = new google.maps.Marker({
    position:{ lat: 37.366611277284626, lng: -122.1095320007207 };
    map,
    title: "Help One Child, Los Altos",
  });
}


const infowindow = new google.maps.InfoWindow({
    content: "Help One Child, Los Altos",
  });
   marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });


