$(document).ready(function(){

  var owl = $("#owl-slider");
 
  owl.owlCarousel({
    singleItem : true,
    autoPlay: 10000,
    transitionStyle : "fade"
  });

	
  $("#latest-news-owl").owlCarousel({
      autoPlay: 10000,
  		items : 3,
  		itemsDesktop : [1199,3],
  		itemsDesktopSmall : [979,3]
	});

	$("#upcomming-event-owl").owlCarousel({
      autoPlay: 20000,
  		items : 1,
  		itemsDesktop : [1199,3],
  		itemsDesktopSmall : [979,3]
	});

  $("#campus-life-owl").owlCarousel({
      autoPlay: 30000,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
  });

});