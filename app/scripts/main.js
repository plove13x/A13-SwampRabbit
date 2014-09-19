

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




// <<<<<<< HEAD
// $('div').hammer({}).bind('panleft panright tap', function(ev){
// =======
// $('div').hammer({}).bind('panleft tap', function(ev){
// >>>>>>> 90be0db2ef898a47641b526bc8d7c93f4736b068
	
// 	$(this).html(ev.type + " gesture detected.");

// });

