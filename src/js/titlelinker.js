jQuery.noConflict();

(function(pluginId, $) {
    "use strict";

    var APPID = kintone.app.getId();
    var config = kintone.plugin.app.getConfig(pluginId);

    kintone.events.on([
        "app.record.index.show",
        "app.record.detail.show",
        "app.record.create.show",
        "app.record.edit.show"
    ], function(e) {
        if (config['target'] === null) {
            return e;
        }
        $('.gaia-argoui-app-infobar-info a').attr('target', config['target']);
    });
})(kintone.$PLUGIN_ID, jQuery);
