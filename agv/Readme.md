## Usado Sencha TOUCH

```js
geo = Ext.create('Ext.util.Geolocation', {
        autoUpdate: true,
        allowHighAccuracy: true,
        frequency: 3000,
        timeout: 30000,
        listeners: {
            locationupdate: function(geo) {
                var map = Ext.getCmp('map');
                latlon = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());

                marker = new google.maps.Marker({
                    position: latlon,
                    map: map.getMap()
                });
            },
            locationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                if(bTimeout){
                    alert('Timeout occurred.');
                } else {
                    alert('Error occurred.'+message);
                }
            }
        }
    });


watchID = Ext.device.Geolocation.watchPosition({
    frequency: 3000, 
    timeout: 30000,
    allowHighAccuracy: true,
    callback: function(position) {
        var map = Ext.getCmp('map');
        latlon = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.getMap().setCenter(latlon);
 
        marker = new google.maps.Marker({
            position: latlon,
            map: map.getMap(),
            icon : "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=�|117569"
        });

    },
    failure: function(e) {
        console.log('something went wrong!');
        console.log(e);
    }

```
