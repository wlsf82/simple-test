Helper = require("../helper");
helper = new Helper();

const sampleTestSuite =
    {
        description: "Sample test suite 2",
        testCases: [{
            description: "search for 'foo'",
            steps: [
                {
                    action: "Go to URL",
                    url: "https://google.com"
                },
                {
                    action: "Enter text",
                    css_selector: "#lst-ib",
                    text: "foo"
                },
                {
                    action: "Press key",
                    css_selector: "#lst-ib",
                    key: "ENTER"
                },
                {
                    action: "Expect to contain",
                    css_selector: "#search h3 a",
                    text: "Foo"
                }
            ]
        }]
    };

const isBeforeAllSet = false;
const isBeforeEachSet = false;
const isAfterEachSet = false;
const isAfterAllSet = false;

describe(sampleTestSuite.description, () => {
    if (typeof(sampleTestSuite.testCases) === "undefined" || typeof(sampleTestSuite.testCases[0]) === "undefined") {
        console.log("Test steps are mandatory!");
        return;
    }

    helper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);

    helper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);

    helper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);

    helper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);

    helper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
