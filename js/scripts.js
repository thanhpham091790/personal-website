function openTab(event, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}
// Get the element with id="aboutTab" and click on it
document.getElementById("aboutTab").click();

function contactMe(){
    document.getElementById("contactTab").click();
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(39.58750084486547, -104.98772658929445),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,

        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        fullscreenControl: true,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(39.58750084486547, -104.98772658929445),
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);

    var infoWindow = new google.maps.InfoWindow({
        content: "7179 S Lincoln Way, Centennial, CO 80122"
    });
    google.maps.event.addListener(marker, 'click', function () {
        var pos = map.getZoom();

        map.setZoom(17);
        map.setCenter(marker.getPosition());

        window.setTimeout(function () {
            map.setZoom(pos);
        }, 3000);

        infoWindow.open(map, marker);
    });
}