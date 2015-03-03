	$(document).ready(function() {
		$("a.search").click( showInput);
		exampleGallery();
	});

	function showInput(){
		$('a.search span').addClass('rotated');
		$('a.search form').show('slow');
		$('a.search').css("background-color", "#fff");
		$('#search-terms').focus();
		$('#search-terms').focusout(hideInput);
		$("input").keypress(function(event) {
		    if (event.which == 13) {
		        event.preventDefault();
		        var searched = $('#search-terms').val();
		        alert("You can search for *" + searched + "* all you want, but I am just here so I don't get fined. I'm just here so I don't get fined. I'm just here so I don't get fined. Shout out to my teammates. Shout out to skittles!")
		    }
		});
	}
	function hideInput(){
		$('a.search form').hide('fast');
		$('#search-terms').val('');
		$('a.search').css("background-color", "rgba(255,255,255,0)");
	}
	function exampleGallery(){
		var exampleImgHeight = $('#examples .wrap-aid img').height();
		$('#examples h3').css('width', exampleImgHeight);
		$('#examples h3').css('top', exampleImgHeight);
	}
	$( window ).resize(exampleGallery);

	$('#nav-trigger').click(function() {
    	$( "nav" ).slideToggle( "fast", function() {
		});
	});

	//test comment

	//With more time I would refine this section to reduce code. Find nearest span.plus in relation to the item currently being hovered upon and rotate that element. 
	$('#categories a.one').hover(function(){$("#categories a.one span.plus").css("transform", "rotate(360deg)")}, function(){$("#categories a.one span.plus").css("transform", "rotate(-360deg)")});
	$('#categories a.two').hover(function(){$("#categories a.two span.plus").css("transform", "rotate(360deg)")}, function(){$("#categories a.two span.plus").css("transform", "rotate(-360deg)")});
	$('#categories a.three').hover(function(){$("#categories a.three span.plus").css("transform", "rotate(360deg)")}, function(){$("#categories a.three span.plus").css("transform", "rotate(-360deg)")});
	$('#categories a.four').hover(function(){$("#categories a.four span.plus").css("transform", "rotate(360deg)")}, function(){$("#categories a.four span.plus").css("transform", "rotate(-360deg)")});
	$('#categories a.five').hover(function(){$("#categories a.five span.plus").css("transform", "rotate(360deg)")}, function(){$("#categories a.five span.plus").css("transform", "rotate(-360deg)")});