/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'A2M.Application',

    name: 'A2M',

    requires: [
        // This will automatically load all classes in the A2M namespace
        // so that application classes do not need to require each other.
        'A2M.*'
    ],

    // The name of the initial view to create.
    mainView: 'A2M.view.main.Main'
});
