/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ALogin.Application',

    name: 'ALogin',

    requires: [
        // This will automatically load all classes in the ALogin namespace
        // so that application classes do not need to require each other.
        'ALogin.*'
    ],

    // The name of the initial view to create.
    mainView: 'ALogin.view.login.Login'
});
