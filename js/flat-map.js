jQuery(document).ready(function () {
    var map;
    var centerPosition = new google.maps.LatLng(39.5, -98.35);

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
        disableDefaultUI: true
    };
    map = new google.maps.Map($('#map')[0], options);
    map.setOptions({
        styles: style
    });

    var destinations = [
    new google.maps.LatLng(27.773056, -82.640000),
    new google.maps.LatLng(30.438256, -84.280733),
    new google.maps.LatLng(29.951066, -90.071532),
    new google.maps.LatLng(30.267153, -97.743061)
    ];

    var markers = [];
    var iterator = 0;

    var image = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/marker.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 59)
    };
    var shadow = {
        url: 'https://dl.dropboxusercontent.com/u/814783/fiddle/shadow.png',
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(-2, 36)
    };
    
    function drop() {
        for (var i = 0; i < destinations.length; i++) {
            setTimeout(function() {
                addMarker();
            }, i * 200);
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