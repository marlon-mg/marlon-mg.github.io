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


