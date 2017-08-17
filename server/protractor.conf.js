const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

module.exports.config = {
    directConnect: true,

    specs: [ "spec.js" ],

    capabilities: {
        "browserName": "chrome",
    },

    onPrepare() {
        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "server/test-report",
            fileName: "e2e-test-report",
            fixedScreenshotName: true,
            cleanDestination: false,
            consolidate: false,
            takeScreenshotsOnlyOnFailures: true,
        }));
    }
};
