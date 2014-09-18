

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
		renTemplate('.image_container','#image_template',photo);
	})
});


$('div').hammer({}).bind('panleft', function(ev){
	
	$(this).textContent = ev.type + " gesture detected.";

})




// var mc = new Hammer($('div')[0]);
// mc.on("panleft panright tap press", function(ev) {
// 	$('div').textContent = ev.type + " gesture detected.";
// });


// var myElement = document.getElementById('myElement');

// // create a simple instance
// // by default, it only adds horizontal recognizers
// var mc = new Hammer(myElement);

// // listen to events...
// mc.on("panleft panright tap press", function(ev) {
//     myElement.textContent = ev.type +" gesture detected.";
// });
