

// function to render templates
function renTemplate(container, templateId, data){
	var renderedTemplate = _.template($(templateId).text())(data);
	$(container).append(renderedTemplate);
}


// flickr GET requests for images
$.ajax({
	type: "GET",
	url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=69def67a50bf57c830a6a1b71d5a2f61&tags=bicycle,bicycles&per_page=3&min_taken_date=2014-09-10&format=json&jsoncallback=?",
	dataType: "json"
})
.done(function(data){
	var photos = data.photos.photo;
	_.each(photos, function(photo){
		renTemplate('.imgContainer','#image_template',photo);
	})
});

/////// MAP CREATE ////////

//traverlersrest LatLng dictates map center
var travelersrest = new google.maps.LatLng(34.967617, -82.443455);
//swamprabbitbrewery LatLng dictates icon location
var swamprabbitbrewery = new google.maps.LatLng(34.967617, -82.443455);

function initialize() {
var mapOptions = {
zoom: 13,
center: travelersrest
};

var map = new google.maps.Map(document.getElementById('map-canvas'),
mapOptions);

var marker = new google.maps.Marker({
map:map,
///allows you to drag the marker if set to true
draggable:true,
///google.maps.Animation. can be set to BOUNCE or DROP
animation: google.maps.Animation.BOUNCE,
position: swamprabbitbrewery
});
}
//delays Google Map related script until page has loaded
//run function initialize once the page has loaded
google.maps.event.addDomListener(window, 'load', initialize);

///////////////////////////




// $('div').hammer({}).bind('panleft panright tap', function(ev){
// =======
// $('div').hammer({}).bind('panleft tap', function(ev){
	
// 	$(this).html(ev.type + " gesture detected.");

// });


//  $('div').hammer({}).bind('panleft tap', function(ev){
//
//  	$(this).html(ev.type + " gesture detected.");
//
//  });
