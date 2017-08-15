module.exports.config = {
    directConnect: true,

    specs: [ "spec.js" ],

    capabilities: {
        "browserName": "chrome",
    },

    onPrepare() {
        browser.ignoreSynchronization = true;
    }
};
