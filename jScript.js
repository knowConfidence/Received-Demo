$(document).ready(function(){

	var width = $(window).width();

	setCardCenter();

	$(window).resize(function(){

		var newWidth = $(window).width();

		if(newWidth != width){

			width = newWidth;
			setCardCenter();
		}

	});

});

//center image and adjust width/height to fit responsive container
function setCardCenter(){

	var card = $(".card_wrapper");

	card.find("img").removeAttr("height");
	card.find("img").attr("width", "100%");
	card.find(".card_image_wrapper").css("left", 0);

	var imgHeight = card.find(".card_image").outerHeight();
	var textHeight = card.find(".card_text").outerHeight();

	var height = 0;

	var which = false;

	if(imgHeight > textHeight){

		height = imgHeight;
		which = false;
	}
	else{

		height = textHeight;
		which = true;
	}

	card.css("height", height);

	toggleWidthHeight(card, height, which);

}

function toggleWidthHeight(card, height, which){

	if(which){

		card.find("img").attr("height", height+"px");
		card.find("img").removeAttr("width");

		var imgHeight = card.find("img").width();
		var imgWrapper = card.find(".card_image_wrapper").outerWidth();

		var f = imgWrapper - imgHeight;

		card.find(".card_image_wrapper").css("left", f);

	}
}