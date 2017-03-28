 var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.4488897,
             lng: -70.6692655},
    zoom: 14
});
    
    var latLongPazPeru = {lat:-16.457336,
                          lng: -71.530440};
    
    var latDos = {lat:-16.437368,
                  lng: -71.551208};
    
    currentMarker = new google.maps.Marker({
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        map: miMapa,
        title:"Aqui estoy!!!",
        icon: "img/marcador.jpg"
    });
    var santiagoChile = new google.maps.Marker({
        map: map,
        position: latLongPazPeru,
        title: 'Hello World!',
        //label:'X',
        icon: 'img/marcador.jpg'
    });
    
    new google.maps.Marker({position:latDos, map:map, icon:'image/carriño.png'});
    
    var infowindow = new google.maps.InfoWindow({
        content:contentString
    });
    
    santiagoChile.addEventListener('click', function(){
        infowindow.open(map,santiagoChile)
    })
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    