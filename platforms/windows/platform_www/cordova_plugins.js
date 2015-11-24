cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-x-toast/www/Toast.js",
        "id": "cordova-plugin-x-toast.Toast",
        "pluginId": "cordova-plugin-x-toast",
        "clobbers": [
            "window.plugins.toast"
        ]
    },
    {
        "file": "plugins/cordova-plugin-x-toast/test/tests.js",
        "id": "cordova-plugin-x-toast.tests",
        "pluginId": "cordova-plugin-x-toast"
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/windows/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local",
            "plugin.notification.local"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "clobbers": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            "cordova.plugins.notification.local.core",
            "plugin.notification.local.core"
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/src/windows/LocalNotificationProxy.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Proxy",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/src/windows/LocalNotificationCore.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Proxy.Core",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.local-notification/src/windows/LocalNotificationUtil.js",
        "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Proxy.Util",
        "pluginId": "de.appplant.cordova.plugin.local-notification",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{}
// BOTTOM OF METADATA
});