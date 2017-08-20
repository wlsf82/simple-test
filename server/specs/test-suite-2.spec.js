TestSuiteHelper = require("../TestSuiteHelper");
testSuiteHelper = new TestSuiteHelper();

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
    testSuiteHelper.checkIfTestCasesAreSet(sampleTestSuite);

    testSuiteHelper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);

    testSuiteHelper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);

    testSuiteHelper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);

    testSuiteHelper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);

    testSuiteHelper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
