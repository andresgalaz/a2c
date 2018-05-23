/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'A2C.Application',

    name: 'A2C',

    requires: [
        // This will automatically load all classes in the A2C namespace
        // so that application classes do not need to require each other.
        'A2C.*'
    ],

    // The name of the initial view to create.
    mainView: 'A2C.view.main.Main'
});
