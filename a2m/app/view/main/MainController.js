/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('A2M.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    onTabChange: function (sender) { //, newRecord, oldRecord, eOpts) {
        console.log(sender);
        var panel = sender.getActiveTab();



    },

    onItemSelected: function (sender, record) {
        // alert('Item');
        // Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
        try {
            geo = Ext.create('Ext.util.Geolocation', {
                autoUpdate: true,
                allowHighAccuracy: true,
                frequency: 3000,
                timeout: 30000,
                listeners: {
                    locationupdate: function (geo) {
                        alert(geo.getLatitude() + ", " + geo.getLongitude());
                        return;
                        var map = Ext.getCmp('map');
                        latlon = new google.maps.LatLng(geo.getLatitude(), geo.getLongitude());

                        marker = new google.maps.Marker({
                            position: latlon,
                            map: map.getMap()
                        });
                    },
                    locationerror: function (geo, bTimeout, bPermissionDenied, bLocationUnavailable, message) {
                        if (bTimeout) {
                            alert('Timeout occurred.');
                        } else {
                            alert('Error occurred.' + message);
                        }
                    }
                }
            });
        } catch (error) {
            alert(error);
        }
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});