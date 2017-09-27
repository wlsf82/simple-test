TestSuiteHelper = require("../TestSuiteHelper");
testSuiteHelper = new TestSuiteHelper();

const sampleTestSuite =
    {
        description: "Google",
        beforeAll: [
            {
                action: "Go to URL",
                string: "https://gmail.com"
            }
        ],
        beforeEach: [
            {
                action: "Go to URL",
                string: "https://google.com"
            },
            {
                action: "Click",
                css_selector: "input[name='btnI']"
            }
        ],
        afterEach: [
            {
                action: "Go to URL",
                string: "https://drive.google.com"
            }
        ],
        afterAll: [
            {
                action: "Go to URL",
                string: "http://google.com/pagenotfound"
            }
        ],
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
            description: "search for 'foobar'",
            steps: [
                {
                    action: "Go to URL",
                    string: "https://google.com"
                },
                {
                    action: "Enter text",
                    css_selector: "#lst-ib",
                    string: "foobar"
                },
                {
                    action: "Press key",
                    css_selector: "#lst-ib",
                    key_code: 13
                },
                {
                    action: "Expect to contain",
                    css_selector: "#search h3 a",
                    string: "foobar"
                }
            ]
        }]
    };

const isBeforeAllSet = true;
const isBeforeEachSet = true;
const isAfterEachSet = true;
const isAfterAllSet = true;

describe(sampleTestSuite.description, () => {
    testSuiteHelper.checkIfTestCasesAreSet(sampleTestSuite);
    testSuiteHelper.addBeforeAllCallbackOnTestSuite(sampleTestSuite, isBeforeAllSet);
    testSuiteHelper.addBeforeEachCallbackOnTestSuite(sampleTestSuite, isBeforeEachSet);
    testSuiteHelper.addTestCasesCallbacksOnTestSuite(sampleTestSuite);
    testSuiteHelper.addAfterEachCallbackOnTestSuite(sampleTestSuite, isAfterEachSet);
    testSuiteHelper.addAfterAllCallbackOnTestSuite(sampleTestSuite, isAfterAllSet);
});
