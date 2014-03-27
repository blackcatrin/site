$(document).ready(function(){
	var $window = $(window),
		windowHeight = $window.height(),
		blockVisible = false,
		tempScrollTop = 0,
		currentScrollTop = 0,		
		min = 0,
		max = 0,
		curscroll,
		dataArray = {};

  if (document.all && document.querySelector && !document.addEventListener) {
    $('body').addClass('ie8');
  }



////////////////////////////////////////////////////////////
// Карта 
////////////////////////////////////////////////////////////
/* FUNCTIONS UTILS*/
/**
* function browser
* arg: "width" or "height"
* @return width or the height of the current browser window.
*/
initializeMap();
function initializeMap() {
    // styles
    var styles = [
	    {
	      "featureType": "all",
	      "elementType": "all",
	      "stylers": [
	      	{ "hue": "#ff9100" },
	      	{ "saturation": 36 },
	        { "weight": 1.4 },
	        { "lightness": 6 },
	        { "gamma": 1.07 }
	      ]
	    }
    ]

    //var jvstLat = 37.7651725,
    //		jvstLng = -122.3868376;
    var jvstLat = 45.06000,
    		jvstLng = 38.941235;

    var styledMap = new google.maps.StyledMapType(styles, {name: "БизнесКод"});
    var mapOptions = {
        zoom: 16,
        scrollwheel: false,
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        streetViewControl: false,
        disableDefaultUI: false,
        center: new google.maps.LatLng(jvstLat, jvstLng),
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var jvstLogo = new google.maps.MarkerImage('content/site/images/logo_map.png',
        new google.maps.Size(200,61),
        new google.maps.Point(0,0),
        new google.maps.Point(50,50)
    );
    var jvstPos = new google.maps.LatLng(jvstLat, jvstLng);
    var companyMarker = new google.maps.Marker({
      position: jvstPos,
      map: map,
      url: 'https://maps.google.com/maps?q=1/1+Атарбекова+улица,+Краснодар,+CA&hl=ru&sll='+jvstLat+','+jvstLng+'&sspn=10.118071,19.731445&oq=25+stillman+st&hnear=1/1+Атарбекова+улица,+Краснодар&t=m&z=16',
      icon:jvstLogo,
      title:"JVST Headquaters"
		});
    google.maps.event.addListener(companyMarker, 'click', function() {
      window.open(
        companyMarker.url,
        '_blank'
      );
    });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var latlng = new google.maps.LatLng(jvstLat, jvstLng);
    var settings = {
        zoom: 15,
        center: latlng,
        mapTypeControl: false,
        mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
};
////////////////////////////////////////////////////////////
// Слайдер в отзывах
////////////////////////////////////////////////////////////
  $('.link_menu_list a').on('click', function(event) {
    $(this).parents('.main_menu').find('ul').slideToggle(400);
    $(this).toggleClass('active');
    event.preventDefault();
    /* Act on the event */
  });


});
