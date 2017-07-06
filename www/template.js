/* global cordova:false */
/* globals window */

var exec = cordova.require('cordova/exec'),
    utils = cordova.require('cordova/utils'),
    pluginName = 'Echo';

var template = {
    echo: function(successCallback, errorCallback, message, forceAsync) {
        var action = 'echo';

        if (forceAsync) {
            action += 'Async';
        }

        exec(successCallback, errorCallback, pluginName, action, [message]);
    }
};

module.exports = template;
