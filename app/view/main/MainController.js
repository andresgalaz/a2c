/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('A2C.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onTabChange: function (sender) { //, newRecord, oldRecord, eOpts) {
        var panel = sender.getActiveTab();
        console.log(panel, panel.url);
        if (panel.url == undefined || panel.bCargado) return;

        Ext.Ajax.request({
            url: panel.url,
            method: 'post',
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.log(opts);
                panel.bCargado = true;
                panel.setHtml(null);
                panel.add(obj);
            },
            failure: function (response, opts) {
                panel.setHtml('server-side failure with status code ' + response.status);
            }
        })

    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onHeaderSelected: function (h, record) {
        // console.log(record);
        // var p = h.up('app-main');
        // if (h.getHeight() == p.getHeight()) {
        //     console.log('Horizontal');
        //     if (h.getHeight() == 10)
        //         if (h.getWidth() == 10)
        //             h.setHeight(p.getHeight());

        //     if (h.getWidth() == 10)
        //         h.setWidth(150);
        //     else
        //         h.setWidth(10);
        // }
        // if (h.getWidth() == p.getWidth()) {
        //     console.log('Vertical');
        //     if (h.getWidth() == 10)
        //         h.setWidth(p.getWidth());

        //     if (h.getHeight() == 10)
        //         h.setHeight(96);
        //     else
        //         h.setHeight(10);
        // }

    },

    onHeaderResize: function (h, width, height, oldWidth, oldHeight, eOpts) {
        // if (h.getWidth() == 10 || h.getHeight() == 10)
        //     h.setStyle('background-color', 'white');
        // else
        //     h.setStyle('background-color', '#3f4757');
    }


});