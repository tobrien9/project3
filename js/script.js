var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.68991251123738, lng: -87.71773233356387 },
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: { lat: 41.68991251123738, lng: -87.71773233356387 },
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "My High school",
  });
  infowindow.open(map, marker);

    var features = [
    { position: { lat: 41.68991251123738, lng: -87.71773233356387 }, type: "CHSAS School" },
  ];
  
for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
