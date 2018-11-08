//Owl
	 $("#reviews__owl").owlCarousel({
	    items: 1,
	    nav: true,
     	navText: ["",""],
     	responsive : {
     		421 : {
     			items: 2,
     		},
     		600 : {
     			items: 3,
     		}
	    }
	  });
//Map
	function initMap() {
	  var uluru = {lat: 52.4269058, lng: 16.9364811};
	  var map = new google.maps.Map(
	      document.getElementById('map'), {
	      	zoom: 15,
	      	center: uluru,
	       	disableDefaultUI: true
	       });
	  var iconBase = 'img/';
	  var marker = new google.maps.Marker({
	  	position: uluru,
	  	 map: map,
	  	 icon: iconBase + 'marker.png'
	  });
	}