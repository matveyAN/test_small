$(document).ready(function(){
	$('#owl-carousel').owlCarousel({
	singleItem: true,
	navigation: true,
	navigationText: false,
	items: 1,
	});


    $('body').on('mouseenter', '.first', function(e){
        $(this).css('background-color', '#49cbcd');
        $('.first_p').css('background-color', '#49cbcd');
    }).on('mouseout', '.first', function(e){
        $(this).css('background-color', '#788492');
        $('.first_p').css('background-color', '#485460');
    });
	
	$('body').on('mouseenter', '.second', function(e){
        $(this).css('background-color', '#49cbcd');
        $('.second_p').css('background-color', '#49cbcd');
    }).on('mouseout', '.second', function(e){
        $(this).css('background-color', '#788492');
        $('.second_p').css('background-color', '#485460');
    });

    $('body').on('mouseenter', '.third', function(e){
        $(this).css('background-color', '#49cbcd');
        $('.third_p').css('background-color', '#49cbcd');
    }).on('mouseout', '.third', function(e){
        $(this).css('background-color', '#788492');
        $('.third_p').css('background-color', '#485460');
    });

    $('.btn_menu').click(function(){
        $('nav').slideToggle();
    });
});

	
