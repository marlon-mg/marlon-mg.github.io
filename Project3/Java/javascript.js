document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("questions");
  if (button) {
    button.addEventListener("click", function() {
      alert("If you have questions, contact me at: mguaraca@hawk.illinoistech.edu");
    });
  }

  if (document.getElementById("map")) {
    const map= document.createElement("script");
    map.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1F-BpX660SBK3-Vw9O9f7AEvTAIH8rI&callback=initMap";
    map.async = true;
    map.defer = true;
    document.body.appendChild(map);
  }
});

function initMap() {
  var iit = { lat: 41.8355, lng: -87.6244 };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: iit,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
  });

  var info = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>Chicago, Illinois</p>",
  });

  marker.addListener("click", () => {
    info.open({ anchor: marker, map });
  });
}

function placeMarker(map, location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: "<h3>Location</h3><p>" + location.lat() + ", " + location.lng() + "</p>",
  });

  infowindow.open({ anchor: marker, map });
};


