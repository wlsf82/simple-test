TestSuiteHelper = require("../TestSuiteHelper");
testSuiteHelper = new TestSuiteHelper();

const sampleTestSuite =
    {
        description: "Sample test suite 2",
        testCases: [{
            description: "search for 'foo'",
            steps: [
                {
                    description: "Go to URL",
                    string: "https://google.com"
                },
                {
                    description: "Enter text",
                    css_selector: "#lst-ib",
                    string: "foo"
                },
                {
                    description: "Press key",
                    css_selector: "#lst-ib",
                    key_code: 13
                },
                {
                    description: "Expect to contain",
                    css_selector: "#search h3 a",
                    string: "Foo"
                }
            ]
        },
        {
            description: "expect URL to change",
            steps: [
                {
                    description: "Go to URL",
                    string: "http://todomvc.com"
                },
                {
                    description: "Click",
                    css_selector: "a[href='examples/react']"
                },
                {
                    description: "Expect current URL to equal",
                    expectedUrl: "http://todomvc.com/examples/react/#/",
                }
            ]
        }]
    };

const isBeforeAllSet = false;
const isBeforeEachSet = false;
const isAfterEachSet = false;
const isAfterAllSet = false;

describe(sampleTestSuite.description, () => {
    testSuiteHelper.checkIfTestCasesAreSet(sampleTestSuite);
    testSuiteHelper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);
    testSuiteHelper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);
    testSuiteHelper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);
    testSuiteHelper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);
    testSuiteHelper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
