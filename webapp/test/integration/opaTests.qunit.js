/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["testfilter/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
