const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const path = require("path");
const paths = require("../config/paths");

module.exports.config = {
    directConnect: true,
    specs: [ 
        path.resolve(paths.tmp, "*.js"),
    ],
    capabilities: {
        "browserName": "chrome",
    },
    params: {
        DEFAULT_TIMEOUT_MS: 3000,
    },
    onPrepare() {
        browser.ignoreSynchronization = true;

        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: "test-report",
            fileName: "e2e-test-report",
            fixedScreenshotName: true,
            cleanDestination: false,
            consolidate: false,
            takeScreenshotsOnlyOnFailures: true,
        }));
    }
};

