jQuery(document).ready(function () {
    var map;
    var centerPosition = new google.maps.LatLng(39.5, -98.35);
    window.mobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        window.mobile = true;
    }

    var style = [{
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#ffffff"
        }]
    }, {
        "featureType": "road.arterial",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#fee379"
        }]
    }, {
        "featureType": "landscape",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#f3f4f4"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#7fc8ed"
        }]
    }, {}, {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#83cead"
        }]
    }, {
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [{
            "weight": 0.9
        }, {
            "visibility": "off"
        }]
    }]

    var options = {
        zoom: 4,
        center: centerPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        disableDoubleClickZoom: true
    };

    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });

    var st_pete = new google.maps.LatLng(27.773056, -82.640000),
    tallahassee = new google.maps.LatLng(30.438256, -84.280733),
    new_orleans = new google.maps.LatLng(29.951066, -90.071532),
    houston = new google.maps.LatLng(29.760193, -95.369390),
    austin = new google.maps.LatLng(30.267153, -97.743061),
    fort_worth = new google.maps.LatLng(32.725409, -97.320850),
    oklahoma_city = new google.maps.LatLng(35.467560, -97.516428),
    wichita = new google.maps.LatLng(37.688889, -97.336111),
    denver = new google.maps.LatLng(39.737567, -104.984718),
    las_vegas = new google.maps.LatLng(36.114646, -115.172816),
    paso_robles = new google.maps.LatLng(35.632279, -120.664187),
    napa = new google.maps.LatLng(38.297538, -122.286865),
    san_francisco = new google.maps.LatLng(37.774929, -122.419416),
    sacramento = new google.maps.LatLng(38.581572, -121.494400),
    gasquet = new google.maps.LatLng(41.845483, -123.969508),
    eugene = new google.maps.LatLng(44.052069, -123.086754),
    portland = new google.maps.LatLng(45.523452, -122.676207),
    tacoma = new google.maps.LatLng(47.252877, -122.444291),
    seattle = new google.maps.LatLng(47.606209, -122.332071);

    var destinations = [
    st_pete,
    tallahassee,
    new_orleans,
    houston,
    austin,
    fort_worth,
    oklahoma_city,
    wichita,
    denver,
    las_vegas,
    paso_robles,
    napa,
    san_francisco,
    sacramento,
    san_francisco,
    gasquet,
    eugene,
    portland,
    tacoma,
    seattle,
    tacoma
    ];

    var markers = [];
    var iterator = 0;

    var image = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/marker.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 59)
    };
    
    function drop() {
        for (var i = 0; i < destinations.length; i++) {
            if (window.mobile) {
                addMarker();
            } else {
                setTimeout(function() {
                    addMarker();
                }, i * 100);
            }
        }
    }

    function addMarker() {
        markers.push(new google.maps.Marker({
            position: destinations[iterator],
            map: map,
            icon: image,
            animation: google.maps.Animation.DROP
        }));
        iterator++;
    }

    drop();
});