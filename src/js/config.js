jQuery.noConflict();

(function(pluginId, $) {
	"use strict";

	$(function() {

		var config = kintone.plugin.app.getConfig(pluginId);
		if (config['target']) {
			$('#target').val(config['target']);
		}

		$('#setting-submit').click(function() {
			var config = {};
			config['target'] = $('#target').val();
			kintone.plugin.app.setConfig(config);
		});
		$('#setting-cancel').on('click', function() {
			history.back();
		});
	});
})(kintone.$PLUGIN_ID, jQuery);
