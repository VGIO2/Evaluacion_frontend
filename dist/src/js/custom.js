function init(){
    
    createList();
    
    
    var li = $("li"); 
    li.each(function(){
       $(this).click(onTypeClick); 
    });
    
}

var cars =[{"nombre":"Motocicleta","image":"src/img/moto.png","description":"Maximo 2 pasajeros"},
{"nombre":"Automovil","image":"src/img/auto.png","description":"Maximo 5 pasajeros"},
{"nombre":"Minivan","image":"src/img/van.png","description":"Maximo 10 pasajeros"},    {"nombre":"Camion","image":"src/img/camion.png","description":"Maximo 3 pasajeros"},]; 

 

function createList() {
    
    var listCars = $("#eleccion");
    
    for(var i in cars){
        var carsHtml = '<li id="'+i+'"><div class="row"><div class="col-xs-3"><img class="img-responsive car" src="'+cars[i].image+'" alt=""></div><div class="col-xs-7"><h4>'+cars[i].nombre+'</h4><small>'+cars[i].description+'</small></div><div class="col-xs-2 time"><h4>'+cars[i].time+'</h4><small>min</small></div></div></li>';
        
        listCars.append(carsHtml);
    }
}

function onTypeClick(evt) {
    
    console.log(evt.currentTarget);
    localStorage.setItem("car_select",evt.currentTarget.id);
}

var map;

function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: -33.4488897, 
             lng: -70.6692655}
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('origen').addEventListener('change', onChangeHandler);
  document.getElementById('destino').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  directionsService.route({
    origin: document.getElementById('origen').value,
    destination: document.getElementById('destino').value,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      sweetAlert('La direccion no es correcta  ' + status);
    }
  });
}



