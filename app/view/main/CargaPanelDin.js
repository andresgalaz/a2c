/**
 * Prueba de carga dinámica de paneles.
 * Se sugiere una cargador por XTYPE.
 */
Ext.define('A2C.view.main.CargaPanelDin', {
    extend: 'Ext.Panel',
    xtype: 'paneldin',
    requires: ['Ext.form.Panel'],
    title: 'Panel Dinámico',

    initComponent: function () {
        console.log('CargaPanelDin');
        this.items = [{
            xtype: 'form',
            padding: '14 5 8 5',
            border: false,
            // style: 'background-color: #202831;',
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Nombre'
            }, {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email'
            }]
        }];

        this.buttons = [{
            text: 'Grabar',
            action: 'save'
        }, {
            text: 'Cancelar',
            scope: this,
            handler: this.close
        }];

        this.callParent(arguments);
    }
});
