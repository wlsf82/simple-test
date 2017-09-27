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
                    string: "https://google.com"
                },
                {
                    action: "Enter text",
                    css_selector: "#lst-ib",
                    string: "foo"
                },
                {
                    action: "Press key",
                    css_selector: "#lst-ib",
                    key_code: 13
                },
                {
                    action: "Expect to contain",
                    css_selector: "#search h3 a",
                    string: "Foo"
                }
            ]
        },
        {
            description: "expect URL to change",
            steps: [
                {
                    action: "Go to URL",
                    string: "http://todomvc.com"
                },
                {
                    action: "Click",
                    css_selector: "a[href='examples/react']"
                },
                {
                    action: "Expect current URL to equal",
                    expectedUrl: "http://todomvc.com/examples/react/#/",
                }
            ]
        },
        {
            description: "expect element with attribute to contain value",
            steps: [
                {
                    action: "Go to URL",
                    string: "http://todomvc.com/examples/react/#/",
                },
                {
                    action: "Expect element with attribute to contain value",
                    css_selector: ".new-todo",
                    attribute: "placeholder",
                    value: "What needs to be done?"
                }
            ]
        },
        {
            description: "expect element with attribute not to contain value",
            steps: [
                {
                    action: "Go to URL",
                    string: "http://todomvc.com/examples/react/#/",
                },
                {
                    action: "Expect element with attribute not to contain value",
                    css_selector: ".new-todo",
                    attribute: "placeholder",
                    value: "foobarbaz"
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
