function initMap() {

  // Create an array of styles.
  var styles = [
    {
      featureType: "all",
      stylers: [
        { saturation: -90 },
        { lightness: 40 }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  //center position
  var myLatLng = {lat: 51.491657, lng: -0.140775};

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 16,
    center: myLatLng,
    zoomControl: false,
    streetViewControl: false,
    scrollwheel: false,
    navigationControl: false,
    draggable: false,
    mapTypeControl: false,
    mapTypeControlOptions: {
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  var map = new google.maps.Map(document.getElementById('google-map'),
    mapOptions);

  var image = './images/decor/marker.png';

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Our office',
    icon: image
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  //center map when window resizing
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
}






