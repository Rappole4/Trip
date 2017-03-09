// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// VARIABLES ######################################################################################
// 
// 
var directionsDisplay;
var directionsService;
var map;
// FUNCTIONS ######################################################################################
// 
// 
// initiating the map
function initMap() {
	if (document.getElementById('map')) { 
		map = new google.maps.Map(document.getElementById('map'));
		directionsService = new google.maps.DirectionsService();
		directionsDisplay = new google.maps.DirectionsRenderer();
		directionsDisplay.setMap(map)
	};
}
// Calculating the route 
function calcRoute() {
	if (document.getElementById('map')) { 
		var start = document.getElementById('origin').value;
		var end = document.getElementById('destination').value;
		var mode = document.getElementById('mode').value;
		var request = {
			origin: start,
			destination: end,
			travelMode: mode,
		};
		directionsService.route(request, function(result, status) {
			if (status == 'OK') {
				directionsDisplay.setDirections(result);
			}
		})
	};
}
function TravelTime() {
	if ((document.getElementById('map'))&&(document.getElementById('TimeDistance'))) { 
		var service = new google.maps.DistanceMatrixService();
		return service.getDistanceMatrix(
	  {
	   //  arrivalTime: Date,
	  	// departureTime: Date,
	  	travelMode: document.getElementById('mode').value,
	  	origins: [document.getElementById('origin').value],
	  	destinations: [document.getElementById('destination').value] 
	  }, function(response,status){
	  	console.log(response,status)
	  	document.getElementById('travelDistance').innerText = response.rows[0].elements[0].distance.text
	  	document.getElementById('travelDuration').innerText = response.rows[0].elements[0].duration.text
	  })
	}
}
// EVENTS ######################################################################################
// 
// 
document.addEventListener("DOMContentLoaded",function(){
	if (document.getElementById('map')) { 
		initMap();
		calcRoute();
		document.getElementById("search").addEventListener("submit",function(event){
			event.preventDefault();
			calcRoute();
			TravelTime();
		})
	};
});