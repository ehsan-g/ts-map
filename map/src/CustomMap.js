"use strict";
exports.__esModule = true;
// to limit functions used from google ap
var CustomMap = /** @class */ (function () {
    function CustomMap(divId) {
        // @types/googlemaps is responsible for allowing the following
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    // any argument that satisfy the interface
    CustomMap.prototype.addMarker = function (markerType) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: markerType.location.lat,
                lng: markerType.location.lng
            }
        });
        marker.addListener("click", function () {
            var infoWindow = new google.maps.InfoWindow({
                content: markerType.markerContent()
            });
            infoWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMap;
}());
exports.CustomMap = CustomMap;
