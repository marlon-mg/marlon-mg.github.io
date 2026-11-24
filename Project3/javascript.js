document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("questions"); 
  if(button) {
    button.addEventListener("click", function() {
      alert("If you have questions, contact me at: mmguaraca@hawk.illinoistech.edu");
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
  const iit= { lat: 41.8355, lng: -87.6244 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: iit,
    zoom: 15,
  });

  const marker = new google.maps.Marker({
    position: iit,
    map: map,
    title: "Illinois Institute of Technology",
  });

  const info = new google.maps.InfoWindow({
    content: "<h3>Illinois Institute of Technology</h3><p>Chicago, Illinois</p>",
  });
  marker.addListener("click", () => {
    info.open({ anchor: marker, map });
  });
  map.addListener("click", (event) => {
    new google.maps.Marker({
      position: event.latLng,
      map: map,
    });
  });
}
