  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var msg = "HAHAHAHA nie wyszło";
    var divLong = document.getElementById("long");
    var divLat = document.getElementById("lat");
    var divStatus = document.getElementById("status");
      
    if(Modernizr.geolocation){
        navigator.geolocation.getCurrentPosition(success, fail);
        divStatus.textContent = "Sprawdzane połacznia"
    }else{
        divStatus.textContent = msg;
    }
      
    function success(location){
        msg = '<h3>dlugosc geograficzna:<br>';
        divLong.textContent = location.coords.longitude;
        msg += '<h3>szerokosc geograficzna:<br>';
        divLat.textContent = location.coords.latitude;
        }
    if(Modernizr.localstorage){}
    }
    function fail(msg){
        if(msg.code == "1"){
        divStatus.textContent = "brak uprawnień";
        }
        if(msg.code == "2"){
        divStatus.textContent = "dane niedostępne";
        }
        if(msg.code == "3"){
        divStatus.textContent = "przekroczenie czasu oczekiwania";
        }
    }
  });